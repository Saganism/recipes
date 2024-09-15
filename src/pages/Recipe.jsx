import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data";

const api = "https://api.spoonacular.com/recipes";
const key = import.meta.env.VITE_API_KEY;

const Recipe = () => {
  const [recipe, setRecipe] = useState(data[0]);
  const [tabToggle, setTabToggle] = useState("instructions");
  const params = useParams();
  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  const fetchDetails = async () => {
    const response = await fetch(
      `${api}/${params.id}/information?apiKey=${key}`
    );
    const json = await response.json();
    setRecipe(json);
  };
  return (
    <div className="mt-40 mb-20 flex gap-10 items-start">
      <div className="basis-5/12">
        <h2 className="mb-8 text-xl font-bold">{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div className="basis-7/12">
        <button
          onClick={() => setTabToggle("instructions")}
          className={`py-4 px-8 ${
            tabToggle === "instructions"
              ? "text-white bg-black"
              : "text-black bg-white"
          } border-2 mr-8`}
        >
          Instructions
        </button>
        <button
          onClick={() => setTabToggle("ingredients")}
          className={`py-4 px-8 ${
            tabToggle === "ingredients"
              ? "text-white bg-black"
              : "text-black bg-white"
          } border-2 mr-8`}
        >
          Ingredients
        </button>
        {tabToggle === 'instructions' && <div className="mt-10">
          <h3
            className="mb-4"
            dangerouslySetInnerHTML={{ __html: recipe.summary }}
          ></h3>
          <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }}></h3>
        </div>}
        {tabToggle === "ingredients" && (
        <ul className="mt-10">
          {recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
};

export default Recipe;
