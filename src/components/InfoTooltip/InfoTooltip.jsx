import React, { useEffect, useState } from 'react';
import { usePopper } from 'react-popper';
import './style.css';

const InfoTooltip = ({ content }) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom',
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
  });

  const show = () => {
    setShowTooltip(true);
  };

  const hide = () => {
    setShowTooltip(false);
  };

  useEffect(() => {
    if (referenceElement) {
      const showEvents = ['pointerenter', 'focus'];
      const hideEvents = ['pointerleave', 'blur'];

      showEvents.forEach((event) => {
        referenceElement.addEventListener(event, show);
      });

      hideEvents.forEach((event) => {
        referenceElement.addEventListener(event, hide);
      });

      return () => {
        showEvents.forEach((event) => {
          referenceElement.removeEventListener(event, show);
        });

        hideEvents.forEach((event) => {
          referenceElement.removeEventListener(event, hide);
        });
      };
    }
  }, [referenceElement]);

  return (
    <>
      <button
        type="button"
        className="info-tooltip-button"
        ref={setReferenceElement}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            className="info-tooltip-icon"
            d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm1-6h-2v-8h2v8zm-1-12.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z"
          />
        </svg>
      </button>

      {showTooltip && (
        <div
          className="info-tooltip-body"
          data-open={showTooltip}
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          {content}
          <div
            className="info-tooltip-arrow"
            ref={setArrowElement}
            style={styles.arrow}
          ></div>
        </div>
      )}
    </>
  );
};

export default InfoTooltip;
