function MyComponent({ name, color, ...otherProps }) {
  return (
    <div 
      style={{ color }}
      {...otherProps}
    >
      <h1>{`Hi my name is ${name}`}</h1>
    </div>
  )
}
