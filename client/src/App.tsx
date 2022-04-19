import { useState } from 'react'
import './App.css'
import axios from './helpers/axios'


function App() {
  const [name, setName] = useState('Mohsin')
  const [email, setEmail] = useState('mohsinejaz@mailinator.com')
  const [password, setPassword] = useState('1234')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(name, email, password)
    register({ name, email, password })
  }

  async function register(payload: any) {
    const { data } = await axios.post({ payload, url: '/auth/register' })
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
