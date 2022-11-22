export const ValidationError = ({message, isHidden}) => {
  return (
    !isHidden && <div style={{ color: 'red' }}>{message}</div>
  )
}