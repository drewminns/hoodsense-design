import React from 'react';

import { storiesOf, setAddon } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../src/app/Components/Button/Button';
import Tag from '../src/app/Components/Tag/Tag';
import Card from '../src/app/Components/Card/Card';

storiesOf('Button')
  .addWithInfo(
    'Basic Button',
    () => (
      <Button handleClick={ action('Default Button Clicked') }>Hello Text</Button>
    )
  )
  .addWithInfo(
    'Text Button',
    () => (
      <Button asText theme='red' handleClick={ action('Default Button Clicked') }>Hello Text</Button>
    )
  )
  .addWithInfo(
    'Themed Button',
    () => (
      <div>
        <Button>Default Theme</Button>
        <Button theme='blue'>Blue Theme</Button>
        <Button theme='red'>Red Theme</Button>
        <Button theme='green'>Green Theme</Button>
        <Button theme='yellow'>Yellow Theme</Button>
        <Button theme='black'>Black Theme</Button>
      </div>
    )
  )
  .addWithInfo(
    'Themed Outlined Button',
    () => (
      <div>
        <Button isOutlined>Default Theme</Button>
        <Button theme='blue' isOutlined>Blue Theme</Button>
        <Button theme='red' isOutlined>Red Theme</Button>
        <Button theme='green' isOutlined>Green Theme</Button>
        <Button theme='yellow' isOutlined>Yellow Theme</Button>
        <Button theme='black' isOutlined>Black Theme</Button>
      </div>
    )
  )
  .addWithInfo(
    'Themed Full Button',
    () => (
      <div>
        <Button full>Default Theme</Button>
        <Button theme='blue' full>Blue Theme</Button>
        <Button theme='red' full>Red Theme</Button>
        <Button theme='green' full>Green Theme</Button>
        <Button theme='yellow' full>Yellow Theme</Button>
        <Button theme='black' full>Black Theme</Button>
      </div>
    )
  )
  .addWithInfo(
    'Themed Size Button',
    () => (
      <div>
        <Button size='small'>Default Theme</Button>
        <Button theme='blue' size='small'>Blue Theme</Button>
        <Button theme='red' size='small'>Red Theme</Button>
        <Button theme='green' size='small'>Green Theme</Button>
        <Button theme='yellow' size='small'>Yellow Theme</Button>
        <Button theme='black' size='small'>Black Theme</Button>
      </div>
    )
  )

storiesOf('Tag')
  .addWithInfo(
    'Tag Element with Theme',
    () => (
      <div>
        <Tag>Tag Title</Tag>
        <Tag theme='blue'>Tag Title</Tag>
        <Tag theme='red'>Tag Title</Tag>
        <Tag theme='green'>Tag Title</Tag>
        <Tag theme='yellow'>Tag Title</Tag>
        <Tag theme='black'>Tag Title</Tag>
      </div>
    )
  )
  .addWithInfo(
    'Tag Element with Inverted Theme',
    () => (
      <div>
        <Tag inverted>Tag Title</Tag>
        <Tag theme='blue' inverted>Tag Title</Tag>
        <Tag theme='red' inverted>Tag Title</Tag>
        <Tag theme='green' inverted>Tag Title</Tag>
        <Tag theme='yellow' inverted>Tag Title</Tag>
        <Tag theme='black' inverted>Tag Title</Tag>
      </div>
    )
  )

storiesOf('Card')
  .addWithInfo(
    'Card Component',
    () => (
      <Card
        title='This is a card title'
        subTitle='This is a card subtitle'
      >
        <p>Hello</p>
      </Card>
    )
  )
  .addWithInfo(
    'Card Component with Utility Info',
    () => (
      <Card
        title='This is a card title'
        subTitle='This is a card subtitle'
        utilData='Featured'
      >
        <p>Hello</p>
      </Card>
    )
  )
  .addWithInfo(
    'Card Component with Utility Info Theme',
    () => (
      <Card
        title='This is a card title'
        subTitle='This is a card subtitle'
        utilData='Featured'
        utilTheme='red'
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere minima ab repellat, blanditiis molestiae exercitationem sequi quisquam quia ipsam maxime, excepturi temporibus saepe atque porro modi illum consequuntur, natus assumenda.</p>
      </Card>
    )
  )