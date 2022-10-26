import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { useTranslation, Trans } from "react-i18next";

function App() {
  const [count, setCount] = useState(0)

  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p><Trans i18nKey="welcomeToReact">Teste</Trans></p>
        <h2>{t(`welcomeToReact`)}</h2>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
