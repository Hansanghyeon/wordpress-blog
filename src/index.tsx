import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const RedApp = styled.div`
  background-color: red;
`;

const App: React.FC = () => {
  return(
    <RedApp>Hello React!</RedApp>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
)