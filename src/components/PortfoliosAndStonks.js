import React from 'react';
// import ReactDOM from 'react-dom';

class PortfoliosAndStonks extends React.Component {

    state = {
        portfolios: []
    }
    
    portfolioExpand() {
        console.log('clicked');
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
                    {this.state.portfolios.map((portfolio, index) => {
                            return (                        
                                <React.Fragment key={index}>
                                    <button onClick={this.portfolioExpand}>{ portfolio.portfolioName }</button>
                                    <div className="panel">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
            )
            // let html = `<table class="w3-table w3-white">`;
            // portfolios.forEach(portfolio => {      
                // let htmlSegmentPortfolios =   `<tr class="w3-blue">
                //                                     <td colspan=3><button onclick="console.log('clicked')">${ portfolio.portfolioName }</button></a></td>
                //                                     <td><img src="https://www.knkx.org/sites/kplu/files/styles/x_large/public/201310/Oregon_and_Transcontinental_stock.JPG" width=75 height=50 /></td>
                //                                 </tr>`;
            //     let portfolioStonksArr = portfolio.portfolioStonks.split(',');
            //     let htmlSegmentStonks = ``;//`<table class="w3-table w3-striped w3-white">`;
            //     portfolioStonksArr.forEach(stonk => { 
            //         htmlSegmentStonks =   `<tr>
            //                                 <td><i class="fa fa-money w3-text-blue w3-medium"><a href="http://localhost:8080/stonks?${ stonk }">   ${ stonk }</a></td>
            //                                 <td><i class="fa w3-medium">Monthly Payout Per Share: $1</td>
            //                                 <td><i class="fa w3-medium">Quarterly Payout Per Share: $11</td>
            //                                 <td><i class="fa w3-medium">Annual Payout Per Share: $111</td>
            //                                 </tr>`;
            //         htmlSegmentPortfolios += htmlSegmentStonks;
            //     });  
            //     // htmlSegmentPortfolios += `</table>`;                                   
            //     html += htmlSegmentPortfolios;         
            // });
            // html += `</table>`;
            // return <div> { parse(html) } </div>;
        // }
        // return null;
    }
}

// ReactDOM.render(
//     <PortfoliosAndStonks/>,
//     document.getElementById("PortfoliosContentPanel")
//   )

export default PortfoliosAndStonks;
