import axios from "axios";
import { elements } from "../views/base";

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
        return filter;
      });
      if (this.filteredQuery.length === 0) {
        const markup = `
          <li>
            <a class="results__link" href="#">
                <div class="results__data">
                  <h4 class="results__empty">Não existe nenhuma receita para o termo <u>${this.query}</u>! 🤔</h4>
              </div>
            </a>
          </li>`;
        elements.searchResList.insertAdjacentHTML("beforeend", markup);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
