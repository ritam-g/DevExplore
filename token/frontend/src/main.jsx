
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import routes from './routes/AppRoutes.jsx'
import { Provider } from 'react-redux'
import store from './app/store.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}><RouterProvider router={routes} /></Provider>

)
