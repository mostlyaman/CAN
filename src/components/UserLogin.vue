<template>
<w-form v-model = "formValid" class="mxa my12" style = "width: 30%;" autocomplete = "off">
    <p class = "title3">Login</p>
    <w-input class = "my5" label = "username" default = "" v-model:model-value = "usernameInput"
        :validators = "validators">Username</w-input>
    <w-input class="my5" v-model = "passwordInput" default = ""
    label="Password" :validators = "validators"
    :type="isPassword ? 'password' : 'text'"
    :inner-icon-right="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
    @click:inner-icon-right="isPassword = !isPassword">
    </w-input>
    <w-button class="my10 pa4" type = "submit">Submit</w-button>
</w-form>
</template>

<script>
export default {
    data(){
        return {
            usernameInput: "",
            passwordInput: "",
            formValid: true,
            isPassword: true,
              validators: [
                  value => !!value || 'This field is required',
                  value => value.length <= 20 || 'Cannot be more than 20 characters'
              ]
        }
    },

}
</script>