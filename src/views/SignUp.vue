<template>
  <div class="sign-up">
    <img src="../assets/logo.png" width="300px">
    <h3>Create a new account</h3>
    <input
      v-model="email" 
      type="text" 
      class="input" 
      placeholder="Email" 
      required>
    <br>
    <input 
      v-model="password"
      type="password" 
      class="input" 
      placeholder="Password" 
      required>
    <br>
    <button v-on:click="signUp" class="button">Sign Up!</button>
    <button class="button">
      <router-link to="/login">
        Back
      </router-link>
    </button>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import {
    Action
  } from 'vuex-class';

  @Component
  export default class Login extends Vue {
    @Action("login", { namespace: "Auth" }) dispatchLogin: any
    // data
    email = ''
    password = ''

    // methods
    signUp () {
      this.dispatchLogin({email: this.email, password: this.password})
    }

  }
</script>