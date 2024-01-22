import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        font-family: Pretendard,'Noto Sans KR', sans-serif;
        box-sizing: border-box;
        -ms-overflow-style: none;
        scrollbar-width: none;
        
    }
    ::-webkit-scrollbar {
        display: none;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    body{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
        line-height: 1;
        vertical-align: baseline;
        background-color: #FFFFFF;
        margin-bottom: 100px;
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }
      
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
        font-family: "Pretendard-Regular", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    }
    #root {
        width: calc(var(--vw, 1vw) * 100);
        height: calc(var(--vh, 1vh) * 100);
    }
    .flex-row {
        display: flex;
    justify-content: center;
    align-items: center;
    &.start{
    justify-content: left;
    align-items: start;
    }
}
    .flex-column {
        display: flex;
        flex-direction: column;
    justify-content: center;
    align-items: center;
    &.start{
        justify-content: left;
        align-items: start;
        }
    }
`;

export default GlobalStyles;
