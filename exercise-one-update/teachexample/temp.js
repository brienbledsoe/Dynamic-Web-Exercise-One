import React from 'react';

const article = {
    "image":{
      "url":"https://via.placeholder.com/2000x1200", //this is a key value pair
      "alt": "A placeholder image"
    }
}

// const coolString =`Words ${article.image.url}`

export default function inlineStyle(){
  return(
    <div style={
      {
        // backgroundImage: "https://via.placeholder.com/2000x1200" //this is a key value pair. We are putting an object inside of here
        backgroundImage: `url("${article.image.url}")`
        margin: "10px",
        paddintTop:"10px" //in javascript we have to use camel case

      }
    }>
      {text}
    </div>
  );
}
