import React from "react";

const AccordionItem = ({
  showDescription,
  ariaExpanded,
  fontWeightBold,
  item,
  index,
  onClick,
}) => (
  <div className="faq__question" key={item.portfolioName}>
    <dt>
      <button
        aria-expanded={ariaExpanded}
        aria-controls={`faq${index + 1}_desc`}
        data-qa="faq__question-button"
        className={`faq__question-button ${fontWeightBold}`}
        onClick={onClick}
      >
        {item.portfolioName}
      </button>
    </dt>    
    <dd>
        {
            item.portfolioStonks.split(',').map((item, index) => {
                return (
                    <React.Fragment key={index}>                        
                            <p  id={`faq${index + 1}_desc`}
                                data-qa="faq__desc"
                                className={`faq__desc ${showDescription}`}
                            >
                            { item }
                            </p>                        
                    </React.Fragment>
                )            
            })
        }
    </dd>
  </div>
);

export default AccordionItem;