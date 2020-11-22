
<template>
  <div class="login">
    <img src="../assets/logo.png" width="300px">
    <h3>DC Comics Rebirth - Covers</h3>
    <input 
      type="text" 
      v-model="email" 
      placeholder="Email address" 
      class="input" 
      required>
    <br/>
    <input 
      type="password" 
      v-model="password"
      placeholder="Password" 
      class="input" 
      required>
    <br/>
    <button v-on:click="login" class="button">Enter</button>
    <p><router-link to="/signup">
      New Here? Create a new account
    </router-link></p>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import {
    Action
  } from 'vuex-class';

  @Component
  export default class Login extends Vue {
    @Action("login", { namespace: "Auth" }) dispatchlogin: any
    // data
    email = ''
    password = ''

    // methods
    login() {
      this.dispatchlogin({email: this.email, password: this.password})
    }
  }
</script>