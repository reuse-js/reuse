import { Meta, Story } from '@storybook/react/types-6-0'

import { useReuse } from '../dist'

export default {
  title: 'example',
  component: <div>add a component</div>
} as unknown as Meta

type keys = {
  fraude: string
}

export const Example: Story = () => {
  const { createState, changeState, state } = useReuse<keys>()

  console.log(state, 'ok')

  return (
    <button
      onClick={() =>
        changeState('fraude', {
          data: [],
          process: {
            _id: 1,
            name: 'process test'
          }
        })
      }
    >
      example
    </button>
  )
}
