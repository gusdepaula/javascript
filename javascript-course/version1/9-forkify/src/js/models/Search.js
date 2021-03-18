import { elements } from "../views/base";
import { config } from "../views/config";

export default class Search {
  constructor(query) {
    this.query = query;
  }
  async getResults() {
    return new Promise((resolve, reject) => {
      const query = this.query;
      // Initialize Firebase
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
            const queryLowerCase = query.toLowerCase();

            const filter = arrTitle.find((ing) => ing.includes(queryLowerCase));
            return filter;
          });
          console.log(filteredQuery);
          if (filteredQuery.length === 0) {
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

          return resolve(filteredQuery);
        });
    });
  }
}
