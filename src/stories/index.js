import React from 'react';

import { storiesOf } from '@storybook/react';
import TrendChart from "../component/trend_chart/TrendChart";
import Welcome from "../component/welcome/Welcome";

storiesOf('Welcome', module).add('index', () => <Welcome/>);

storiesOf('TrendChart', module)
  .add('chart (positive)', () => <TrendChart
    data={[12, 20, 37, 14, 34, 41]}
    width={400}
    height={400}
  />)
    .add('chart (negative)', () => <TrendChart
        data={[12, 20, 37, 14, 34, 41].reverse()}
        width={400}
        height={400}
    />);
