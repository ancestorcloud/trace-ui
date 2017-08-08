import React from 'react'

export const TabList = ({
  children,
  activeIndex,
  onActivate,
}) =>
  <div>
    {React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        isActive: index === activeIndex,
        onClick: () => onActivate(index),
      })
    )}
  </div>

export const TabPanels = ({
  children,
  activeIndex
}) =>
  <div>
    {children[activeIndex]}
  </div>

export const Tabs = React.createClass({
  getInitialState() {
    return {
      activeIndex: 0
    }
  },

  render() {
    const {
      props: {
        children,
      },
      state: {
        activeIndex,
      }
    } = this

    return (
      <div>
        {React.Children.map(children, (child, index) =>
          child.type === TabPanels
            ? React.cloneElement(child, {
              activeIndex: activeIndex
            })
            : child.type === TabList
              ? React.cloneElement(child, {
                activeIndex: activeIndex,
                onActivate: (activeIndex) => this.setState({ activeIndex })
              })
              : child
        )}
      </div>
    )
  }
})
