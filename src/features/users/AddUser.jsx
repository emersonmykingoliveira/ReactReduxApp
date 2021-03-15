import { useDispatch, useSelector } from "react-redux";
//package to handle our different pages as a development dependency
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { userAdded } from "./usersSlice";

export function AddUser() {
  const dispatch = useDispatch();//returns a reference to the dispatch function from the Redux store
  const history = useHistory();//gives the access to the history instance
  
  //add React state to function components
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  
  //extracting data from the Redux store state
  const usersAmount = useSelector((state) => state.users.entities.length);

  //Button Action
  const handleClick = () => {
    if (name && email) {
      dispatch(
        userAdded({
          id: usersAmount + 1,
          name,
          email,
        })
      );

      setError(null);
      history.push("/");
    
      //Exception error
    } else {
      setError("Please, fill in all the required fields");
    }

    setName("");
    setEmail("");
  };
  
  //layout definition
  return (
    <div className="container">

      <div className="row">
        <h1>Add user</h1>
      </div>

      <div className="d-flex justify-content-end">
        <Link to={`/`}>
              <button>HOME</button>
        </Link>
      </div>

      <div className="row">
        <div className="three columns">
          <label htmlFor="nameInput">Name:</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="test@mailbox.com"
            id="nameInput"
            onChange={handleName}
            value={name}
          /><br/><br/>
          <label htmlFor="emailInput">Email:</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="test@mailbox.com"
            id="emailInput"
            onChange={handleEmail}
            value={email}
          /><br/><br/>
          {error && error}
          <button onClick={handleClick} className="button-primary">
            Add user
          </button>
        </div>
      </div>
    </div>
  );
}