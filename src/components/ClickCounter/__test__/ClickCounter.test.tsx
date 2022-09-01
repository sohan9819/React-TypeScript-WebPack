import { fireEvent, render, screen } from '@testing-library/react'
import { ClickCounter } from '../ClickCounter'

test('Render ClickCounter Component', () => {
  render(<ClickCounter />)
  screen.getByText('Count : 0')
})

test('Incrementing Couter. Default Count=0 , then Counter=1', () => {
  render(<ClickCounter />)
  fireEvent.click(screen.getByRole('button', { name: 'Incrment +' }))
  expect(screen.getByText('Count : 1')).toBeInTheDocument()
})

test('Decrementing Counter. Default Count=0 , then Counter=-1', () => {
  render(<ClickCounter />)
  fireEvent.click(screen.getByRole('button', { name: 'Decrement -' }))
  expect(screen.getByText('Count : -1')).toBeInTheDocument()
})
