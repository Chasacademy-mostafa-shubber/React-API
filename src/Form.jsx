import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";




const FormInput = styled.input`

width: 250px;
height:20px;
padding:8px;
margin: 10px;
`;


const FormButton = styled.button`

background: green;
width:250px;
color: white;
padding:8px;
font-size: 25px;
margin-top: 15px;
`;

const Form = () => {
    
    const [formData, setFormData] = useState({
      link: "",
      rating: "",
      movieID: "",
      personID: "",
      genreID: ""
    });
  
    
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
   
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("https://localhost:7003/api/LinkPersonMovieGenre/Add/link-movie-person-genre", formData);
        console.log("Post created:", response.data);
      } catch (error) {
        console.error("Error creating post:", error);
      }
    };
  
    return (

<>
      <h2>Add post</h2>
       
      <form onSubmit={handleSubmit}>
        
      <FormInput type="text" name="link" placeholder="Select link" value={formData.link} onChange={handleChange} /><br/>
      <FormInput type="number" name="rating" placeholder="Select rating" value={formData.rating} onChange={handleChange} /><br/>
      <FormInput type="number" name="movieID" placeholder="Select id for movie" value={formData.movieID} onChange={handleChange} /><br/>
      <FormInput type="number" name="personID" placeholder="Select id for user" value={formData.personID} onChange={handleChange} /><br/>
      <FormInput type="number" name="genreID" placeholder="Select id for genre" value={formData.genreID} onChange={handleChange} /><br/>

      <FormButton type="submit">Add</FormButton>
      </form>
      

     </> 
    );
  };
  
  export default Form;