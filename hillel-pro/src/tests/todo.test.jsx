import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import { describe, test, expect } from 'vitest'

describe('TODO app', () => {
  
  test('1. Отображается заголовок TODO', () => {
    render(<App />)
    expect(screen.getByText('TODO')).toBeInTheDocument()
  })

  test('2. Можно вводить цифры и буквы в input', async () => {
    render(<App />)

    const input = screen.getByPlaceholderText('Enter todo')

    await userEvent.type(input, 'abc123')
    expect(input).toHaveValue('abc123')
  })

  test('3. Ошибка при добавлении пустого todo', async () => {
    render(<App />)

    const button = screen.getByText('Додати')
    await userEvent.click(button)

    expect(screen.getByText('Поле не может быть пустым')).toBeInTheDocument()
  })

  test('4. Добавляется новый элемент в список', async () => {
    render(<App />)

    const input = screen.getByPlaceholderText('Enter todo')
    const button = screen.getByText('Додати')

    await userEvent.type(input, 'Buy milk')
    await userEvent.click(button)

    expect(screen.getByText('Buy milk')).toBeInTheDocument()
  })

  test('5. После добавления input очищается', async () => {
    render(<App />)

    const input = screen.getByPlaceholderText('Enter todo')
    const button = screen.getByText('Додати')

    await userEvent.type(input, 'Hello')
    await userEvent.click(button)

    expect(input).toHaveValue('')
  })
})