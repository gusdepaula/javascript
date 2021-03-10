import axios from "axios";

async function getResults(query) {
  /* try {
    const key = "57b204b5-b9a2-40db-964c-ff5f543d42dc";
    const res = await axios(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}&key=${key}`
    );
    console.log(res);
    // const recipes = await res.data.data.recipes;
  } catch (error) {
    console.log(error);
  } */
  try {
    const res = await axios(`data.json?search=${query}`);
    console.log(res);
    const recipes = await res.data.data.recipes;
    console.log(recipes);
  } catch (error) {
    console.log(error);
  }
}
getResults("pizza");
