/* "id": "article-one",
"title": "Article One: First Fake Article",
"blurb": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
"articleText":
image*/
import React from 'react';


function ArticleCard({articleContent}){
  console.log('ArticleCard', articleContent);
  return(
    <div>
      <p>{articleContent.title}</p>
      <img src={articleContent.image.url} alt={articleContent.image.alt}/>
      <p><a href={`/article/${articleContent.id}`}>Read More</a></p>
    </div>
  )


}

export default ArticleCard;
