//Build a User List Fetcher that:
// Create a React component that:
// Has a button "Load Users"
// On click, fetches users from an API
// Shows loading while fetching
// Displays user list
// Handles API errors

import React, {useState} from React;

function App(){


    const[loading,setLoading]= useState(false);
    const [userdata, setUserdata]= useState([])
    const [error,setError]=useState();
    const totalPage=4;

    const fetchUserlist= async()=>{
        try{
            setLoading(true)
            const data= await fetch("",{
                method:POST,
                headers:"content-type/application",
                body: JSON.stringify(data),

            })

            const response =await data.json();
            setUserdata(response);
            setLoading(false);
        }
        catch(err){
            setError(true);
            console.error("failed to fetch error")
    }

    useEffect(()=>{
        fetchUserList();
    },[page]);

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