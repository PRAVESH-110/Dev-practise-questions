//this code cuses infinite loop, fix it
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [count]);

  return <div>{count}</div>;
}

//solution
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return <div>{count}</div>;
}


//whatll be output of this

console.log([] + [])
console.log([] + {})


// o/p:
// [] + []
// + tries to convert operands to primitive values.
// Arrays convert using .toString().
// [].toString() → ""
// So it becomes:
// "" + ""
Result:
""

//[].toString() → ""
//{}.toString() → "[object Object]"
result:
"[object Object]"