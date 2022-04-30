import { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase-config';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

function App() {

  //Get data from DB to App (Read data)
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, "users")

  //Send Data from App to DB (Create data)
  const [newName, setNewName] = useState("")
  const [newAge, setnewAge] = useState(0)

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) })
  }

  //Update data
  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id)
    const newFields = { age: age + 1 }
    await updateDoc(userDoc, newFields)
  }

  //Delete user
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id)
    await deleteDoc(userDoc)
  }

  //Read data
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getUsers()
  }, [])


  return (
    <div className="App">

      <input
        placeholder='Name...'
        onChange={(event) => {
          setNewName(event.target.value)
        }}
      />
      <input
        placeholder='Age...'
        type="number"
        onChange={(event) => {
          setnewAge(event.target.value)
        }}
      />
      <button onClick={createUser}>Create User</button>

      {users.map((user) => {
        return (
          <div>
            {" "}
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <button
              onClick={() => {
                updateUser(user.id, user.age)
              }}>
              Increase Age +1
            </button>
            <button
              onClick={() => {
                deleteUser(user.id)
              }}>Delete User
            </button>
          </div>
        )
      })}
    </div>
  );
}

export default App;