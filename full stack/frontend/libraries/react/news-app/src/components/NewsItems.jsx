import React from 'react';

const NewsItems =(props)=>{

      let {title,description,imageUrl,newsUrl,author,date}=props
    return <div>
            
            <div className="card" >
                <img src={!imageUrl ?"https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0123%2Fr965090_1296x729_16%2D9.jpg":imageUrl } className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author?"Unknow":author} on {new Date(date).toGMTString()}</small></p>
                    <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                </div>
            </div>
    </div>;
  
}

export default NewsItems