<template>
    <div v-if = "loadingContent" id = "loading">
        <w-spinner class = "mt12"></w-spinner>
    </div>

    <div v-else>
    <w-flex grow>
      <aside>
          <w-flex class = "wrapper">
              <ul>

            <div class = "text-left ml5 pb3" v-for = "(value, space, index) in navContent" :key = "index">
                <li><router-link class = "link" :to="value.path">{{ space }}</router-link></li>
                <ul>
                    <div class = "ml4" v-for = "(route, child, index2) in value.children" :key = "index2">
                    <li><router-link class ="link" :to="route">{{ child }}</router-link></li>
                </div>
                </ul>
            </div>
              </ul>
          </w-flex>
      </aside>
      <main class="grow">
          <h1 class = "title2 text-left text-bold">{{ mainContent.head }}</h1>
          <h1 class = "title4 text-left mb">{{ $route.params.space }} => {{ $route.params.child }} => {{ $route.params.post }}</h1>
          <p class="text-left mb5 text-bold">by {{ mainContent.author }} on {{ mainContent.created }}</p>
          <p class = "text-left">{{mainContent.content}}</p>

      </main>
    </w-flex>
    </div>
</template>

<script>
export default {
    name: "User",
    data(){
        return{
            loadingContent: true,
            navContent : {},
            mainContent: {}
        }
    },
    async mounted(){
        this.loadingContent = true
        fetch(`${import.meta.env.VITE_API_BASE_URL}/getPost`, {
            method:"POST",
            headers: {
                "Content-Type" : 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({db: this.$route.params.space, child: this.$route.params.child, post: this.$route.params.post})
        })
        .then(res=> res.json())
        .then(data => {
            console.log("Received:",data)
            this.navContent = data.nav
            this.mainContent = data.result
            this.loadingContent = false
        })
    }
}
</script>




<style>
.author, .date{
    color: #14277d;
}

#loading{
    min-height: 100vh;
}

aside{

  padding: 12px;
  min-height: 90vh;
  text-transform: uppercase;
  color: #666;
  border: 2px solid rgba(0, 0, 0, 0.07);
}

main {
  padding: 12px;
  min-height: 90vh;
  color: #666;
  border: 2px solid rgba(0, 0, 0, 0.07);
}

aside {background-color: #e2f0f7; min-width: 20%;}
main {background-color: #e6f3f7;}

a:link{
    color: #14277d;
    text-decoration: underline;
}
a:hover{
    color: red;
}

</style>