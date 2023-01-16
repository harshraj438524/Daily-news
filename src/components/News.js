import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios'


function News(props) {
  const [article, setarticle] = useState([]);
  const [next, setnext] = useState(1);
  const url =`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=dd680b7a6ea7427fa8aa310f5c160242&page=${next}&pageSize=5`

  useEffect(() => {
      axios.get(url)
        .then(res => {
          setarticle(res.data.articles);
          console.log(res.data.articles);
        })
        .catch(err => {
          console.log(err)
        })
  }, [next,url])
  const x = article.map((element => <div className="col-md-4" key={element.url} >
    <NewsItem title={element.title} description={element.description} url={element.url} imageurl={element.urlToImage} />
  </div>))
  return (
    <div className="container">
      <h1>DAILY NEWS-top headlines</h1>
      <div className="row">
        {x}
      </div>
      <div className="d-flex justify-content-between my-3" >
        <button type="button" className="btn btn-dark" onClick={() => setnext(next => next - 1)}>previous</button>
        <button type="button" className="btn btn-dark" onClick={() => setnext(next => next + 1)}>next</button>
      </div>

    </div>

  )
}

export default News