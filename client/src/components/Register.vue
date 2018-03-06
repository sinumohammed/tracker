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
      email: 'abc',
      password: '123'
    }
  },
  methods: {
    async register () {
      const Response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(Response.data)
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
