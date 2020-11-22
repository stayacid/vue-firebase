import { ActionTree } from "vuex";
import { IRootState } from "../index";
import { IAuthState } from "./types";
import { firebaseAction } from "vuexfire";
import firebase from 'firebase'
import router from '../../router/index'

export const actions: ActionTree<IAuthState, IRootState> = {
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
}