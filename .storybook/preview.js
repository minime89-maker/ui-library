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
  return <div className="text-body text-gray-80 w-full mx-auto md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/3" >
    {story()}
  </div>
})