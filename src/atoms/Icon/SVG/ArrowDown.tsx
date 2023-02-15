import React from 'react';

export const ArrowDown = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1664"
      height="1024"
      viewBox="0 0 1664 1024"
      // eslint-disable-next-line react/destructuring-assignment
      style={{ transform: `scale(${props.scale})` }}
      {...props}
    >
      <title>Arrow Down</title>
      <path d="M226.902 77.696c-31.297-31.263-52.164-41.683-93.894-41.683s-73.029 10.421-93.894 41.683c-52.164 52.104-52.164 135.47 0 187.574l667.692 666.933c104.327 93.788 198.22 52.105 250.384 0l667.691-666.933c52.17-52.104 52.17-135.47 0-187.574-31.299-31.263-52.17-41.683-93.897-41.683s-62.598 10.421-93.897 41.683l-605.089 604.408-605.095-604.408z" />
    </svg>
  );
};
