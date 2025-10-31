import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


// const reactElement = {
//     type : 'a',
//     props : {
//         href : 'https://gooogle.com',
//         target : '_blank'
//     },
//     children : 'Cick me to visi google'
// };
 
const anotherUser = " Abhilash"

const reactElement = React.createElement(
    'a',
    {
      href : "http://google.com",
      target : '_blank',
    },
    'click me to visit',
    anotherUser
)

const anotheElement = (
  <a href="htpp://google.com" target='_blank'> visit google</a>
)

createRoot(document.getElementById('root')).render(
  
    reactElement
    // <App/>
  
)
