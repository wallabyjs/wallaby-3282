// Simple input component logic for browser testing
export interface InputProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  type?: 'text' | 'password' | 'email'
}

export const createInput = (props: InputProps): HTMLInputElement => {
  const input = document.createElement('input')
  input.type = props.type ?? 'text'
  input.placeholder = props.placeholder ?? ''
  input.value = props.value ?? ''

  if (props.onChange) {
    input.addEventListener('input', (e) => {
      props.onChange!((e.target as HTMLInputElement).value)
    })
  }

  return input
}

export const renderInput = (
  container: HTMLElement,
  props: InputProps
): HTMLInputElement => {
  const input = createInput(props)
  container.appendChild(input)
  return input
}
