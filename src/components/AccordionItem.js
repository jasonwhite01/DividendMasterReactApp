import React from "react";

class AccordionItem extends React.Component {

    constructor(args){
        super();
        this.showDescription = args.showDescription;
        this.ariaExpanded = args.ariaExpanded;
        this.fontWeightBold = args.fontWeightBold;
        // console.log(`item - ${args.item}`);
        this.item = args.item;
        this.index = args.index;
        this.onClick = args.onClick;
        console.log(`onClick - ${args.onClick}`);
        this.ariaControls = args.ariaControls;
    }; 

    render() {
        // console.log('portfolioName: ' + this.item.portfolioName);
        return (
            <div className="faq__question" key={this.item.portfolioName}>
                <dt>
                    <button
                        aria-expanded={this.ariaExpanded}
                        aria-controls={this.ariaControls}
                        data-qa="faq__question-button"
                        className={`faq__question-button ${this.fontWeightBold}`}
                        onClick={this.onClick}
                    >
                        {this.item.portfolioName}
                    </button>
                </dt>
                {
                    this.item.portfolioStonks.split(',').map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <dd>
                                    <p  id={`faq${index + 1}_desc`}
                                        data-qa="faq__desc"
                                        className={`faq__desc ${this.showDescription}`}
                                    >
                                    <dl>
                                        <dt>
                                            { item }
                                        </dt>
                                    </dl>
                                    </p>
                                </dd>
                            </React.Fragment>
                        )
                    
                    })
                }
            </div>
        )
    }
}


// function AccordionItem(showDescription,
//     ariaExpanded,
//     fontWeightBold,
//     item,
//     index,
//     onClick){

//     console.log("item: " + item);
    //const stonksArray = item.split(','); 
//     const html = "";

//     const itemContent = (//() => (
//             <div className="faq__question" key={item.portfolioName}>
//                 <dt>
//                     <button
//                         aria-expanded={ariaExpanded}
//                         aria-controls={`faq${index + 1}_desc`}
//                         data-qa="faq__question-button"
//                         className={`faq__question-button ${fontWeightBold}`}
//                         onClick={onClick}
//                     >
//                         {item.portfolioName}
//                     </button>
//                 </dt>
//             </div>
//     );

//     const renderedContent = item.split(',').map((item, index) => {
//         return (
//             <dd>
//                 <p  id={`faq${index + 1}_desc`}
//                     data-qa="faq__desc"
//                     className={`faq__desc ${showDescription}`}
//                 ></p>
//                 <dl>
//                     <dt>
//                     ${ item }
//                     </dt>
//                 </dl>
//             </dd>
//         )
    
//     });

//     console.log('itemcontent + rendered content: ' + {itemContent} + ' ' + {renderedContent});

//     return (
//         {renderedContent}
//       );

// };


// const AccordionItem = ({
//   showDescription,
//   ariaExpanded,
//   fontWeightBold,
//   item,
//   index,
//   onClick,
// }) => (
//   <div className="faq__question" key={item.portfolioName}>
//     <dt>
//       <button
//         aria-expanded={ariaExpanded}
//         aria-controls={`faq${index + 1}_desc`}
//         data-qa="faq__question-button"
//         className={`faq__question-button ${fontWeightBold}`}
//         onClick={onClick}
//       >
//         {item.portfolioName}
//       </button>
//     </dt>
    
//     <dd>
//       <p
//         id={`faq${index + 1}_desc`}
//         data-qa="faq__desc"
//         className={`faq__desc ${showDescription}`}
//       >
//         {()=>{
//             let html = `<dl>`;  
//             let htmlSegmentStonks = ``;
//             item.portfolioStonks.split(',').forEach(stonk => { 
//                 htmlSegmentStonks =   `<dt>${ stonk }</dt>`;
//             })
//             html += `</dl>`;
//             html += htmlSegmentStonks;
//           }
//         }
//       </p>
//     </dd>
//   </div>
// );

export default AccordionItem;