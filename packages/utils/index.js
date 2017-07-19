export const transformProps = (whitelist, rest) => Object.keys(whitelist)
  .reduce((props, propName) => {
    if (rest.hasOwnProperty(propName)) {
      return {
        ...props,
        ...whitelist[propName](rest[propName])
      }
    }
    return props
  }, {})
