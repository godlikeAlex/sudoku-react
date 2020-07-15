import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    height: 100%;

    body {
      display: flex;
      flex-direction: column;
      height: 100%;
      margin: 0;

      #root {
        background: radial-gradient(circle, rgba(38,32,142,1) 0%, rgba(20,140,166,1) 100%);
        color: '#282c34';
        display: flex;
        height: 100%;
        justify-content: center;
        padding: 15px;
      }
    }
  }
`;
