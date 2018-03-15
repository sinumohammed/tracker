<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class='white elevation-2'>
        <v-toolbar flat dense class='cyan' dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
    <div class='pl-4 pr-4 pt-2 pb-2'>
      <form
          name="tab-tracker-form"
          autocomplete="off">
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
           autocomplete="new-password"
          ></v-text-field>
        </form>
      <br>
      <div class='error' v-html='error'></div>
      <v-btn class='cyan'
      @click='register' dark
      >Register</v-btn>
    </div>
  </div>
  </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: 'sinumohammed',
      password: '50525',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })

        this.$store.dispatch('setToken', response.token)
        this.$store.dispatch('setUser', response.user)
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
