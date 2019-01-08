import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import TrendChart from "../component/trend_chart/TrendChart";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

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
