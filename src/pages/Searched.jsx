import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../../data";

const api = "https://api.spoonacular.com/recipes/complexSearch";
const key = import.meta.env.VITE_API_KEY;

const Searched = () => {
  const [search, setSearch] = useState([]);
  const params = useParams();
  useEffect(() => {
    getSearch();
  }, [params.search]);

  const getSearch = async () => {
    const response = await fetch(`${api}?apiKey=${key}&query=${params.type}`);
    const json = await response.json();
    setSearch(json.results);
  };
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-8">
      {search.map((item) => (
        <div key={item.id}>
          <img
            className="w-full rounded-[2rem]"
            src={item.image}
            alt={item.title}
          />
          <h4 className="text-center p-8">{item.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default Searched;
