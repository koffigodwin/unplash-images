import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Content  from './Content.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
 const newquery = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Content>
      <QueryClientProvider client={newquery}>
            
      <React.StrictMode>
       <App />
      </React.StrictMode>
     
      </QueryClientProvider>
  </Content>
  ,
)
