import React, {useState, useEffect} from 'react'

function HookCounter() {

  // Array destructuring
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');



  useEffect(() => {
    console.log('doc title')
    document.title = `You clicked ${count} times`
  },[count])

  return (
    <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
      <button onClick={() => setCount(count+1)}>Count Hook - {count}</button>
    </div>
  )
}

export default HookCounter
