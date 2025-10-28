import Home from "../home/home"
import Login from "../login/login"
import Registro from "../registro/registro"

const rotas = [
    {
        path: '/*',
        component: () => <Home />
    },
    {
        path: '/login',
        component: () => <Login />
    },
    {
        path: '/registro',
        component: () => <Registro />
    }
]

export default rotas