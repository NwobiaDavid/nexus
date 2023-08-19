import { useState } from 'react';
import PropTypes from 'prop-types';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { RiRadioButtonFill } from "react-icons/ri";

function AccordionItem({ title, content, isActive, onClick }) {
  const contentStyles = {
    height: isActive ? '260px' : '0', // Adjust the max height as needed
    overflow: 'hidden',
    transition: 'height 0.3s ease-in', // Adjust the duration as needed
  };

  return (
    <div
      style={{ borderColor: isActive ? 'blue' : null }}
      className="border-b-2 hover:border-blue-600 w-[600px]"
    >
      <button
        className="w-full font-bold flex py-6 text-3xl px-5 text-left focus:outline-none transition-transform ease-in"
        onClick={onClick}
      >
        {title}
        <span className="ml-auto transition-transform">
          {isActive ? <FiChevronUp /> : <FiChevronDown />}
        </span>

      </button>
      <div style={contentStyles} className="">
        <ul>
          {Array.isArray(content) ? (
            <ul>
              {content.map((point, index) => (
                <li className="text-md flex items-center text-lg decoration-solid p-2" key={index}>
                <RiRadioButtonFill className='mr-2' /> {'   '}
                  {point}
                </li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </ul>
      </div>
    </div>
  );
}

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isActive={index === activeIndex}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
}

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default Accordion;
