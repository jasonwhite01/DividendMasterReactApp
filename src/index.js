import React from 'react';
import ReactDOM from 'react-dom';
import PortfoliosAndStonks from './components/PortfoliosAndStonks';
import Accordion from './components/Accordion.js';
import './index.css';
import "./scss/main.scss";

// ReactDOM.render(
//   <NewsFeed stonks="AAPL" />,
//   document.getElementById("news")
// )

const questionsAnswers = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
  },
  {
    question: "Can I cancel my subscription?",
    answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
  },
  {
    question: "Do you provide additional support?",
    answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
  },
];

ReactDOM.render(
  <Accordion contentToRender={questionsAnswers} />,
  document.getElementById("StonksContentPanel")
)


ReactDOM.render(
  <PortfoliosAndStonks login="1"/>,
  document.getElementById("PortfoliosContentPanel")
)

// ReactDOM.render(
//   <Stonks/>,
//   document.getElementById("StonksContentPanel")
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();