import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";



const DetailsText = styled.h3`

width: auto;
border: 1px solid black;
padding: 12px;


`

const UserMovieDetails = () => {
    

  const [data, setData] = useState([]);
  const [genre, setGenre] = useState([]);

  let {id} = useParams();


  //Get data from movie and rating by id from user
  const fetchMovie = async () => {
    try {
      const response = await axios.get(`https://localhost:7003/api/Movie/Rating/Person/${id}`);
    
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  ///Get data from genre by id from user
  const fetchGenre = async () => {
    try {
      const response = await axios.get(`https://localhost:7003/api/PersonGenre/Person/Genre/${id}`);
    
      setGenre(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


 

  // Call fetchData 
  useEffect(() => {
    fetchMovie();
     fetchGenre();
 
  }, []);

 

  return (
    <div>
      <h2>Movie</h2>
      
      
        {data.map((post) => (
          //List of movies
            <DetailsText>
          Name: {post.name} | 
          Rating: {post.rating}
       
          </DetailsText>
        ))}

         <h2>Genre</h2> 

         {genre.map((post) => (
          //List of genres
            <DetailsText>
          Title: {post.titel} | 
          Description: {post.description}
       
          </DetailsText>
        ))}

      
    </div>
  );
};

export default UserMovieDetails;