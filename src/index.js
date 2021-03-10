import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PortfoliosAndStonks from './components/PortfoliosAndStonks';
import NewsFeed from './components/NewsFeed';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <NewsFeed stonks="AAPL" />,
  document.getElementById("news")
);

ReactDOM.render(
  <PortfoliosAndStonks login="1"/>,
  document.getElementById("PortfoliosContentPanel")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();