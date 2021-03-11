import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }
  async getResults() {
    try {
      const res = await axios(`data.json?search=${this.query}`);
      this.result = res.data.data.recipes;

      this.filteredQuery = this.result.filter((item) => {
        const arrTitle = [item.title.toLowerCase().split(" ")];
        const queryLowerCase = this.query.toLowerCase();

        const filter = arrTitle.find((ing) => ing.includes(queryLowerCase));
        // console.log(filter);
        return filter;
      });
    } catch (error) {
      console.log(error);
    }
  }
}
