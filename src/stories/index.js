/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

//Demo Button
import Button from './Button';

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);


//Task
import TaskComponent from '../task/taskComponent';

storiesOf('Task', module)
  .add('undone', () => <TaskComponent title={'buy 3 hamsters'} done={false} onRemove={() => {}} />)
  .add('done', () => <TaskComponent title={'buy 3 hamsters'} done={true} onRemove={() => {}} />)