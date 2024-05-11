import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import useRModel from './customHooks/useRModel';
import TextBox from './components/TextBox';

function App() {
  // rModel example start
  const newCount = useRModel(0);

  const handleNewCountChange = () => {
    // Use .value for updating
    newCount.value += 1;
    // Get updated value instantly in .value
    console.log(
      'Get updated value instantly in .value',
      newCount.value,
      newCount.state
    );
  };
  // rModel example end

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* rModel example start */}
      <div className="card">
        {/* Send rModel object to TextBox, it will have two way binding, no separate updation required */}
        <TextBox
          rModel={newCount}
          className="block full-width mb-10"
          type="number"
        />
        <button onClick={handleNewCountChange}>
          {/* Use .state for rendering */}
          count is {newCount.state}
        </button>
        <p>rModel example</p>
      </div>
      {/* rModel example end */}

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
