import React, { useState, useEffect } from "react";
import { data } from "../../data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

const api = "https://api.spoonacular.com/recipes/random";
const key = import.meta.env.VITE_API_KEY;

const Veggie = () => {
  useEffect(() => {
    getVeggie();
  }, []);
  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    const response = await fetch(
      `${api}?apiKey=${key}&number=9&tags=vegetarian`
    );
    const json = await response.json();
    setVeggie(json.recipes);
  };

  return (
    <div className="my-16">
      <h3 className="text-2xl my-8">Our Vegetarian Picks</h3>
      <Splide
        options={{
          perPage: 3,
          breakpoints: {
            640: {
              perPage: 1,
            },
            768: {
              perPage: 2,
            },
          },
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "2rem",
        }}
      >
        {veggie.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Link to={"/recipe/" + recipe.id}>
              <div className="min-h-[25rem] rounded-[2rem] overflow-hidden relative bg-red-400">
                <img
                  className="absolute inset-x-0 inset-y-0 w-full h-full object-cover"
                  src={recipe.image}
                  alt={recipe.title}
                />
                <div className="gradient absolute w-full h-full bg-black/30"></div>
                <p className="absolute left-1/2 bottom-0 text-white w-full -translate-x-1/2 text-center font-semibold h-[40%] flex justify-center items-center text-base">
                  {recipe.title}
                </p>
              </div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Veggie;
