import { useEffect, useState } from "react"

export const Search = () => {
    const [data,setData] = useState([]);
    let arrA = [];

    useEffect(()=> {
        getData();
    },[])

    const getData = () => {
        fetch("https://fast-reef-22226.herokuapp.com/data").then((d)=> d.json())
        .then((res)=> {
            // console.log(res);
            setData(res);
        })
    }

    const postData = () => {
        fetch("http://loclahost:3000/data", {
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": 'application/json'
            }
        })
    }

    return <div id="navbar">
    <input className="Navbar" type="text" />
    <button className="search" onClick={() => {
        getData();
        postData();
    }}>Search</button>
    <br />
    <div className="Button">
        <button onClick={()=>{
            arrA.sort();
            setData(arrA);
            console.log(arrA);
        }}>Sort A-Z</button>
        <button>Sort Z-A</button>
        <button>Sort by Date(Asc)</button>
        <button>Sort by Date(Dsc)</button>
        <button>Sort by quality(Asc)</button>
        <button>Sort by quality(Dsc)</button>
        <button>Filter explicit</button>
    </div>
    <hr />
    {data.map((e) => {
        return <div key={e.id} id="search-result">
            <a href={e.url}>{e.title }| <b className="author">{e.author}</b></a>
            <p>{e.description}</p>
            <h4>Creation Date:{e.creation_date}</h4>
            <h4>Explicit: {e.explicit? "Yes" : "No"} Quality %: {e.quality}</h4>
        </div>
        
    })}
    {data.forEach((e) => {
        arrA.push(e.title)
    })}
</div>
}