import '../src/lib/style/main.css'
import { addDecorator } from '@storybook/react'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}

// Global Decorator
addDecorator((story) => {
  return <div className="text-body text-gray-90
  ">
    {story()}
  </div>
})