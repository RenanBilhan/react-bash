
import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [ transactions, setTransactions ] = useState([]);

  const fetchTransactions = async() => {
    const response = await axios.get("http://localhost:8080/transacoes");
    setTransactions(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    fetchTransactions();
  }, [])
  return(
    <>
      <div>
        <h1>Importação de CNAB</h1>
      </div>
      <div>
        <span>Choose file</span>
        <input type="file" accept=".txt"/>
        <button>Upload</button>
      </div>

      <div>
        <h2>Transações</h2>
        <ul>
          <li>
            <table>
              <thead>
                <tr>
                  <th>Cartão</th>
                  <th>CPF</th>
                  <th>Data</th>
                  <th>Dono da Loja</th>
                  <th>Hora</th>
                  <th>Nome da Loja</th>
                  <th>Tipo</th>
                  <th>Valor</th>
                </tr>
              </thead>
            </table>
          </li>
        </ul>
      </div>
    </>  
  )
}

export default App
