import React, { useState, useEffect } from "react";
import api from './services/api'

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data)
    })
  }, [])

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      title: `Projeto Novos Conceitos ${Date.now()}`,
	    url: "https://github.com/claudiojsantos/desafio-conceitos-nodejs.git",
	    techs: ["tech 1", "tech 2"]
    })

    const repo = response.data

    setRepositories([...repositories, repo])
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
          {repositories.map(repo => (
            <li>
              {repo.title}
          
              <button onClick={() => handleRemoveRepository(1)}>
                Remover
              </button>
            </li>
          ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
