import { useState } from 'react';
import { Button } from '../../../webComponents/Button/index.js';
import { Label } from '../../../webComponents/Label/index.js';
import { Text } from '../../../webComponents/Text/index.js';
import { FlexBox } from '../../FlexBox/index.js';
import { SplitterElement } from '../../SplitterElement/index.js';
import { SplitterLayout } from '../index.js';
import type { SplitterLayoutPropTypes } from '../types.js';

export const SplitterMoveResetTestComp = ({
  vertical,
  dir,
}: {
  vertical: SplitterLayoutPropTypes['vertical'];
  dir: string;
}) => {
  const [mount, setMount] = useState(false);
  const [dep, setDep] = useState(false);
  return (
    <SplitterLayout
      dir={dir}
      vertical={vertical}
      style={{ width: '100vw', height: '100vh' }}
      options={{ resetOnSizeChange: true, resetOnChildrenChange: true, resetOnCustomDepsChange: [dep] }}
    >
      <SplitterElement size="70%" data-testid="se1">
        <Label>Left</Label>
        <Button onClick={() => setMount(true)}>Add child</Button>
        <Button onClick={() => setDep(true)}>Trigger dep</Button>
      </SplitterElement>
      <SplitterElement size={mount ? '25%' : '30%'} data-testid="se2">
        <Label>Right</Label>
      </SplitterElement>
      {mount && (
        <SplitterElement size="5%" data-testid="se3">
          Additional Child
        </SplitterElement>
      )}
    </SplitterLayout>
  );
};

export const SplitterMultipleElementsTestComp = ({
  vertical,
  onBtnClick,
}: {
  vertical: boolean;
  onBtnClick?: () => void;
}) => {
  return (
    <SplitterLayout vertical={vertical} style={{ width: '800px', height: '800px' }} data-testid="sl">
      <SplitterElement size="200px" data-testid="se1">
        <Button data-testid="btn" onClick={onBtnClick}>
          Button 1
        </Button>
      </SplitterElement>
      <SplitterElement minSize={300} size={400} data-testid="se2">
        <Button>Button 2</Button>
      </SplitterElement>
      <SplitterElement resizable={false} data-testid="se3">
        <Button>Button 3</Button>
      </SplitterElement>
    </SplitterLayout>
  );
};

export const SplitterEmptyTestComp = () => {
  return <SplitterLayout data-testid="sl" />;
};

export const SplitterControlledTestComp = ({ vertical }: { vertical: boolean }) => {
  const [size0, setSize0] = useState('200px');
  const [size1, setSize1] = useState(200);
  const [size2, setSize2] = useState('auto');
  const [size3, setSize3] = useState('200px');
  const [resizeCount, setResizeCount] = useState(0);
  const setter = [setSize0, setSize1, setSize2, setSize3];
  return (
    <>
      <SplitterLayout
        vertical={vertical}
        style={{ height: '900px', width: '900px', backgroundColor: 'black' }}
        onResize={(e) => {
          setResizeCount((c) => c + 1);
          e.areas.forEach((item) => {
            if (item.area.dataset.index === '1') {
              setter[Number(item.area.dataset.index)](item.size);
            } else {
              // @ts-expect-error: supported
              setter[Number(item.area.dataset.index)](item.size + 'px');
            }
          });
        }}
      >
        <SplitterElement size={size0} data-index={0} style={{ backgroundColor: 'lightcoral' }}>
          <FlexBox style={{ height: '100%', width: '100%' }} alignItems="Center" justifyContent="Center">
            <Text>Content 1</Text>
          </FlexBox>
        </SplitterElement>
        <SplitterElement size={size1} data-index={1} style={{ backgroundColor: 'lightblue' }}>
          <FlexBox style={{ height: '100%', width: '100%' }} alignItems="Center" justifyContent="Center">
            <Text style={{ whiteSpace: 'pre-line' }}>{`Content 2
                  with
                  multi
                  lines`}</Text>
          </FlexBox>
        </SplitterElement>
        <SplitterElement size={'auto'} data-index={2} style={{ backgroundColor: 'lightgreen' }}>
          <FlexBox style={{ height: '100%', width: '100%' }} alignItems="Center" justifyContent="Center">
            <Text>
              Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
              sit amet.
            </Text>
          </FlexBox>
        </SplitterElement>
        <SplitterElement size={size3} data-index={3} style={{ backgroundColor: 'lightgoldenrodyellow' }}>
          <FlexBox style={{ height: '100%', width: '100%' }} alignItems="Center" justifyContent="Center">
            <Text>Content 4</Text>
          </FlexBox>
        </SplitterElement>
      </SplitterLayout>
      <span data-testid="0">{size0}</span>
      <br />
      <span data-testid="1">{size1}</span>
      <br />
      <span data-testid="2">{size2}</span>
      <br />
      <span data-testid="3">{size3}</span>
      <br />
      <span data-testid="resize-count">{resizeCount}</span>
    </>
  );
};
