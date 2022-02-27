<template>
<w-form @submit = "onSubmit" v-model = "formValid" class="mxa my12" style = "width: 30%;" autocomplete = "off">
    <p class = "title3">Login</p>
    <w-input class = "my5" label = "username" default = "" v-model:model-value = "usernameInput"
        :validators = "validators">Username</w-input>
    <w-input class="my5" v-model = "passwordInput" default = ""
    label="Password" :validators = "validators"
    :type="isPassword ? 'password' : 'text'"
    :inner-icon-right="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
    @click:inner-icon-right="isPassword = !isPassword">
    </w-input>
    <w-button :loading = "loading" class="my10 pa4" type = "submit">Submit</w-button>
</w-form>
</template>

<script>
import md5 from 'md5'
export default {
    data(){
        return {
            usernameInput: "",
            passwordInput: "",
            loading: false,
            formValid: null,
            isPassword: true,
              validators: [
                  value => !!value || 'This field is required',
                  value => value.length <= 20 || 'Cannot be more than 20 characters'
              ]
        }
    },
    methods: {
        async onSubmit(){
            if(this.formValid){
                this.loading = true
                const hashPassword = md5(this.passwordInput)
                
                fetch(`${import.meta.env.VITE_API_BASE_URL}/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type" : 'application/json; charset=UTF-8'
                    },
                    body: JSON.stringify({username: this.usernameInput, password: hashPassword})
                }).then(response => response.json())
                .then(data=> {
                    try{
                        console.log("Received:" ,data)
                        if(data.status === "OK"){
                            window.user = data.session_id
                            window.username = data.username
                            this.$router.push({name: 'User'})
                        }else if(data.status === "ERROR"){
                            if(data.ERROR === "USER NOT FOUND"){
                                this.$waveui.notify({message:'USER NOT FOUND', color : "error"})
                            }else if(data.ERROR === 'Wrong Password'){
                                this.$waveui.notify({message: "Wrong Password", color: "error"})
                            }else{
                                this.$waveui.notify({message:'Server Error', color : "error"})
                            }
                        }
                    }catch(e){
                        console.error(e)
                        this.$waveui.notify({message: 'Server Error', color: error})
                    }
                })
                this.loading=false
                
            }
        }
    },

}
</script>