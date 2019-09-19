/* "id": "article-one",
"title": "Article One: First Fake Article",
"blurb": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
"articleText":
image
App-header is the flex-box

*/
import React from 'react';


function ArticleCard({articleContent}){
  console.log('ArticleCard', articleContent);
  return(
    <div className="App-header">
    <div className="box1"><img src={articleContent.image.url} alt={articleContent.image.alt}/></div>
    <div className="box2">
      <p>
      <p>{articleContent.title}</p>
      <p>{articleContent.publishedDate}</p>
      <p>{articleContent.blurb}</p>
      <a href={`/article/${articleContent.id}`}><span style={{color : 'blue'}}>Read More</span></a>
      </p>
    </div>

    </div>
  )



}

export default ArticleCard;
