import { useEffect, useState } from 'react';
import './App.css';
function App() {
  return (
    <div className="App">
      <FetchUsers></FetchUsers>
    </div>
  );
}

function FetchUsers () {
  const [users, setUsers] = useState([]);
  useEffect(() => {
     const fetchMyAPI = async() => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json();
      setUsers(data)
    }
    fetchMyAPI();
  }, [])
  return (
    <div>
    {
      users.map(user => <Users name={user.name} email={user.email} address={user.address}></Users>)
    }
    </div>
  )
}

function Users (props){
  const {name,email} = props;
  const {zipcode, city, street} = props.address;
  return (
    <div className='users-container'>
      <h1>{name}</h1>
      <p>{email}</p>
      <div>
        <CityCom city={city} zipcode={zipcode} street={street}></CityCom>
      </div>
    </div>
  )
}

function CityCom (props) {
  const {city, street, zipcode} = props;
  return (
    <div>
      <p>{street}, {zipcode}, {city}.</p>
    </div>
  )
}

export default App;
