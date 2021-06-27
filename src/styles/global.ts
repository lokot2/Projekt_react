import { createGlobalStyle } from 'styled-components';
import { colors, media } from 'styles';

const GlobalStyle = createGlobalStyle`

  html {
    font-size: 10px;
  }
  
  body {
    margin: 0;
    padding: 128px 0 0 0;
    background-color: ${colors.background};
    font-size: 1.6rem;
    font-family: 'Lato', sans-serif;

    ${media.sm} {
      padding: 64px 0 0 0;
    }
  }
  
  * {
    box-sizing: border-box;
  }
  
  a, a:link {
      color: ${colors.link};
      text-decoration: none;
      position: relative;
  }
  
  h2 {
      font-size: 2rem;
      color: ${colors.accentLight};
  }
  
  p {
      color: ${colors.paragraph};
  }
  
  hr {
      margin-bottom: 24px;
      border: 0;
      height: 1px;
      width: 100%;
      background-color: ${colors.mutedParagraph};
  }
`;

export default GlobalStyle;