// src/MyApp.jsx
import React, {useState, useEffect} from 'react';
import Table from "./Table";
import Form from "./Form";

function MyApp() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchUsers()
	  .then((res) => res.json())
	  .then((json) => setCharacters(json["users_list"]))
	  .catch((error) => { console.log(error); });
  }, [] );

  return (
    <div className="container">
      <Table
        characterData={characters}
        removeCharacter={removeOneCharacter}
      />
      <Form handleSubmit={updateList} />
    </div>
  );

  function updateList(person) { 
    postUser(person)
      .then(() => setCharacters([...characters, person]))
      .catch((error) => {
        console.log(error);
      })
}

function removeOneCharacter(index) {
  const userToRemove = characters[index];
  const promise = fetch(`http://localhost:8000/users/${userToRemove.id}`, {
    method: "DELETE",
    headers: {
      "content-type":"applications/json",
    },
  });
    promise.then((res) => {
      if (res.status === 204) {
        const updated = characters.filter((character, i) => i !== index);
        setCharacters(updated);
      }
      else{
        console.log("Could not find user ID");
      }
    })
    return promise;
  }

function fetchUsers() {
  const promise = fetch("http://localhost:8000/users");
  return promise;
}

function postUser(person) {
  const promise = fetch("Http://localhost:8000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(person),
  })
  .then((res) => {
    if(res.status == 201){
      return res.json();
    } 
    else {
      console.log("No user created, 201 not received");
    }

  })
  .then((person) => {
    updateList(person)
  });
  return promise;
}

}
export default MyApp;

