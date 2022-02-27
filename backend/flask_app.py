
# A very simple Flask Hello World app for you to get started with...

from flask import Flask
from flask import request
from flask_cors import CORS

import json
import time

import mysql.connector as db
from mysql.connector import errorcode
from mysql.connector.errors import Error as dbError

import logging
from random import randint


logger = logging.getLogger()

# Private Databases
private = ['mostlyaman$users', 'information_schema', 'mostlyaman$default']

# Flask Settings

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": 'http://localhost:4173'}})


# Storing User Sessions

active_users = {}
session_ids = []

# connecting to database
connectUsers = db.connect(host = "mostlyaman.mysql.pythonanywhere-services.com", user = "mostlyaman", password = "aman@123", database="mostlyaman$users")

def connectDB():
    global connectUsers
    try:
        connectUsers = db.connect(host = "mostlyaman.mysql.pythonanywhere-services.com", user = "mostlyaman", password = "aman@123", database="mostlyaman$users")
    except dbError as err:
        connectUsers = {}
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            connectUsers['ERROR'] = "DB_ACCESS_DENIED"
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            connectUsers['ERROR'] = "BAD_DATABASE"
        else:
            connectUsers['ERROR'] = str(err)

def getCursor():
    try:
        db_cursor = connectUsers.cursor()
    except dbError:
        connectDB()
        db_cursor = connectUsers.cursor()
    finally:
        if isinstance(connectUsers, dict):
            return ['ERROR', json.dumps({'status':'ERROR', 'ERROR': connectUsers['ERROR']})]
        else:
            return ['OK', db_cursor]

def rng():
    x = randint(10, 10000000)
    while(x in session_ids):
        x = randint(10, 10000000)
    session_ids.append(x)
    return x



@app.route('/api/v1/login', methods = ['POST'])
def login():
    username = request.get_json()['username']
    password = request.get_json()['password']
    status, db_cursor = getCursor()
    if(status == "ERROR"):
        return db_cursor
    try:
        db_cursor.execute('use mostlyaman$users')
        db_cursor.execute('select password from user where username = %s' % ('"%s"' % username))
        for i in db_cursor:
            if i[0] == password:
                a = rng()
                active_users[username] = {'time':time.time(), 'session_id': a}
                return json.dumps({'username': username, 'password': password,'session_id': a, 'status':'OK'})
            else:
                return json.dumps({'username': username, 'password':password, 'status':'ERROR', 'ERROR': 'Wrong Password'})
        return json.dumps({'status': 'ERROR', 'ERROR': 'USER NOT FOUND'})
    except dbError as e:
        return json.dumps({'status':'ERROR',"ERROR": str(e)})


@app.route('/api/v1/getUsers', methods = ['GET'])
def getActiveUsers():
    return json.dumps(active_users)

def parse_cursor_output(cursor, command):
    try:
        cursor.execute(command)
        result = []
        for i in cursor:
            result.append(i)
        return ["OK", result]
    except dbError as e:
        return ["ERROR", str(e)]


@app.route('/api/v1/getHome', methods = ['GET'])
def getHome():
    status, db_cursor = getCursor()
    if(status == "ERROR"):
        return json.dumps({"status":"ERROR", "ERROR": db_cursor})
    status, res = parse_cursor_output(db_cursor, "show databases")
    if(status == "ERROR"):
        return json.dumps({"status" : "ERROR", "ERROR": res})
    else:
        nav= {}
        popular = {}
        for i in res:
            if i[0] not in private:
                db_cursor.execute('use %s' % i[0])
                name = i[0][11:]
                path = ""
                children = {}
                status, response = parse_cursor_output(db_cursor, "select * from self")
                if(status == "ERROR"):
                    return json.dumps({"status":"ERROR", "ERROR": response})
                else:
                    for j in response:
                        if j[0] == "self":
                            path = j[1]
                        else:
                            children[j[0]] = j[1]
                nav[name] = {"path" : path, "children": children}
                status, tables = parse_cursor_output(db_cursor, 'select * from self where not name = "self"')
                if(status == "ERROR"):
                    return json.dumps({"status":"ERROR", "ERROR": tables})
                else:
                    for table in tables:
                        path = table[1]
                        status, posts = parse_cursor_output(db_cursor, "select * from %s order by created DESC LIMIT 3" % table[0])
                        if(status == "ERROR"):
                            return json.dumps({'status':"ERROR", "ERROR": posts })
                        else:
                            for post in posts:
                                popular[path+'/'+str(post[0])] = {'author':post[1], 'head':post[2],'created':str(post[3]),'content':post[4]}
        #TODO: add code to calculate popular posts.
        return json.dumps({"status":"OK", "nav":nav, "popular": popular})


@app.route('/api/v1/getPost', methods = ['POST'])
def getPost():
    db = request.get_json()['db']
    child = request.get_json()['child']
    post = request.get_json()['post']
    status, db_cursor = getCursor()
    if(status == "ERROR"):
        return json.dumps({"status":"ERROR", "ERROR": db_cursor})
    status, res = parse_cursor_output(db_cursor, "show databases")
    if(status == "ERROR"):
        return json.dumps({"status" : "ERROR", "ERROR": res})
    else:
        nav= {}
        result = {}
        for i in res:
            if i[0] not in private:
                db_cursor.execute('use %s' % i[0])
                name = i[0][11:]
                path = ""
                children = {}
                status, response = parse_cursor_output(db_cursor, "select * from self")
                if(status == "ERROR"):
                    return json.dumps({"status":"ERROR", "ERROR": response})
                for j in response:
                    if j[0] == "self":
                        path = j[1]
                    else:
                        children[j[0]] = j[1]
                nav[name] = {"path" : path, "children": children}
        status, result = parse_cursor_output(db_cursor, "select * from mostlyaman$"+db+"."+child+" where post = "+post)
        result = result[0]
        if(status == "ERROR"):
            return json.dumps({"status":"ERROR", "ERROR": result})
        try:
            return json.dumps({"status":"OK", "nav":nav, "result":{'author':result[1], 'head':result[2], 'created': str(result[3]), "content" :result[4] }})
        except Exception as e:
            return json.dumps({"status":"ERROR", "ERROR":str(e)})

