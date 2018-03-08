<template>
  <v-layout-column>
    <v-flex xs6 offset-xs3>
      <div class='white elevation-2'>
        <v-toolbar flat dense class='cyan' dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
    <div class='pl-4 pr-4 pt-2 pb-2'>
      <v-text-field
            label='E-mail'
            v-model='email'
          >
      </v-text-field>
      <br>
      <v-text-field
            label='Password'
            type='password'
            v-model='password'
          ></v-text-field>
      <br>
      <div class='error' v-html='error'></div>
      <v-btn class='cyan'
      @click='login' dark
      >Login</v-btn>
    </div>
  </div>
  </v-flex>
  </v-layout-column>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const Response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.error = Response.data.message
      } catch (error) {
        this.error = error.response.data.error || error.response.data.message
      }
    }
  }
  // watch: {
  //   email (value) {
  //     console.log('Email changed', value)
  //   }
  // },
  // mounted () {
  //   setTimeout(() => {
  //     this.email = 'sinumohammed@gmail.com'
  //   }, 2000)
  // }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
