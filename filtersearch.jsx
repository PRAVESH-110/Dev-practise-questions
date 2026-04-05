//Build a search filter for a list (case-insensitive)- > meaning theres a list given and when user searches then the part fruit is returned
import { useState } from "react";

function SearchFilter() {
  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Pineapple"
  ];

  const[query, setquery]= useState("");

   const filteredItems = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return(
    <div>
        <input type="text" placeholder="Search..."
        onChange={(e)=>setquery(e.target.value)}></input>

        <ul>
            {filteredItems.map(itemlist=>(
              <li key={itemlist}>{itemlist}</li>
            ))}
        </ul>
    </div>
  )
}

export default SearchFilter;

