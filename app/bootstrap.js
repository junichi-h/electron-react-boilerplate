import { injectGlobal } from 'styled-components';

injectGlobal`
  html {
    height: 100%;
    background: #fff;
    font-size: 62.5%;
    overflow-y: visible;
  }

  body {
    -webkit-font-smoothing: antialiased;
    line-height: 1.0;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
  }

  li {
    list-style: none;
  }
`;
