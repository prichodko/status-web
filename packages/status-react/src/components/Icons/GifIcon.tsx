import React from "react";
import styled from "styled-components";

interface ThemeProps {
  isActive?: boolean;
}

export const GifIcon = ({ isActive }: ThemeProps) => {
  return (
    <Icon
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={isActive ? "active" : ""}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 1.5H4C2.61929 1.5 1.5 2.61929 1.5 4V16C1.5 17.3807 2.61929 18.5 4 18.5H16C17.3807 18.5 18.5 17.3807 18.5 16V4C18.5 2.61929 17.3807 1.5 16 1.5ZM4 0C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0H4Z"
      />
      <path
        className={isActive ? "active" : ""}
        d="M8.72261 11.4868V10.4133C8.72261 9.99528 8.38061 9.65328 7.96261 9.65328H6.22411C5.90111 9.65328 5.64461 9.90978 5.64461 10.2328C5.64461 10.5748 5.90111 10.8313 6.22411 10.8313H7.37361V11.5913C7.11711 11.8288 6.58511 12.0758 6.02461 12.0758C4.87511 12.0758 4.03911 11.1923 4.03911 9.99528C4.03911 8.79828 4.87511 7.91478 6.02461 7.91478C6.50911 7.91478 6.98411 8.12378 7.34511 8.47528C7.46861 8.59878 7.63961 8.66528 7.80111 8.66528C8.13361 8.66528 8.43761 8.38978 8.43761 8.05728C8.43761 7.91478 8.38061 7.76278 8.27611 7.64878C7.78211 7.11678 7.05061 6.71778 6.02461 6.71778C4.17211 6.71778 2.65211 7.99078 2.65211 9.99528C2.65211 11.9903 4.17211 13.2823 6.02461 13.2823C7.30711 13.2823 8.72261 12.6363 8.72261 11.4868Z"
      />
      <path
        className={isActive ? "active" : ""}
        d="M11.4392 12.5603V7.43978C11.4392 7.07878 11.1352 6.77478 10.7742 6.77478C10.3942 6.77478 10.0902 7.07878 10.0902 7.43978V12.5603C10.0902 12.9213 10.3942 13.2253 10.7552 13.2253C11.1352 13.2253 11.4392 12.9213 11.4392 12.5603Z"
      />
      <path
        className={isActive ? "active" : ""}
        d="M17.3479 7.43029C17.3479 7.09778 17.0819 6.83179 16.7684 6.83179H13.5669C13.1489 6.83179 12.8069 7.17379 12.8069 7.59179V12.5603C12.8069 12.9213 13.1109 13.2253 13.4719 13.2253C13.8519 13.2253 14.1559 12.9213 14.1559 12.5603V11.0463C14.1559 10.7701 14.3797 10.5463 14.6559 10.5463H16.2425C16.556 10.5463 16.822 10.2803 16.822 9.95728C16.822 9.62478 16.556 9.35879 16.2425 9.35879H14.6559C14.3797 9.35879 14.1559 9.13493 14.1559 8.85879V8.51929C14.1559 8.24314 14.3797 8.01929 14.6559 8.01929H16.7684C17.0819 8.01929 17.3479 7.75329 17.3479 7.43029Z"
      />
    </Icon>
  );
};

const Icon = styled.svg`
  & > path {
    fill: ${({ theme }) => theme.secondary};
  }

  & > path.active {
    fill: ${({ theme }) => theme.tertiary};
  }
`;
