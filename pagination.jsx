//a webpage gets data from ext source implement pagination
import { useState, useEffect } from "react";

export default function Pagination() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const totalPages = 5; // assume from API

  const getdata=async()=>{
    try{
        const data = await fetch("url");
        const result =await data.json();
        console.log(result);
        setData(result.data);
        setLoading(false);
    }
    catch(err){
        console.error("couldnt fetch",err);
    }
  }
  useEffect(()=>{
    getdata();
  },[page])

  return(
    <div>
        <ul>
            {data.map(item=>
                <li key= {item.id}>{item.desc}</li>
            )}
        </ul>

        <button 
        disabled={page===1}
        onCick= {setPage(prev=>prev-1)}>Previous
        </button>

        <button 
        disabled={page===totalpages}
        onCick= {setPage(prev=>prev+1)}>Next
        </button>
    </div>
  )

}
