import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import routes from "./config/routes"
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Auth0Provider } from "@auth0/auth0-react";

function App() {


  return (
    <Auth0Provider
    domain="dev-tc0fdgng3f30p02b.us.auth0.com"
    clientId="NJP89afu6FUUDJ4jwbty1NwIAeeJb2lL"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <BrowserRouter>
    <Sidebar />
        <Provider store={store}>
          <Routes>
            { routes.map((route, index) =>(
              <Route
                key={index}
                path={route.path}
                element={
                  <route.component />
                }
                />
            ))}
          </Routes>
          </Provider>
    </BrowserRouter>
    </Auth0Provider>
  )
}

export default App
