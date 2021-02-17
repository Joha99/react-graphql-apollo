import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

function GetUsers() {
  const { loading, error, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);

  // component re-rendered whenever there are changes to users
  useEffect(() => {
    if (data) {
      console.log(data);
      const usersArray = data.getAllUsers;
      setUsers(usersArray.slice(usersArray.length - 5));
    }
  }, [data]);

  if (loading) return "Loading...";
  if (error) return `Error: ${error.message}`;

  return (
    <div>
      <h1>Last 5 Users</h1>
      {users.map((user, index) => {
        return (
          <div key={index} style={{marginBottom: "3rem"}}>
            <p>
              {user.firstName} {user.lastName}
            </p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default GetUsers;
