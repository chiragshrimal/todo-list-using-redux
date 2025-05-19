import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// jis trh context api m pass karte the taki child m bhi access ho jaye 
// usi trh redux m bhi hota hai 
import {Provider} from "react-redux"
import store from './store.js'

createRoot(document.getElementById('root')).render(
  // provider take store prop 
  <Provider store={store}>
      <App />
  </Provider>
  
)
