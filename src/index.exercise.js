import React from 'react'
import {useState} from 'react'
import {Logo} from 'components/logo'
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'
import {createRoot} from 'react-dom/client'

function App() {
  const [openModal, setOpenModal] = useState('none')

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>
      <Dialog aria-label="Login from" isOpen={openModal === 'login'}>
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
        </div>
        <h3>Login</h3>
      </Dialog>
      <Dialog aria-label="Registration from" isOpen={openModal === 'register'}>
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
        </div>
        <h3>Register</h3>
      </Dialog>
    </div>
  )
}
const root = document.getElementById('root')
createRoot(root).render(<App />)
