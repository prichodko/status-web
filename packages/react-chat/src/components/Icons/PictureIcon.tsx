import React from "react";
import styled from "styled-components";

import { Theme } from "../../styles/themes";

interface ThemeProps {
  theme: Theme;
}

export const PictureIcon = ({ theme }: ThemeProps) => {
  return (
    <Icon
      width="20"
      height="18"
      viewBox="0 0 20 18"
      xmlns="http://www.w3.org/2000/svg"
      theme={theme}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 6.5C16.5 8.15685 15.1569 9.5 13.5 9.5C11.8431 9.5 10.5 8.15685 10.5 6.5C10.5 4.84315 11.8431 3.5 13.5 3.5C15.1569 3.5 16.5 4.84315 16.5 6.5ZM15 6.5C15 7.32843 14.3284 8 13.5 8C12.6716 8 12 7.32843 12 6.5C12 5.67157 12.6716 5 13.5 5C14.3284 5 15 5.67157 15 6.5Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 0C1.79086 0 0 1.79086 0 4V14C0 16.2091 1.79086 18 4 18H16C18.2091 18 20 16.2091 20 14V4C20 1.79086 18.2091 0 16 0H4ZM16 1.5H4C2.61929 1.5 1.5 2.61929 1.5 4V7.23223C1.5 7.67768 2.03857 7.90077 2.35355 7.58579L3.76256 6.17678C4.44598 5.49336 5.55402 5.49336 6.23744 6.17678L16.3181 16.2575C16.4372 16.3765 16.6094 16.4311 16.7695 16.3793C17.7737 16.0548 18.5 15.1122 18.5 14V4C18.5 2.61929 17.3807 1.5 16 1.5ZM1.53033 10.5303C1.51153 10.5491 1.5 10.5742 1.5 10.6008V14C1.5 15.3807 2.61929 16.5 4 16.5H13.2322C13.6777 16.5 13.9008 15.9614 13.5858 15.6464L5.17678 7.23744C5.07914 7.1398 4.92085 7.13981 4.82322 7.23744L1.53033 10.5303Z"
      />
    </Icon>
  );
};

const Icon = styled.svg<ThemeProps>`
  & > path {
    fill: ${({ theme }) => theme.textSecondaryColor};
  }
`;
