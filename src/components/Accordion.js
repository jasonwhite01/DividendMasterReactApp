import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

//source = https://github.com/ALapina/FAQ-Accordion-Card-React/blob/master/src/components/Accordion.js

const Accordion = ({ contentToRender }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const renderedContent = contentToRender.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description" : "";
    const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <AccordionItem
        showDescription={showDescription}
        fontWeightBold={fontWeightBold}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index}
        key={index}
        onClick={() => {
          setActiveIndex(index);
        }}
      />
    );
  });

  return (
    <div className="faq">
      <h1 className="faq__title">FAQ</h1>
      <dl className="faq__list">{renderedContent}</dl>
    </div>
  );
};

export default Accordion;
