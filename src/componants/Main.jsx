import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "./Searchpage";

export const Main = () => {
    const [search,setSearch] = useState("");

    return <div className="App">
        <img className="imageLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="" />
        <br />
        <input onChange={(e) => setSearch(e.target.value)} className="search-box" type="text" placeholder="search here"/>
        <Link className="MainSearch" to="/Search">Search</Link>
    </div>

}