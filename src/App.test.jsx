import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /Get started/i })).toBeInTheDocument()
  })

  it('increments the counter when clicked', async () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })
    await userEvent.click(button)
    expect(button).toHaveTextContent(/count is 1/i)
  })
})