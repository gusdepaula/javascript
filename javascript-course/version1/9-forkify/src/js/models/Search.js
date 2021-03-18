import axios from "axios";
import { elements } from "../views/base";

export default class Search {
  constructor(query) {
    this.query = query;
  }
  async getResults() {
    try {
      const res = await axios(`data.json?search=${this.query}`);

      const query2 = this.query;
      // Initialize Firebase
      const config = {
        apiKey: "AIzaSyDmCKgFv0fLtj6-pNlxczZe_wCMYxY1dYQ",
        authDomain: "doacoes-cdff8.firebaseio.com",
        databaseURL: "https://doacoes-cdff8.firebaseio.com",
        projectId: "doacoes-cdff8",
      };
      firebase.initializeApp(config);

      let filteredQuery;

      //Create a node at firebase location to add locations as child keys
      firebase
        .database()
        .ref("data")
        .on("value", (snapshot) => {
          const data = snapshot.val().recipes;
          filteredQuery = data.filter((item) => {
            const arrTitle = [item.title.toLowerCase().split(" ")];
            const queryLowerCase = query2.toLowerCase();

            const filter = arrTitle.find((ing) => ing.includes(queryLowerCase));
            return filter;
          });
          console.log(filteredQuery);
          return filteredQuery;
        });

      this.result = res.data.data.recipes;

      this.recipes = filteredQuery;

      console.log(teste);

      // this.filteredQuery = ;

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
