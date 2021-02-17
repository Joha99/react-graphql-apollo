import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

function GetUsers() {
  const { loading, error, data } = useQuery(LOAD_USERS);

  // component re-rendered whenever there are changes to users
  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) return "Loading...";
  if (error) return `Error: ${error.message}`;

  return (
    <div>
    </div>
  );
}

export default GetUsers;
