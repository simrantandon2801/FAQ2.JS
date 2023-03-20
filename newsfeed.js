import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookNewsFeed() {
  const [bookNews, setBookNews] = useState([]);

  useEffect(() => {
    axios
      .get('https://newsapi.org/v2/top-headlines?q=books&apiKey=54ea02845098435db89492a2f4c4a5ba')
      .then((response) => {
        setBookNews(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {bookNews.map((article) => (
        <div key={article.title}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.url}>Read more</a>
        </div>
      ))}
    </div>
  );
}

export default BookNewsFeed;
