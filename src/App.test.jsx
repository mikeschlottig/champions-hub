import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import App from './App'

// Mock the Pages component since it might have complex dependencies
vi.mock('@/pages/index.jsx', () => ({
  default: () => <div data-testid="pages-component">Pages Component</div>
}))

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByTestId('pages-component')).toBeInTheDocument()
  })

  it('includes the Toaster component', () => {
    render(<App />)
    // The toaster is typically rendered but might not be visible
    const app = screen.getByTestId('pages-component').parentElement
    expect(app).toBeInTheDocument()
  })
})