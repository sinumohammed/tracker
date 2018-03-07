<template>
  <div>
    <h1>Register</h1>
    <input
    type='email'
    placeholder='email'
    v-model='email'/>
    <br>
    <input
    type='password'
    placeholder='password'
    v-model='password'/>
    <br>
    <div v-html='error'></div>
    <button
    @click='register'
    >Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
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
        const Response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(Response.data)
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
