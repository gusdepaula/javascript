import axios from "axios";
import { config } from "../views/config";

export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    return new Promise((resolve, reject) => {
      const id = this.id;
      // Initialize Firebase
      firebase.initializeApp(config);

      //Create a node at firebase location to add locations as child keys
      firebase
        .database()
        .ref("data")
        .on("value", (snapshot) => {
          const data = snapshot.val().recipes;
          const filteredId = data.filter((item) => item.id === id);

          return resolve(filteredId[0]);
        });
    });
  }
}
