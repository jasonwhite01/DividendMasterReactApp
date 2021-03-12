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
        let html = `<table class="w3-table w3-white">`;
        portfolios.forEach(portfolio => {      
            let htmlSegmentPortfolios =   `<tr class="w3-grey">
                                                <td colspan=3><a href="http://localhost:8080/portfolio?${ portfolio.portfolioName }">${ portfolio.portfolioName }</a></td>
                                                <td><img src="https://www.knkx.org/sites/kplu/files/styles/x_large/public/201310/Oregon_and_Transcontinental_stock.JPG" width=75 height=50 /></td>
                                            </tr>`;
            let portfolioStonksArr = portfolio.portfolioStonks.split(',');
            let htmlSegmentStonks = ``;//`<table class="w3-table w3-striped w3-white">`;
            portfolioStonksArr.forEach(stonk => { 
                htmlSegmentStonks =   `<tr>
                                        <td><i class="fa fa-money w3-text-blue w3-medium"><a href="http://localhost:8080/stonks?${ stonk }">   ${ stonk }</a></td>
                                        <td><i class="fa w3-medium">Monthly Payout Per Share: $1</td>
                                        <td><i class="fa w3-medium">Quarterly Payout Per Share: $11</td>
                                        <td><i class="fa w3-medium">Annual Payout Per Share: $111</td>
                                        </tr>`;
                htmlSegmentPortfolios += htmlSegmentStonks;
            });  
            // htmlSegmentPortfolios += `</table>`;                                   
            html += htmlSegmentPortfolios;         
        });
        html += `</table>`;
        return <div> { parse(html) } </div>;
    }
    return null;
}

export default PortfoliosAndStonks;