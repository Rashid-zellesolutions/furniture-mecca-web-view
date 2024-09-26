import React, {useRef, useState, useEffect} from 'react'
import './SingleProductFAQ.css';
import arrowDown from '../../../Assets/icons/arrow-down.png';

const SingleProductFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null)
    const answerRef = useRef([]);
    useEffect(() => {
        answerRef.current.forEach(ref => {
            if (ref) ref.style.height = '0px';
        });
        
        if(activeIndex !== null){
            answerRef.current[activeIndex].style.height = answerRef.current[activeIndex].scrollHeight + 'px';
        }
    }, [activeIndex])

    const productDetails = [
        {question: 'Description', icon: arrowDown, answereOne: 
            `Well, let's face it. Coordinating living room furniture – including fabrics, pillows, colors, 
            and sizes – can be exhausting! A living room set is an effective and convenient way to complete 
            your living space, while eliminating the stress of matching sofas, chairs and ottomans. Don’t 
            lose sleep over whether that loveseat you have your eye on is an ideal fit with your existing 
            furniture. Buy a sofa set instead!`, 
        },
        {question: 'Weight & Dimension', icon: arrowDown, answereOne: 
            `Well, let's face it. Coordinating living room furniture – including fabrics, pillows, colors, 
            and sizes – can be exhausting! A living room set is an effective and convenient way to complete 
            your living space, while eliminating the stress of matching sofas, chairs and ottomans. Don’t 
            lose sleep over whether that loveseat you have your eye on is an ideal fit with your existing 
            furniture. Buy a sofa set instead!`,
        },
        {question: 'Spacifications', icon: arrowDown, answereOne: 
            `Well, let's face it. Coordinating living room furniture – including fabrics, pillows, colors, 
            and sizes – can be exhausting! A living room set is an effective and convenient way to complete 
            your living space, while eliminating the stress of matching sofas, chairs and ottomans. Don’t 
            lose sleep over whether that loveseat you have your eye on is an ideal fit with your existing 
            furniture. Buy a sofa set instead!`,
        }

    ]

        const [expandedIndex, setExpandedIndex] = useState(null);
    
        const handleToggle = index => {
            if (activeIndex === index) {
                setActiveIndex(null);
            } else {
                setActiveIndex(index);
            }
        };
    
        const handleShowMore = index => {
            setExpandedIndex(expandedIndex === index ? null : index);
        };
        
  return (
    <div className='single-product-detailed-section-container'>
                {productDetails.map((item, index) => {
                    const isExpanded = expandedIndex === index;
                    const truncatedText = item.answereOne.slice(0, 150) + (item.answereOne.length > 150 ? '...' : '');
                    return <div key={index} className='details-toggler'>
                        <div className='single-product-details-section' onClick={() => handleToggle(index)}>
                            <p>{item.question}</p>
                            <img src={item.icon} alt='add btn' className={`${activeIndex === index ? 'single-product-arrow-rotate' : ''}`} />
                        </div>
                        <div className={`single-product-details-answered-section ${activeIndex === index ? 'show-answere' : ''}`}
                        ref={el =>  answerRef.current[index] = el} 
                        style={{ height: activeIndex === index ? `${answerRef.current.scrollHeight}px` : '0px' }}
                        >
                            <p>{isExpanded ? item.answereOne : truncatedText}</p>
                            {item.answereOne.length > 150 && (
                                <button onClick={() => handleShowMore(index)} className='show-more-btn'>
                                    {isExpanded ? 'Show Less' : 'Show More'}
                                </button>
                            )}
                        </div>
                    </div>
                    })}
            </div>
  )
}

export default SingleProductFAQ;
