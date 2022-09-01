import { useState } from 'react'

export const ClickCounter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Incrment +</button>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement -</button>
    </div>
  )
}
