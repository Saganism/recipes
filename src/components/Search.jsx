import React, {useState, useEffect} from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate('/searchResults/' + input);
        setInput('');
    }
  return (
    <form className="lg:mx-40 md:mx-24 mt-8 relative" onSubmit={handleSubmit}>
        <FaSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-white" />
        <input
          className="w-full text-white bg-zinc-600 border-none font-2xl py-2 px-12 rounded-2xl outline-none"
          type="text"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
        />
    </form>
  );
};

export default Search;
