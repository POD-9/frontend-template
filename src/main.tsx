import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// product provider
import { ProductProvider } from './context/ProductsContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ProductProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </ProductProvider>
)
