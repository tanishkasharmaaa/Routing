import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Post } from './components/Post.jsx'
import { Put } from './components/Put.jsx'
import { Patch } from './components/Patch.jsx'
import { Delete } from './components/Delete.jsx'
import { Param } from './components/Params.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Post/>
    <Put/>
    <Patch/>
    <Delete/>
    <Param/>
  </>,
)
