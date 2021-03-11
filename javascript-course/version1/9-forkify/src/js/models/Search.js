import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }
  async getResults() {
    try {
      const res = await axios(`data.json?search=${this.query}`);
      this.result = res.data.data.recipes;

      this.filteredQuery = this.result.filter((item) =>
        item.ingredients.find((ingredient) => {
          const ingDescLowerCase = ingredient.description.toLowerCase();
          const queryLowerCase = this.query.toLowerCase();
          if (ingDescLowerCase === queryLowerCase) {
            return true;
          } else {
            return false;
          }
        })
      );

      //   console.log(this.result);

      //   console.log(this.filteredQuery);
    } catch (error) {
      console.log(error);
    }
  }
}
