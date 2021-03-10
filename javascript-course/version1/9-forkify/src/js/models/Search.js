import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }
  async getResults(query) {
    try {
      const res = await axios(`data.json?search=${this.query}`);
      this.result = res.data.data.recipes;
      // console.log(this.result);
    } catch (error) {
      console.log(error);
    }
  }
}
