import React, { useEffect } from 'react';

/**
 * Hook that calls a function callback on a click outside of the passed ref
 */
export default function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  callback: Function,
  ref2?: React.RefObject<HTMLElement>,
) {
  function handleClickOutside(event: MouseEvent) {
    if (!ref?.current?.contains(event.target as Node) && !ref2?.current?.contains(event.target as Node)) {
      callback(event);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
}
