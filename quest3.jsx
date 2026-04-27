
//create a form from the frontend and implement basic validation (not zod) and control components
//with loaded error states
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
    setEmail(value);
    setPassword(value);

    // validation
    if (value.length < 3) {
      setError("Name must be at least 3 characters");
    } else {
      setError("");
    }

    email.find("@");
    if(email){
        setError("invalid email");
    }
    if(password.length<8){
        setError("invalid pass");
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        value={name}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={handleChange}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={()=>{

      }}>
        
      </button>
    </form>
  );
}

export default App;
