import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { data } from "../../data";

const api = "https://api.spoonacular.com/recipes/complexSearch";
const key = import.meta.env.VITE_API_KEY;

const Cuisine = () => {
  const params = useParams();
  const [cuisine, setCuisine] = useState([]);
  useEffect(() => {
    getCuisine();
    // setCuisine(data);
  }, [params.type]);

  const getCuisine = async () => {
    const response = await fetch(`${api}?apiKey=${key}&cuisine=${params.type}`);
    const json = await response.json();
    setCuisine(json.results);
  };
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-8 mt-20">
      {cuisine.map((item) => (
        <Link key={item.id} to={'/recipe/' + item.id}>
          <div>
            <img
              className="w-full rounded-[2rem]"
              src={item.image}
              alt={item.title}
            />
            <h4 className="text-center p-8">{item.title}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cuisine;
