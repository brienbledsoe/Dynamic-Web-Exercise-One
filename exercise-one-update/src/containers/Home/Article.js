import React, {useEffect,useState} from 'react';
import articleData from '../../components/SiteData/articleData';
import TextBlock from "../../components/TextBlock";


function Article(props){ //props is the object that the parent component is passing in

  console.log('props',props);
  const routeId = props.match.params.id; //use console to see what we are accessgin, we are looking for an identifyer
  //inside that url. We are querying data based on our id
  const [article,setArticle] = useState({})
  useEffect(() =>{
    for(let i =0; i < articleData.length; i++){
      console.log('This is the articleData', articleData[i]); //looping through the array and looking for the value that i represents
      if(articleData[i]===routeId){
        setArticle(articleData[i]);
      }else{
        console.log("nope");
      }
    }
  },[]);
console.log('This is the current article',article)

  return(
    <div className="article">
      <h1>{article.title}</h1>
      <h2>{article.blurb}</h2>
      <p>I'm testing whats being produced!</p>
      <div className ="article_text">
          {article.articleText && article.articleText.map((text,i) => (
                <TextBlock key={i} type={text.type} data={text.data}/>
          ))}

      </div>
      Hello World!
    </div>
  );
}

export default Article;
