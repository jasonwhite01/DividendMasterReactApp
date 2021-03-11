import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';

function NewsFeed({stonks}){

    // console.log("called news feed component.");
    // const NYT_API_KEY = 'LhzLH8qE7OGheAyVBJjoNttcJPGiqrqL';
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        fetch("https://api.nytimes.com/svc/topstories/v2/business.json")
        .then(res => res.json())
        //   .then(setArticles) 
        .then( response => {
            // console.log('Response from main API: ', response)
            // console.log('Article Data: ', response.articles)
            setArticles(response.articles)
        })
        .catch(console.error);
    }, [])

    if(articles){
        let html = `<table class="w3-table w3-striped w3-white">`;
        articles.forEach(article => {      
            let htmlSegment = `<tr><td><i class="fa fa-briefcase w3-text-blue w3-large"></i></td><td><a href="http://localhost:8080">${ article.author }</a></td><td>${ article.description }</td>`;
            htmlSegment+= `<td><img src=${ article.urlToImage } width=100 height=75/></td></tr>`;
            //htmlSegment += `<div id="${ portfolio.portfolioName }" class="w3-hide"><div class="w3-container"><p>${ portfolio.portfolioStonks }</p></div>`;
            html += htmlSegment         
        });
        html += `</table>`;
        return <div> { parse(html) } </div>;
        }
        return 'no data available at this time';
}

export default NewsFeed;