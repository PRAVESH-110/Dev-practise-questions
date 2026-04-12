//fetch data from an API
import React, {useState, useEffect} from "react";

function App(){

    const[loading, setLoading]= useState(true)
    
    const fetchData=async()=>{
        try{
                const data= await fetch ("url");
                const result= await data.json();
                console.log(result);
                setLoading(false);
        }
        catch(err){
                console.log("error feching data", err);
            }
        }
        useEffect(()=>{
        fetchData();
        },[]);
    
    return(
        <div>
      <button onClick={fetchData} disabled={loading}>
        Fetch
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
    )
};
export default App