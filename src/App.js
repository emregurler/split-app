import './App.scss';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header, Content } from 'layout';
import { Contracts, SplitPositionLogger, AddableForm, LoremIpsum } from 'containers';
import { Split } from 'components';
import { setSplitSize } from 'store/slices/split-sizes';

function SplitContainer({ children }) {
  return <div className="splitContainer">{children}</div>;
}

function App() {
  const dispatch = useDispatch();

  const { verticalSizes, upperHorizontalSizes, bottomHorizontalSizes } = useSelector(
    (state) => state.splitSizeReducer
  );

  useEffect(() => {
    const sizes = JSON.parse(localStorage.getItem('split-sizes'));
    if (sizes) {
      Object.entries(sizes).forEach(([name, sizes]) => {
        dispatch(setSplitSize({ name, sizes }));
      });
    }
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <Content>
        <Split name="vertical" direction="vertical" sizes={verticalSizes}>
          <div>
            <Split
              name="upperHorizontal"
              direction="horizontal"
              sizes={upperHorizontalSizes}
              minSize={400}
            >
              <SplitContainer>
                <Contracts />
              </SplitContainer>
              <SplitContainer>
                <SplitPositionLogger />
              </SplitContainer>
            </Split>
          </div>
          <div>
            <Split
              minSize={400}
              name="bottomHorizontal"
              direction="horizontal"
              sizes={bottomHorizontalSizes}
            >
              <SplitContainer>
                <AddableForm />
              </SplitContainer>
              <SplitContainer>
                <LoremIpsum />
              </SplitContainer>
            </Split>
          </div>
        </Split>
      </Content>
    </div>
  );
}

export default App;
