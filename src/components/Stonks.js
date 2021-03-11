import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';

function Stonks({portfolioName}){

    const [portfolio, setPortfolio] = useState(null);
    //let apiUrl = `http://localhost:8080/portfolios/portfolio/${portfolioName}`;

    useEffect(() => {
        fetch(`http://localhost:8080/portfolios/portfolio/${portfolioName}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin',
            headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX1BBWUlOR19DVVNUT01FUiJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9QQVlJTkdfQ1VTVE9NRVIifSx7ImF1dGhvcml0eSI6IlJPTEVfUEFZSU5HX0NVU1RPTUVSIn0seyJhdXRob3JpdHkiOiJST0xFX1BBWUlOR19DVVNUT01FUiJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9QQVlJTkdfQ1VTVE9NRVIifSx7ImF1dGhvcml0eSI6IlJPTEVfUEFZSU5HX0NVU1RPTUVSIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJST0xFX0NTUiJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9DU1IifSx7ImF1dGhvcml0eSI6IlJPTEVfQ1NSIn0seyJhdXRob3JpdHkiOiJST0xFX0NTUiJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9DU1IifSx7ImF1dGhvcml0eSI6IlJPTEVfQ1NSIn1dLCJpYXQiOjE2MTUwNTEzMDcsImV4cCI6MTYxNTA1MTkwN30.1T7JZHgqoTsPBGSdJAL8NOKGq70QVAwJumSIZAGIK-I" }
        }).then(res => res.json())
        .then(setPortfolio) 
        .catch(console.error);
    },[portfolioName])
    
    if(portfolio){
        // let stonksListing = portfolio.portfolioStonks;
        // console.log("StonksListing: " + stonksListing);
        // let html = `<table class="w3-table w3-striped w3-white">`;
        // stonksListing.forEach(stonk => {   
        console.log("portfolio: " + portfolio);
        console.log("portfoliostonks: " + portfolio[0].portfolioStonks);   
        let portfolioStonksArr = portfolio[0].portfolioStonks.split(',');
        console.log("portfoliostonksArr: " + portfolioStonksArr);   

        let html = `<table class="w3-table w3-striped w3-white">`;
        portfolioStonksArr.forEach(stonk => {
            console.log("stonk: " + stonk);     
            let htmlSegment =   `<tr>
                                    <td><i class="fa fa-briefcase w3-text-blue w3-large"></i></td><td><a href="http://localhost:8080/stonks?${ stonk }">${ stonk }</a></td>
                                    <td><img src="https://www.knkx.org/sites/kplu/files/styles/x_large/public/201310/Oregon_and_Transcontinental_stock.JPG" width=100 height=75 /></td>
                                 </tr>`;
            html += htmlSegment;
        });
        
        html += `</table>`;
        return <div> { parse(html) } </div>;
    }
    return null;
}

export default Stonks;