import React from 'react';

const dumpdata = [
  {
    value: 'Concept',
    depth: 2,
  },
  {
    value: '1. GSC',
    depth: 2,
  },
  {
    value: 'Secret',
    depth: 3,
  },
  {
    value: '2. Wordpress',
    depth: 2,
  },
  {
    value: 'wordpress-cloudsql.yaml',
    depth: 3,
  },
  {
    value: 'wordpress-service.yaml',
    depth: 3,
  },
  {
    value: '추후 진행해야하는 부분',
    depth: 3,
  },
  {
    value: 'etc. code push',
    depth: 2,
  },
];

interface Props {
  value: string;
  depth: number;
}

const TOC = () => (
  <div>
    {dumpdata.map(({ value, depth }: Props) => (
      <div>
        <div>{value}</div>
        <div>{depth}</div>
      </div>
    ))}
  </div>
);

export default TOC;
