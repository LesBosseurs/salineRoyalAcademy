import React, { useRef, useEffect, ReactNode, RefObject } from 'react';

interface ClickOutsideProps {
  children: ReactNode;
  exceptionRef?: RefObject<HTMLElement>;
  onClick: () => void;
}

export default function ClickOutside({
  children,
  exceptionRef,
  onClick,
}: ClickOutsideProps): JSX.Element {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: Event) {
      const exceptionElement = exceptionRef?.current;
      const targetElement = event.target as Node;

      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(targetElement) &&
        (!exceptionElement || !exceptionElement.contains(targetElement))
      ) {
        onClick();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [exceptionRef, onClick]);

  return <div ref={wrapperRef}>{children}</div>;
}
