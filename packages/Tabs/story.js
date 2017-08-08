import React from 'react'
import { storiesOf } from '@kadira/storybook'
import {Tabs, TabList, TabPanels} from './index'

storiesOf('Tabs', module)
  .add('style 1', () => {
    const Tab = ({
      onClick,
      isDisabled,
      isActive,
      children,
    }) => {
      const tabStyles = {
        display: 'inline-block',
        padding: 10,
        margin: 10,
        borderBottom: '4px solid',
        borderBottomColor: '#ccc',
        cursor: 'pointer'
      }

      const styles = {
        tab: tabStyles,

        activeTab: {
          ...tabStyles,
          borderBottomColor: '#000',
        },

        disabledTab: {
          ...tabStyles,
          opacity: 0.25,
          cursor: 'default',
        }
      }

      return (
        <div {...{
          onClick: isDisabled ? null : onClick,
          style: isDisabled
            ? styles.disabledTab
            : isActive
              ? styles.activeTab
              : styles.tab,
        }}>{children}</div>
      )
    }

    const TabPanel = ({children}) =>
      <div>{children}</div>

    return (
      <Tabs>
        <TabList>
          <Tab>JavaScript</Tab>
          <Tab>Haskell</Tab>
          <Tab isDisabled>Elm</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{`JavaScript (/ˈdʒɑːvəˌskrɪpt/[6]), often abbreviated as JS, is a high-level, dynamic, weakly typed, object-based, multi-paradigm, and interpreted programming language. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production. It is used to make webpages interactive and provide online programs, including video games. The majority of websites employ it, and all modern web browsers support it without the need for plug-ins by means of a built-in JavaScript engine. Each of the many JavaScript engines represent a different implementation of JavaScript, all based on the ECMAScript specification, with some engines not supporting the spec fully, and with many engines supporting additional features beyond ECMA.`}</TabPanel>
          <TabPanel>{`Haskell /ˈhæskəl/[27] is a standardized, general-purpose purely functional programming language, with non-strict semantics and strong static typing.[28] It is named after logician Haskell Curry.[1] The latest standard of Haskell is Haskell 2010. As of May 2016, a group is working on the next version, Haskell 2020.[29]`}</TabPanel>
          <TabPanel>{`Elm is a domain-specific programming language for declaratively creating web browser-based graphical user interfaces. Elm is purely functional, and is developed with emphasis on usability, performance, and robustness. It advertises "no runtime exceptions in practice,"[4] made possible by the Elm compiler's static type checking.`}</TabPanel>
        </TabPanels>
      </Tabs>
    )
  })
  .add('style 2', () => {
    const Tab = ({
      onClick,
      isDisabled,
      isActive,
      children,
    }) => {
      const tabStyles = {
        display: 'inline-block',
        padding: 10,
        margin: 10,
        cursor: 'pointer',
      }

      const styles = {
        tab: tabStyles,

        activeTab: {
          ...tabStyles,
          borderRadius: '3px',
          backgroundColor: '#ddd',
        },

        disabledTab: {
          ...tabStyles,
          opacity: 0.25,
          cursor: 'default',
        }
      }

      return (
        <div {...{
          onClick: isDisabled ? null : onClick,
          style: isDisabled
            ? styles.disabledTab
            : isActive
              ? styles.activeTab
              : styles.tab,
        }}>{children}</div>
      )
    }

    const TabPanel = ({children}) =>
      <div>{children}</div>

    return (
      <Tabs>
        <TabPanels>
          <TabPanel>{`JavaScript (/ˈdʒɑːvəˌskrɪpt/[6]), often abbreviated as JS, is a high-level, dynamic, weakly typed, object-based, multi-paradigm, and interpreted programming language. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production. It is used to make webpages interactive and provide online programs, including video games. The majority of websites employ it, and all modern web browsers support it without the need for plug-ins by means of a built-in JavaScript engine. Each of the many JavaScript engines represent a different implementation of JavaScript, all based on the ECMAScript specification, with some engines not supporting the spec fully, and with many engines supporting additional features beyond ECMA.`}</TabPanel>
          <TabPanel>{`Haskell /ˈhæskəl/[27] is a standardized, general-purpose purely functional programming language, with non-strict semantics and strong static typing.[28] It is named after logician Haskell Curry.[1] The latest standard of Haskell is Haskell 2010. As of May 2016, a group is working on the next version, Haskell 2020.[29]`}</TabPanel>
          <TabPanel>{`Elm is a domain-specific programming language for declaratively creating web browser-based graphical user interfaces. Elm is purely functional, and is developed with emphasis on usability, performance, and robustness. It advertises "no runtime exceptions in practice,"[4] made possible by the Elm compiler's static type checking.`}</TabPanel>
        </TabPanels>
        <TabList>
          <Tab>JavaScript</Tab>
          <Tab>Haskell</Tab>
          <Tab isDisabled>Elm</Tab>
        </TabList>
      </Tabs>
    )
  })
