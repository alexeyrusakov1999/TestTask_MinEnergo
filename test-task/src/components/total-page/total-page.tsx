import { FC } from 'react';
import { FirstChart } from '../first-chart/first-chart';
import { SecondChart } from '../second-chart/second-chart';

const TotalPage: FC = () => {
  return (
    <div >
      <FirstChart />
      <SecondChart />
    </div>
  );
};

export { TotalPage };
