import '../src/lib/style/main.css'
import { addDecorator } from '@storybook/react'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  status: {
    statuses: {
      alpha: {
        text: 'alpha',
        color: '#fff',
        background: '#666666',
        description: 'This is an alpha feature',
      },
      beta: {
        text: 'beta',
        background: '#f6d55c',
        color: '#ffffff',
        description: 'This is a beta release',
      },
      rc: {
        text: 'release candidate',
        background: '#1A74D9',
        color: '#ffffff',
        description: 'This component is under active development',
      },
      stable: {
        text: 'stable',
        background: '#36A55C',
        color: '#ffffff',
        description: 'This component is stable',
      },
    },
  },
}

// Global Decorator
addDecorator((story) => {
  return <div className="text-body text-gray-80 mx-auto w-max" >
    {story()}
  </div>
})