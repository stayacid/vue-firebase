import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";
import { Module } from "vuex";
import { IRootState } from "../index";
import { IAuthState } from "./types";

const state: IAuthState = {
  email: "",
  password: ""
};

export const Auth: Module<IAuthState, IRootState> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};


/*import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations, firebaseAction } from "vuexfire";
import { db } from "../db";
import firebase from 'firebase'
import router from '../router/index'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    comics: [],
  },
  mutations: {
    ...vuexfireMutations,
  },
  actions: {
    login: firebaseAction(({ bindFirebaseRef }, dataset ) => {
      firebase.auth().signInWithEmailAndPassword(dataset.email, dataset.password).then(() => {
          router.replace('/comics')
        }).catch((err: any) => {
          alert(err.message)
          })
      }),

    logout: firebaseAction(() => {
      firebase.auth().signOut().then(() => {
        router.replace('login')
      })
    }),

    signUp: firebaseAction((context, dataset) => {
      firebase.auth().createUserWithEmailAndPassword(dataset.email, dataset.password).then(() => {
        router.replace('/login')
      }).catch((err) => {
        alert(err.message)
      });
    }),

    bindComics: firebaseAction(
      ({ bindFirebaseRef }) => {
      // return the promise returned by `bindFirebaseRef`
      return bindFirebaseRef("comics", db.ref("comics"));
    }),

    addComic: firebaseAction(
      ({bindFirebaseRef}, dataset) => {
      const createdAt = new Date()
      db.ref('comics').push({ name: dataset.name, image: dataset.image, createdAt })
      // Clear values
    }),

    deleteComic: firebaseAction((context, id: string) =>{
      db.ref('comics').child(id).remove()
    })

  },

  modules: {

  },
});*/
