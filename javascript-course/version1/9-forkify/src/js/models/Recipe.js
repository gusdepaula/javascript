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

          console.log(filteredId);

          const title = filteredId[0].title;
          const author = filteredId[0].publisher;
          const img = filteredId[0].image_url;
          const ingredients = filteredId[0].ingredients;
          const cooking = filteredId[0].directions;

          console.log(filteredId[0]);

          return resolve(filteredId);
        });
    });
    /* try {
      const res = await axios(`data.json?id=${this.id}`);

      this.filteredId = res.data.data.recipes.filter(
        (item) => item.id === this.id
      );

      this.title = this.filteredId[0].title;
      this.author = this.filteredId[0].publisher;
      this.img = this.filteredId[0].image_url;
      this.ingredients = this.filteredId[0].ingredients;
      this.cooking = this.filteredId[0].directions;

      //   console.log(this.filteredId);
    } catch (error) {
      console.log(error);
    } */
  }

  calcTime() {
    // Assuming that we need 15 min for each 3 ingredients
    const numIng = filteredId.ingredients.length;
    const periods = Math.ceil(numIng / 3);
    filteredId.time = periods * 15;
  }

  calcServings() {
    filteredId.servings = 2;
  }

  parseIngredients() {
    const unitsLong = [
      "",
      "xícaras",
      "xícara",
      "colher",
      "colheres",
      "tablespoons",
      "tablespoon",
      "ounces",
      "ounce",
      "teaspoons",
      "teaspoon",
      "cups",
      "pounds",
    ];
    const unitsShort = [
      "",
      "xícaras",
      "xícara",
      "colher",
      "colheres",
      "tbsp",
      "tbsp",
      "oz",
      "oz",
      "tsp",
      "tsp",
      "cup",
      "pound",
    ];
    const units = [...unitsShort, "kg", "g"];

    const newIngredients = filteredId.ingredients.map((el) => {
      // 1) Uniform units
      let ingredient = el.toLowerCase();
      unitsLong.forEach((unit, i) => {
        ingredient = ingredient.replace(unit, unitsShort[i]);
      });

      // 2) Remove Parentheses
      //   ingredient = ingredient.replace(/ *\([^)]*\) */g, " ");

      // 3) Parse ingredients into count, unit and ingredients
      const arrIng = ingredient.split(" ");
      const unitIndex = arrIng.findIndex((el2) => units.includes(el2));

      let objIng;
      if (unitIndex > -1) {
        // There is a unit
        // Ex. 4 1/2 cups, arrCount is [4, 1/2] --> eval("4+1/2") --> 4.5
        // Ex. 4 cups, arrCount is [4]
        const arrCount = arrIng.slice(0, unitIndex);

        let count;
        if (arrCount.length === 1) {
          count = eval(arrIng[0].replace("-", "+"));
        } else {
          count = eval(arrIng.slice(0, unitIndex).join("+"));
        }

        objIng = {
          count,
          unit: arrIng[unitIndex],
          ingredient: arrIng.slice(unitIndex + 1).join(" "),
        };
      } else if (parseInt(arrIng[0], 10)) {
        // There is NO unit, but 1st element is number
        objIng = {
          count: parseInt(arrIng[0], 10),
          unit: "",
          ingredient: arrIng.slice(1).join(" "),
        };
      } else if (unitIndex === -1) {
        // There is NO unit and NO number in 1st position
        objIng = {
          count: 1,
          unit: "",
          ingredient,
        };
      }

      return objIng;
    });
    filteredId.ingredients = newIngredients;
  }
  updateServings(type) {
    // Servings
    const newServings =
      type === "dec" ? filteredId.servings - 1 : thfilteredIdis.servings + 1;

    // Ingredients
    this.ingredients.forEach((ing) => {
      ing.count *= newServings / filteredId.servings;
    });

    filteredId.servings = newServings;
  }
}
