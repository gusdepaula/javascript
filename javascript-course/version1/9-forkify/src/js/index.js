import Search from "./models/Search";
import Recipe from "./models/Recipe";
import * as searchView from "./views/searchView";
import * as recipeView from "./views/recipeView";
import { elements, renderLoader, clearLoader } from "./views/base";

/** Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

/**
 * SEARCH CONTROLLER
 */
const controlSearch = async () => {
  // 1) Get query from view
  const query = searchView.getInput();
  // TESTING
  //   const query = `beringela`;

  if (query) {
    // 2) New search object and add to state
    state.search = new Search(query);

    // 3) Prepare UI for results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchResList);

    try {
      // 4) Search for recipes
      await state.search.getResults();

      // 5) Render results on UI
      clearLoader();
      searchView.renderResults(state.search.filteredQuery);
    } catch (err) {
      console.log(`Something wrong with the search...😟`);
      clearLoader();
    }
  }
};

elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});

// TESTING
// window.addEventListener("load", (e) => {
//   e.preventDefault();
//   controlSearch();
// });

elements.searchResPages.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-inline");
  if (btn) {
    const goToPage = Number(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.filteredQuery, goToPage);
  }
});

/**
 * RECIPE CONTROLLER
 */
const controlRecipe = async () => {
  // Get ID from url
  const id = window.location.hash.replace("#", "");
  console.log(id);

  if (id) {
    // Prepate UI for changes
    recipeView.clearRecipe();
    renderLoader(elements.recipe);

    // Create new recipe object
    state.recipe = new Recipe(id);

    //TESTING
    // window.r = state.recipe;

    try {
      // Get recipe data
      await state.recipe.getRecipe();
      state.recipe.parseIngredients();

      // Calcultate servings and time
      state.recipe.calcTime();
      state.recipe.calcServings();

      // Render recipe
      console.log(state.recipe);
      clearLoader();
      recipeView.renderRecipe(state.recipe);
    } catch (err) {
      console.log(`Error processing recipe...😟`);
    }
  }
};

["hashchange", "load"].forEach((event) =>
  window.addEventListener(event, controlRecipe)
);
