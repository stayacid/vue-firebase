import Vue from "vue";
// types
import Vuex, { StoreOptions } from "vuex";
import { IAuthState } from "./auth/types"
import { IComicsState } from "./comics/types"
// data
import { Auth } from "./auth"
import { Comicses } from "./comics"
Vue.use(Vuex);

export interface IRootState {
  Auth: IAuthState;
  Comicses: IComicsState;
}

const store: StoreOptions<IRootState> = {
  modules: {
    Auth,
    Comicses
  }
}

export default new Vuex.Store<IRootState>(store);
