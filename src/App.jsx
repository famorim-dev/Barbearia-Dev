import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Fragment } from 'react'
import rotas from './pages/utils/rotas'

function App() {

  return (
      <BrowserRouter>
        <Fragment>
          <Routes>
            {rotas.map(({ path, component }) => (
              <Route key={path} path={path} element={component()} />
            ))}
          </Routes>
        </Fragment>
      </BrowserRouter>
  )
}

export default App
