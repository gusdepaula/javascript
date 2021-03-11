import axios from "axios";

export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    try {
      const res = await axios(`data.json?id=${this.id}`);

      this.filteredId = res.data.data.recipes.filter(
        (item) => item.id === this.id
      );

      this.title = this.filteredId[0].title;
      this.author = this.filteredId[0].publisher;
      this.img = this.filteredId[0].image_url;
      this.ingredients = this.filteredId[0].ingredients;
      this.cooking = this.filteredId[0].how_to_cook;

      console.log(this.filteredId);
    } catch (error) {
      console.log(error);
    }
  }

  calcTime() {
    const numIng = this.ingredients.length;
    const periods = Math.ceil(numIng / 3);
    this.time = periods * 15;
  }

  calcServings() {
    this.servings = 2;
  }
}
