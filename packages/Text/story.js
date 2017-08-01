import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Text, Action, Title, Alert, Heading, Label, P } from './index'

storiesOf('Text', module).add('text', () => (
  <div>
    <Text color='tertiary' size='tiny'>Tiny</Text>
    <Text color='primary' size='small'>Small</Text>
    <Text color='secondary' size='medium'>Medium</Text>
    <Text color='alert' size='large'>Large</Text>
    <Text color='accent' size='giant'>Giant</Text>
  </div>
)).add('action', () => (
  <div>
    <Action>Where the Red Fern Grows</Action>
    <div>
      <Action onClick={action('Action')}>click me</Action>
    </div>
    <div>
      <Action onClick={action('Action')} passive>click me</Action>
    </div>
    <div>
      <Action onClick={action('Action')} alert>click me</Action>
    </div>
  </div>
)).add('alert', () => (
  <Alert>Where the Red Fern Grows</Alert>
)).add('label', () => (
  <div>
    <Label>Default Label</Label>
    <div style={{ width: '400px' }}>
      <Label type='urgent' head='Urgent Label'>
        I have a 400px wide container
      </Label>
    </div>
    <Label type='passive' head='Passive label'>900 & 300, 15PX</Label>
    <Label type='urgent'>
      Respond to your helper's proposals by clicking stuff
    </Label>
  </div>
)).add('title', () => (
  <div>
    <Title>Where the Red Fern Grows</Title>
    <Title color='lightPrimary'>Where the Red Fern Grows</Title>
    <Title color='lightestGray'>Where the Red Fern Grows</Title>
    <Title color='accent'>Where the Red Fern Grows</Title>
  </div>
)).add('heading', () => (
  <div>
    <Heading level={1}>
      Header 1
    </Heading>
    <Heading level={2}>
      Header 2
    </Heading>
    <Heading level={3}>
      Header 3
    </Heading>
    <Heading level={4}>
      Header 3
    </Heading>
    <Heading level={5}>
      Header 4
    </Heading>
  </div>
)).add('paragraph', () => (
  <div>
    <P>
      Lorem Khaled Ipsum is a major key to success. The key to success is to keep your head above the water, never give up. The first of the month is coming, we have to get money, we have no choice. It cost money to eat and they don’t want you to eat. Egg whites, turkey sausage, wheat toast, water. Of course they don’t want us to eat our breakfast, so we are going to enjoy our breakfast. Wraith talk. The key to more success is to get a massage once a week, very important, major key, cloth talk. I’m up to something. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up, I’m just getting started.
    </P>
    <Label>Compact:</Label>
    <P compact>
      Lorem Khaled Ipsum is a major key to success. The key to success is to keep your head above the water, never give up. The first of the month is coming, we have to get money, we have no choice. It cost money to eat and they don’t want you to eat. Egg whites, turkey sausage, wheat toast, water. Of course they don’t want us to eat our breakfast, so we are going to enjoy our breakfast. Wraith talk. The key to more success is to get a massage once a week, very important, major key, cloth talk. I’m up to something. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up, I’m just getting started.
    </P>
  </div>
))
