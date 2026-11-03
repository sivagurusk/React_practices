import { useState, useEffect } from "react";

function Task() {
  useEffect(()=>{
          document.title="Task";
  },[])

  // 1. Show / Hide Text
  const [show, setShow] = useState(true);

  // 2. Change Page Title
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = name;
  }, [name]);

  // 3. Counter and Name
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  useEffect(() => {
    console.log("Name changed:", userName);
  }, [userName]);

  return (
    <div>

      {/* Show / Hide Text */}
      <h2>1. Show / Hide Text</h2>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <p>Hello! This is a paragraph.</p>}


      <hr />

      {/* Change Page Title */}
      <h2>2. Change Page Title</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Hello {name}</p>


      <hr />

      {/* Counter and Name */}
      <h2>3. Counter and Name</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <p>Name: {userName}</p>

    </div>
  );
}

export default Task;