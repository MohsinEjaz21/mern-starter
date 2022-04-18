import axios from 'axios'
import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(name, email, password)
    register({ name, email, password })
  }

  async function register(payload: any) {
    const response = await axios({
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
      url: 'http://localhost:1337/api/register',
      data: payload
    })
    const data = response.data;
    console.log(data)
  }

  return (
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" autoComplete="false" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
        <input type="email" autoComplete="false" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
        <input type="password" autoComplete="false" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default App
