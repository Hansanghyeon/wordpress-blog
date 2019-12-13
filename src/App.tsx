import React from 'react';
import styled from 'styled-components';

const RedApp = styled.div`
  background-color: red;
`;

const App: React.FC = () => {
  return(
    <RedApp>Hello React!</RedApp>
  );
};

export default App;