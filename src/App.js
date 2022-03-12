import './App.scss';

import React from 'react';
import Split from 'react-split';
import { Header, Content } from 'layout';
import { AddableForm, Contracts, LoremIpsum, SplitPositionLogger } from 'components';
import { useDispatch } from 'react-redux';
import { setSplitSize } from 'store/slices/split-sizes';

function SplitContainer({ children }) {
  return <div className="splitContainer">{children}</div>;
}

function UpperHorizontal() {
  const dispatch = useDispatch();
  return (
    <div>
      <Split
        onDragEnd={(sizes) => {
          console.log(sizes);
          dispatch(setSplitSize({ sizes, name: 'upperHorizontalSizes' }));
        }}
        className="horizontalSplitter"
        direction="horizontal"
        sizes={[70, 30]}
      >
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
  const dispatch = useDispatch();
  return (
    <div>
      <Split
        onDragEnd={(sizes) => {
          console.log(sizes);
          dispatch(setSplitSize({ sizes, name: 'bottomHorizontalSizes' }));
        }}
        className="horizontalSplitter"
        direction="horizontal"
        sizes={[70, 30]}
      >
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
  const dispatch = useDispatch();
  return (
    <div className="app">
      <Header />
      <Content>
        <Split
          onDragEnd={(sizes) => {
            console.log(sizes);
            dispatch(setSplitSize({ sizes, name: 'verticalSizes' }));
          }}
          className="verticalSplitter"
          direction="vertical"
          sizes={[70, 30]}
        >
          <UpperHorizontal />
          <BottomHorizontal />
        </Split>
      </Content>
    </div>
  );
}

export default App;
