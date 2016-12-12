import React from 'react'
import { withPropsFromContext } from 'react-context-props'

const themeable = (adapter) => (Target) => {
  const ThemeableComponent = withPropsFromContext(
    ({ customizations, ...props }) => (
      <Target
        {...{
          ...props,
          ...customizations ? adapter(customizations, props) : {}
        }}
      />
    ),
    ['customizations']
  )

  ThemeableComponent.displayName = Target.displayName || Target.name

  return ThemeableComponent
}

export default themeable
