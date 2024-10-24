import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useRef} from 'react';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [firstName, setFirstName] = useLocalStorage("firstName", "");
  const firstNameRef = useRef();

  function addName() {
    const currentName = firstNameRef.current.value;
    setFirstName(currentName);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Localstorage hook</h1>
      <div className="card">
        <input ref={firstNameRef} type="text" name="name" id="name" />
        <button onClick={addName}>
          submit
        </button>
        <p>
          {firstName}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
