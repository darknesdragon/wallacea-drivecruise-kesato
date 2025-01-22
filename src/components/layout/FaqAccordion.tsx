import CaretRight from "../icon/caret-right";

import "@styles/components/layout/_FaqAccordion.scss";

type FaqAccordionProps = {
    list: Array<{
        title: string;
        desc: string
    }>
}

const FaqAccordion = ({list} : FaqAccordionProps) => {

    const firstCollapseButton = (index : number) => {
        if ( index == 0 ) {
            return '';
        } else {
            return 'collapsed';
        }
    }

    const firstCollapse = (index : number) => {
        if ( index == 0 ) {
            return 'show';
        } else {
            return '';
        }
    }

    const faqListLoop = list.map( (faq, index) => {
        return (
            <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                    <button className={`accordion-button ${firstCollapseButton(index)}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${index}`} aria-expanded="true" aria-controls={`collapse-${index}`}>
                        {faq.title}
                        <div className="faq-accordion__button-caret-container">
                            <CaretRight className="ratio-item"/>
                        </div>
                    </button>
                </h2>
                <div id={`collapse-${index}`} className={`accordion-collapse collapse ${firstCollapse(index)}`} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {faq.desc}
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div className="faq-accordion">
            <div className="accordion" id="accordionExample">
                {faqListLoop}
            </div>
        </div>
    )
}

export default FaqAccordion;