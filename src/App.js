import './App.scss';

import React from 'react';
import Split from 'react-split';
import { Header } from 'components';

function C1() {
  return <div class="comp">Component 1 {Date.now()}</div>;
}
function C2() {
  return <div class="comp">Component 2 {Date.now()}</div>;
}

function UpperHorizontal() {
  return (
    <div>
      <Split className="horizontal-splitter" direction="horizontal" sizes={[50, 50]}>
        <C1 />
        <C2 />
      </Split>
    </div>
  );
}

function BottomHorizontal() {
  return (
    <div>
      <Split className="horizontal-splitter" direction="horizontal" sizes={[50, 50]}>
        <C1 />
        <C2 />
      </Split>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Split className="vertical-splitter" direction="vertical" sizes={[50, 50]}>
          <UpperHorizontal />
          <BottomHorizontal />
        </Split>
      </div>
    </div>
  );
}

export default App;
