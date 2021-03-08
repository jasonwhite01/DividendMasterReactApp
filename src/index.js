import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import parse from 'html-react-parser';


// retrieve portfolio of stonks, list stonks
function UserPortfolios({ login }){
  const [portfolios, setPortfolios] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:8080/portfolios`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX1BBWUlOR19DVVNUT01FUiJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9QQVlJTkdfQ1VTVE9NRVIifSx7ImF1dGhvcml0eSI6IlJPTEVfUEFZSU5HX0NVU1RPTUVSIn0seyJhdXRob3JpdHkiOiJST0xFX1BBWUlOR19DVVNUT01FUiJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9QQVlJTkdfQ1VTVE9NRVIifSx7ImF1dGhvcml0eSI6IlJPTEVfUEFZSU5HX0NVU1RPTUVSIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJST0xFX0NTUiJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9DU1IifSx7ImF1dGhvcml0eSI6IlJPTEVfQ1NSIn0seyJhdXRob3JpdHkiOiJST0xFX0NTUiJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9DU1IifSx7ImF1dGhvcml0eSI6IlJPTEVfQ1NSIn1dLCJpYXQiOjE2MTUwNTEzMDcsImV4cCI6MTYxNTA1MTkwN30.1T7JZHgqoTsPBGSdJAL8NOKGq70QVAwJumSIZAGIK-I"
      }
    }).then(res => res.json())
      .then(setPortfolios) 
      .catch(console.error);
  },[login]);
  
  if(portfolios){
    let html = `<table class="w3-table w3-striped w3-white">`;
    portfolios.forEach(portfolio => {      
      let htmlSegment = `<tr>
                          <td><i class="fa fa-briefcase w3-text-blue w3-large"></i></td>
                          <td>${ portfolio.portfolioName }</td>
                          <td>${ portfolio.portfolioStonks }</td>
                        </tr>`;
      html += htmlSegment      
    });
    html += "</table>";
    return <div> { parse(html) } </div>;
  }
  return null;
}

function DividendMaster(){
  return <UserPortfolios login="1" />  
}

ReactDOM.render(
  <DividendMaster />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();