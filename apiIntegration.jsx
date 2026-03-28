// •	Call an API and show data
// •	Handle loading, success, error
// •	Retry or show fallback UI
// Edge cases
// •	API returns 500
// •	Network is slow
// •	API returns empty list


import React, {useState, useEffect} from React;

function App(){


    const[loading,setLoading]= useState(false);
    const [userdata, setUserdata]= useState([])
    const [error,setError]=useState();
    const[success, setSuccess]= useState(false);


    const fetchUserlist= async()=>{
        try{
            setLoading(true)
            const data= await fetch("api url")
            const response= await data.json();
            setUserdata(response);

            if(response.ok){
        setSuccess(true);
        setLoading(false);
    }
        }
        catch(err){
            setError(true);
            console.error("failed to fetch error")
        }


    return(
        <div>
            <button onClick={fetchUserlist}>
                Fetch data
            </button>

            <div>
                {loading ? (
                    <div><h1>Loading</h1></div> 
                ):
                <div>
                    {userdata.map(prev=>(
                        <li key={prev.id}>
                            {prev.userName}
                        </li>
                    ))}
                </div>}
            </div>

        </div>
    )
}
}
export default App;