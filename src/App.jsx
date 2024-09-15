import { useState } from "react";
import Wrapper from "./components/Wrapper";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter, Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <div className="mt-10 flex items-center">
        <Link to={"/"}>
          <GiKnifeFork className="h-10 w-10 fill-zinc-600"/>
        </Link>
        <Link to={"/"}>delicious!</Link>
        </div>
        <Search />
        <Category />
        <Pages />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
