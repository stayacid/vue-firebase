import { GetterTree } from "vuex";
import { IRootState } from "../index";
import { IComicsState } from "./types";


export const getters: GetterTree<IComicsState, IRootState> = {
  getComicses: (state) => {
    return state.comics;
  }
}