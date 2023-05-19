import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/showwcaseAPI/users/check', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({"query":username})
    })
      .then(res => res.json())
      .then(res => console.log(res.token))
      .catch(err => console.log(err));
  };

  return (
    <div className="App">

      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username/Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      <h1>Add Service</h1>
      <form style={{display: 'flex', flexDirection:'column'}}>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Description" />
        <input type="text" placeholder="Price" />
        <button type="submit" value="submit">Add Service</button>
      </form>

      <h1>Available Services</h1>
      <form>
        <p>Name: </p>
        <p>Description: </p>
        <p>Price</p>
        <button type="submit">Inquire</button>
      </form>


    </div>
  );
}

export default App;
