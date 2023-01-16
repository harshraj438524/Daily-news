import React from 'react'
function NewsItem(props){

  return (
         <div >
                <div className="card" style={{ width: "18rem" }} >
                    <img src={props.imageurl} className="card-img-top" alt="..."  width="50px" height="160px"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}...</h5>
                        <p className="card-text">{props.description}...</p>
                        <a href={props.url} target="_blank" className="btn btn-sm btn-primary">read more</a>
                    </div>
                </div>
         </div>
  )
}

export default NewsItem