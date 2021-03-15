import React, { useState} from "react";
import AccordionItem from "./AccordionItem";

//source = https://github.com/ALapina/FAQ-Accordion-Card-React/blob/master/src/components/Accordion.js

function Accordion ({portfolios}){
    const [activeIndex, setActiveIndex] = useState(0);

    const renderedContent = portfolios.map((item, index) => {
        const showDescription = index === activeIndex ? "show-description" : "";
        const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";
        const ariaExpanded = index === activeIndex ? "true" : "false";
        const ariaControls = "portfolio" + index + "_desc"; 
        return (
        <AccordionItem
            showDescription={showDescription}
            fontWeightBold={fontWeightBold}
            ariaExpanded={ariaExpanded}
            ariaControls={ariaControls}
            item={item}
            index={index}
            key={index}
            onClick={() => {
                setActiveIndex(index);
            }}
        />
        )
    });

    return (
        <div>
          <dl>{renderedContent}</dl>
        </div>
      );
};

export default Accordion;