import Home from "../home/home"
import Login from "../login/login"
import Registro from "../registro/registro"
import EsqueceuSenha from "../esqueceuSenha/esqueceuSenha"

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
    },
    {
        path: '/esqueceu-senha',
        component: () => <EsqueceuSenha />
    }
]

export default rotas