import { fetchUsers, userDeleted } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";//package to handle different pages as a development dependency

export function UserList() {
  //hook to return a reference to the dispatch Redux store function
  const dispatch = useDispatch();

  //extracting data from the Redux store state
  const { entities } = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);

  const handleDelete = (id) => {
    dispatch(userDeleted({ id }));
  };

  //layout definition
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <h1>React App - Assignments for job applicants(NTC)</h1>
      </div><hr/>

      <div className="d-flex justify-content-around">
          <button
            onClick={() => dispatch(fetchUsers())}
            className="button-primary"
          >
            LOAD USERS
          </button>
          <Link to="/add-user">
            <button className="button-primary">ADD NEW USER</button>
          </Link>
      </div><hr/>

      <div className="row">
        {loading ? (
          "Loading..."
        ) : (
          <table className="u-full-width">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {entities.length &&
                entities.map(({ id, name, email }, i) => (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>
                      <button onClick={() => handleDelete(id)}>Delete</button>
                      <Link to={`/edit-user/${id}`}>
                        <button>Edit</button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}