import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';

function PortfoliosAndStonks({login}){

    const [portfolios, setPortfolios] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:8080/portfolios`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin',
            headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX1BBWUlOR19DVVNUT01FUiJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9QQVlJTkdfQ1VTVE9NRVIifSx7ImF1dGhvcml0eSI6IlJPTEVfUEFZSU5HX0NVU1RPTUVSIn0seyJhdXRob3JpdHkiOiJST0xFX1BBWUlOR19DVVNUT01FUiJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9QQVlJTkdfQ1VTVE9NRVIifSx7ImF1dGhvcml0eSI6IlJPTEVfUEFZSU5HX0NVU1RPTUVSIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJST0xFX0NTUiJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9DU1IifSx7ImF1dGhvcml0eSI6IlJPTEVfQ1NSIn0seyJhdXRob3JpdHkiOiJST0xFX0NTUiJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9DU1IifSx7ImF1dGhvcml0eSI6IlJPTEVfQ1NSIn1dLCJpYXQiOjE2MTUwNTEzMDcsImV4cCI6MTYxNTA1MTkwN30.1T7JZHgqoTsPBGSdJAL8NOKGq70QVAwJumSIZAGIK-I" }
    }).then(res => res.json())
      .then(setPortfolios) 
      .catch(console.error);
    },[login])
    
    if(portfolios){
        let html = `<table class="w3-table w3-striped w3-white">`;
        portfolios.forEach(portfolio => {      
            let htmlSegment = `<tr><td><i class="fa fa-briefcase w3-text-blue w3-large"></i></td><td><a href="http://localhost:8080">${ portfolio.portfolioName }</a></td><td>${ portfolio.portfolioStonks }</td>`;
            htmlSegment+= `<td><img src="https://www.knkx.org/sites/kplu/files/styles/x_large/public/201310/Oregon_and_Transcontinental_stock.JPG" width=100 height=75/></td></tr>`;
            //htmlSegment += `<div id="${ portfolio.portfolioName }" class="w3-hide"><div class="w3-container"><p>${ portfolio.portfolioStonks }</p></div>`;
            html += htmlSegment         
        });
        html += `</table>`;
        //html += `<button onClick={logButtonClick}>Hello</button>`;
        return <div> { parse(html) } </div>;
    }
    return null;
}

export default PortfoliosAndStonks;