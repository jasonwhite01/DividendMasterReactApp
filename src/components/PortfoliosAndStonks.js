import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';

class PortfoliosAndStonks extends React.Component {

    state = {
        portfolios: []       
    }
    
    componentDidMount() {
        fetch(`http://localhost:8080/portfolios`, {
                method: 'GET',
                mode: 'cors',
                credentials: 'same-origin',
                headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX1BBWUlOR19DVVNUT01FUiJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9QQVlJTkdfQ1VTVE9NRVIifSx7ImF1dGhvcml0eSI6IlJPTEVfUEFZSU5HX0NVU1RPTUVSIn0seyJhdXRob3JpdHkiOiJST0xFX1BBWUlOR19DVVNUT01FUiJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9QQVlJTkdfQ1VTVE9NRVIifSx7ImF1dGhvcml0eSI6IlJPTEVfUEFZSU5HX0NVU1RPTUVSIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJST0xFX0NTUiJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9DU1IifSx7ImF1dGhvcml0eSI6IlJPTEVfQ1NSIn0seyJhdXRob3JpdHkiOiJST0xFX0NTUiJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9DU1IifSx7ImF1dGhvcml0eSI6IlJPTEVfQ1NSIn1dLCJpYXQiOjE2MTUwNTEzMDcsImV4cCI6MTYxNTA1MTkwN30.1T7JZHgqoTsPBGSdJAL8NOKGq70QVAwJumSIZAGIK-I" }
        }).then(res => res.json())
        .then(portfolioList => {
            this.setState( {portfolios: portfolioList} );
        }) 
        .catch(console.error);
    }

    render() {
        return (  
            <div>
                <Accordion portfolios={this.state.portfolios}/>
            </div>
        )            
    }
}

ReactDOM.render(
    <PortfoliosAndStonks/>,
    document.getElementById("PortfoliosContentPanel")
  )

export default PortfoliosAndStonks;
