import React from 'react';

import articleData from '../../components/SiteData/articleData';
import ArticleCard from '../../components/ArticleCard';

export default function Home(props){ //have to pass through data set in the form of props
  console.log("articleDathimga",articleData);
  return(
    <div>
      <h1 className="articleCard">Articles</h1>
      {articleData.map((article,i) => (
      <ArticleCard articleContent={article} key={i}/> //can name the variable next to ArticleCard anything
      ))}
    </div>

  );
}
