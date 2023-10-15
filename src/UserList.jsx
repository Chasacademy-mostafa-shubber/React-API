import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";


const UserDiv = styled.div`

width: auto;
border: 2px solid black;
margin: 12px;
padding: 10px;
`;



const UserList = () => {

  const [data, setData] = useState([]);

  //Get data fro  all users
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://localhost:7003/api/Person/All-Person`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

 
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
     
     
     <h2>All users</h2>

      {data.map((post) => (
        
       <Link to={`/users/${post.personID}`}> 
      
        <UserDiv>
          <h4>{post.name}</h4>
          </UserDiv>
          </Link>
        ))}
    </>
  );
};

export default UserList;