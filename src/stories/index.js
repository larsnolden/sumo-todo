/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { StyleRoot } from 'radium';

let rootStyle = {
  base: {
    fontFamily: 'Roboto',
    fontWeight: 300
  }
}


//Demo Button
import Button from './Button';

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);


//Task
import TaskComponent from '../task/taskComponent';

storiesOf('Task', module)
  .add('undone', () => <StyleRoot style={rootStyle.base}><TaskComponent title={'buy 3 hamsters'} done={false} onRemove={() => { }} /></StyleRoot>)
  .add('done', () => <StyleRoot style={rootStyle.base}><TaskComponent title={'buy 3 hamsters'} done={true} onRemove={() => { }} /></StyleRoot>)


//Task
import ListComponent from '../list/listComponent';

storiesOf('Task', module)
  .add('gertrudes todo list', () => (
    <StyleRoot style={rootStyle.base}>
      <ListComponent>
        <TaskComponent title={'buy 3 hamsters'} done={false} onRemove={() => { }} />
        <TaskComponent title={'clean hamster cage'} done={true} onRemove={() => { }} />
        <TaskComponent title={'clean hamster cage'} done={true} onRemove={() => { }} />
        <TaskComponent title={'clean hamster cage'} done={true} onRemove={() => { }} />
        <TaskComponent title={'clean hamster cage'} done={true} onRemove={() => { }} />
        <TaskComponent title={'clean hamster cage'} done={true} onRemove={() => { }} />
      </ListComponent>
    </StyleRoot>
  )
  )

//Input
import InputComponent from '../input/inputComponent';

storiesOf('Input', module)
  .add('base', () => (
    <StyleRoot style={rootStyle.base}>
      <InputComponent active={true} />
    </StyleRoot>
  )
  )

//Add Button
import AddButtonComponent from '../input/addButtonComponent';

storiesOf('AddButton', module)
  .add('base', () => (
    <StyleRoot style={rootStyle.base}>
      <AddButtonComponent />
    </StyleRoot>
  )
  )