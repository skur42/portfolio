import React from 'react';

export const ArrowUp = (props: React.SVGProps<SVGSVGElement>) => {
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
      <title>Arrow Up</title>
      <path d="M1437.098 946.304c31.297 31.263 52.164 41.683 93.894 41.683s73.029-10.421 93.894-41.683c52.164-52.104 52.164-135.47 0-187.574l-667.692-666.933c-104.327-93.788-198.22-52.105-250.384 0l-667.691 666.933c-52.17 52.104-52.17 135.47 0 187.574 31.299 31.263 52.17 41.683 93.897 41.683s62.598-10.421 93.897-41.683l605.089-604.408 605.095 604.408z" />
    </svg>
  );
};
