import React,{useState, useEffect} from "React";

const[error, setError]= useState();
const [search, setSearch]= useState("");
const [loading, setLoading] =useState (false);
const [debounceText, setDebounceText] =useState(text, 300);

const handleSearch=()=>{
    e.preventdefault();
    setSearch(debounce);
    setLoading(true);
}

const getData= async()=>{
    try{
        const response= await fecth("");
        if(!response.ok){
            setError("HTTP error status");
        }
        const data =await response.json();
    }
    catch(err){
        console.err("Error fetching data");
    }
}

useEffect (()=>{
    getData();
},[debouncedText])

export default function DebouncedSearch(){
    retur(
        <div>
            <input
            type="text"
            placeholder="Search students list"
            value={(e)=>{handleSearch}}
            >
            </input>
        </div>
    )
}
