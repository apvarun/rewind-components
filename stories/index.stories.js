import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import { Button, Card, Avatar, Chip, List, ListItem, Divider, Radio, NavBar } from '../components'

import userImg from './user.jpg'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Card', module)
  .add('with text', () => <Card>Hello Card</Card>)
  .add('with text and image', () => <Card image={userImg}>Hello Card</Card>);

storiesOf('Avatar', module)
  .add('circular', () => <Avatar image={userImg} />)
  .add('with rounded border', () => <Avatar rounded image={userImg} />);

storiesOf('Chip', module)
  .add('with text', () => <Chip>I'm a Chip</Chip>)
  .add('with text and close icon', () => <Chip onClose={action('Chip Closed')}>I'm a Chip</Chip>);

storiesOf('List', module)
  .add('with text', () => (
    <List>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
    </List>
  ))
  .add('with text and divider', () => (
    <List>
      <ListItem>Item 1</ListItem>
      <Divider />
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </List>
  ));

storiesOf('Radio', module)
  .add('default', () => (
    <div>
      <Radio name="radio-1">Radio 1</Radio>
      <Radio name="radio-1">Radio 2</Radio>
    </div>
  ));

storiesOf('NavBar', module)
  .add('default', () => (
    <NavBar>
      Content
    </NavBar>
  ))
  .add('primary', () => (
    <NavBar primary>
      Content
    </NavBar>
  ))
  .add('dark', () => (
    <NavBar dark>
      Content
    </NavBar>
  ));
