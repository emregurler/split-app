import './App.scss';

import React from 'react';
import Split from 'react-split';
import { Header, Content } from 'layout';
import { AddableForm, Contracts, LoremIpsum, SplitPositionLogger } from 'components';

function SplitContainer({ children }) {
  return <div className="splitContainer">{children}</div>;
}

function UpperHorizontal() {
  return (
    <div>
      <Split className="horizontalSplitter" direction="horizontal" sizes={[70, 30]}>
        <SplitContainer>
          <Contracts />
        </SplitContainer>
        <SplitContainer>
          <SplitPositionLogger />
        </SplitContainer>
      </Split>
    </div>
  );
}

function BottomHorizontal() {
  return (
    <div>
      <Split className="horizontalSplitter" direction="horizontal" sizes={[70, 30]}>
        <SplitContainer>
          <AddableForm />
        </SplitContainer>
        <SplitContainer>
          <LoremIpsum />
        </SplitContainer>
      </Split>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <Content>
        <Split className="verticalSplitter" direction="vertical" sizes={[70, 30]}>
          <UpperHorizontal />
          <BottomHorizontal />
        </Split>
      </Content>
    </div>
  );
}

export default App;
