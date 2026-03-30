//craete a counter
import react,{useState} from "react";
function count(){

    const[count,setCount]=useState(1)

    const addCount=()=>{
        //using count directly is risky as it reads stale values
        // setCount(count+1);
        setCount(prev=>prev+1);
    }
    const subtCount=()=>{
        setCount(prev=>prev-1);
    }

    useEffect(()=>{
        addCount
    },[])
    useEffect(()=>{
        subtCount
    },[])
    return(
        <div>
        <button onClick={addCount}>Add</button>
        <button onClick={subtCount}>Subt</button>
        </div>
    )

}
export default count;

