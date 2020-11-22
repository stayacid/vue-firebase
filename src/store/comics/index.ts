import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";
import { Module } from "vuex";
import { IRootState } from "../index";
import { IComicsState } from "./types";

const state: IComicsState = {
  comics: []
};

export const Comicses: Module<IComicsState, IRootState> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};