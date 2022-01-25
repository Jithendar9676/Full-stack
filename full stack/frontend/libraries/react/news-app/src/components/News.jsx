import React, {useState,useEffect} from 'react';
import NewsItems from './NewsItems';
import PropTypes from 'prop-types';




const News =(props)=> {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);




    const handlenextclick= async()=>{
        if(page + 1 > Math.ceil(totalResults/props.pageSize)){

        }else{
            let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=d3129ae3c9414390855fc21ae94f649b&page=${page + 1}&pageSize=${props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            setArticles(parsedData.articles);
           setTotalResults(parsedData.totalResults);
           setPage(page+1);

            

    }
}

    const handlepreclick=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=d3129ae3c9414390855fc21ae94f649b&page=${page - 1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setPage(page-1);
      
    }
    useEffect(()=>{
        handlenextclick();
        handlepreclick();
    },[])
    
    const fetchdata= async()=>{
       
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d3129ae3c9414390855fc21ae94f649b&page=${page+1}&pageSize=${props.pageSize}`;setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(parsedData.articles);
        setLoading(false);
        setTotalResults(parsedData.totalResults);

        
    }
    
  
  

    return <div className='container my-3 mb-3' >
        <h1 className='text-center' style={{marginTop:"90px"}} >Daily News - Top Headlines</h1>
        <hr />
        <div className="row">
          {articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                  <NewsItems title={element.title?element.title:''} description={element.description?element.description:''} imageUrl={element.urlToImage} newsUrl={element.url} author ={element.author} date ={element.publishedAt}/>

              </div>
          })}
        </div>
        <div className="container my-3 d-flex justify-content-between">
            <button disabled={page<=1} type='button' className='btn btn-dark' onClick={handlepreclick}> &larr; Previoin</button>
            <button disabled={(page + 1 > Math.ceil(totalResults/props.pageSize))} type='button' className='btn btn-dark' onClick={handlenextclick}> Next &rarr;</button>
        </div>
        </div>;
  
}


News.defaultProps ={
    country:'in',
    pageSize: 9 ,
    category: 'technology'
    
}

News.propsTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News;