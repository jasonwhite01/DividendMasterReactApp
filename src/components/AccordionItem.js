import React from "react";

const AccordionItem = ({
  showDescription,
  ariaExpanded,
  fontWeightBold,
  item,
  index,
  onClick,
}) => (
  <div className="portfolio__title" key={item.portfolioName}>
    <dt>
      <button
        data-cy={`portfolio${index+1}`}
        aria-expanded={ariaExpanded}
        aria-controls={`portfolio${index + 1}_desc`}
        data-qa="portfolio__portfolioName-button"
        className={`portfolio__portfolioName-button ${fontWeightBold}`}
        onClick={onClick}
      >
        {item.portfolioName}
      </button>
    </dt>    
    <dd>
        {
            item.portfolioStonks.split(',').map((item, indexB) => {
                return (
                    <React.Fragment key={indexB}>                        
                            <p  
                              data-cy={`portfolio${index+1}_stonk${indexB}`}
                              id={`portfolio${indexB + 1}_stonk`}
                              //data-qa="portfolio__stonk"
                              className={`portfolio__stonk ${showDescription}`}
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