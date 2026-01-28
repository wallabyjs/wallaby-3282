// Simple button component logic for browser testing
export interface ButtonProps {
  label: string
  onClick?: () => void
  disabled?: boolean
}

export const createButton = (props: ButtonProps): HTMLButtonElement => {
  const button = document.createElement('button')
  button.textContent = props.label
  button.disabled = props.disabled ?? false

  if (props.onClick) {
    button.addEventListener('click', props.onClick)
  }

  return button
}

export const renderButton = (
  container: HTMLElement,
  props: ButtonProps
): HTMLButtonElement => {
  const button = createButton(props)
  container.appendChild(button)
  return button
}
