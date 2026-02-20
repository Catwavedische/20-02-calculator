import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState(100)

  useEffect(() => {
    console.log(`Текущее значение счетчика: ${result}`)
  }, [result])


  useEffect(() => {
    console.log(`Страница открыта/обновлена: `, new Date().toString())
  }, [])

  return (
    <>
      <h1>Calculator</h1>

      <div>Current value is {result}</div>

      <div className="calculatorButtons">
        
        <button onClick={() => setResult(result + 5)}>
          + 5
        </button>
        <button onClick={() => setResult(result - 5)}>
          - 5
        </button>
        <button onClick={() => setResult(result * 5)}>
          * 5
        </button>
        <button onClick={() => setResult(result / 5)}>
          \ 5
        </button>
        <button onClick={() => setResult(100)}>
          Сброс
        </button>
      </div>
      <div className='footer'>
        <h3>
          Кондурова Мария
        </h3>
        <p>
          Группа 3834504/20001
        </p>
      </div>
      
    </>
  )
}

export default App
