<template>
  <div>
    <button class="button logout" v-on:click="logout">Logout</button>
    <article class="covers" v-for="(comic, idx) in comics" :key="idx">
      <div>
        <img style="margin: 10px" :src="comic.image" height="291px" width="192px">
        <p >{{ comic.name }}</p>
        <hr>
        <button class="button" @click="deleteComic(comic.id)">
          Delete
        </button>
      </div>
    </article>

    <form @submit.prevent="addComics(name, image)">
      <h2>Add a New Comic Cover</h2>
      <input v-model="name" placeholder="Comic Name" class="input" required>
      <input v-model="image" placeholder="Comic Image URL" class="input" required>
      <button type="submit" class="button">Add New Comic</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {
  Getter,
  Action
} from 'vuex-class';
import { Comics } from "../store/comics/types"

@Component
export default class Comix extends Vue {
  @Getter("getComicses", { namespace: 'Comicses' }) comics!: Comics
  @Action('addComic', { namespace: 'Comicses' }) dispatchAddComics: any
  @Action('deleteComics', { namespace: 'Comicses' }) dispatchDeleteComics: any
  @Action('logout', { namespace: 'Auth' }) dispatchLogout: any
  name = ''
  image = ''


  addComics (name: string, image: string) {
    this.dispatchAddComics({name, image})
    // Clear values
    this.name = ''
    this.image = ''
  }

  deleteComics (id: string) {
    this.dispatchDeleteComics(id)
  }

  logout () {
    this.dispatchLogout()
  }

}
</script>