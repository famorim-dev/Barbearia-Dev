import Home from "../home/home"
import Login from "../registro/login/login"
import Registro from "../registro/registroUsuario/registro"
import EsqueceuSenha from "../registro/esqueceuSenha/esqueceuSenha"
import { PainelAdmin } from "../admin/homeAdmin/painelAdmin"

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
    },
    {
        path: '/app/admin',
        component: () => <PainelAdmin />
    }
]

export default rotas