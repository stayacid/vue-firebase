import { ActionTree } from "vuex";
import { IRootState } from "../index";
import { IComicsState } from "./types";
import { firebaseAction } from "vuexfire";
import { db } from "../../db";

export const actions: ActionTree<IComicsState, IRootState> = {
  bindComics: firebaseAction(({ bindFirebaseRef }) => {
    // return the promise returned by `bindFirebaseRef`
    return bindFirebaseRef("comics", db.ref("comics"));
  }),

  addComic: firebaseAction((context, data: { name: string; image: string }) => {
    const createdAt = new Date();
    db.ref("comics").push({ name: data.name, image: data.image, createdAt });
    // Clear values
  }),

  deleteComic: firebaseAction((context, id: string) => {
    db.ref("comics")
      .child(id)
      .remove();
  }),
};
