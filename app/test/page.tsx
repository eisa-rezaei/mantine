'use client';

import React from 'react';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';

const Row = ({ style, data, index }: ListChildComponentProps) => (
  <div style={style}>{data[index]}</div>
);

const TestPage = () => {
  const arr = Array.from({ length: 1000 }, (_, i) => `${i + 1} hello`);

  return (
    <div>
      <div className="font-bold">
        <h3>react window </h3>
        <p>this package is for virtualizing the content </p>
      </div>
      <List itemData={arr} height={150} itemCount={arr.length} itemSize={35} width={300}>
        {Row}
      </List>
    </div>
  );
};

export default TestPage;
