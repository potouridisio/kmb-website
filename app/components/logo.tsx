import type { SVGProps } from 'react';

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" height="55" viewBox="0 0 54 55" width="54" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M54 31H30V54.25H54V31Z" fill="#5d32f5" />
      <path
        d="M6.83499 31L0 37.8243V47.4266L6.83405 54.25H16.4551L20.1197 50.5911L23.25 47.4657V37.7853L16.4541 31H6.83499Z"
        fill="#5d32f5"
      />
      <path
        d="M41.625 23.25C48.0453 23.25 53.25 18.0453 53.25 11.625C53.25 5.20469 48.0453 0 41.625 0C35.2047 0 30 5.20469 30 11.625C30 18.0453 35.2047 23.25 41.625 23.25Z"
        fill="#5d32f5"
      />
    </svg>
  );
}
