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
      setUsers(data.getAllUsers.slice(0, 4));
    }
  }, [data]);

  if (loading) return "Loading...";
  if (error) return `Error: ${error.message}`;

  return (
    <div>
      {users.map((user, index) => {
        return (
          <h1 key={index}>
            {user.firstName} {user.lastName}
          </h1>
        );
      })}
    </div>
  );
}

export default GetUsers;
