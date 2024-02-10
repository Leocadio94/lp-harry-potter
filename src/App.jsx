import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false);

        if (!data || !data?.length) {
          return;
        }

        setData(data);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Landing Page Harry Potter</h1>

        {loading ? (
          <p>Carregando...</p>
        ) : (
          <ul>
            {data.map((character) => (
              <li key={character.name}>
                <h2>{character.name}</h2>
                <p>{character.house}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
