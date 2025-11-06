import Home from "../home/home"
import Login from "../registro/login/login"
import Registro from "../registro/registroUsuario/registro"
import EsqueceuSenha from "../registro/esqueceuSenha/esqueceuSenha"
import { PainelAdmin } from "../admin/homeAdmin/painelAdmin"

import { RequerAuth } from "../../middleware/requerAuth"
import Agendamento from "../agendamento/agendamento"

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
        component: () => <RequerAuth> <PainelAdmin /> </RequerAuth>
    },
    {
        path: '/app/agendar',
        component: () => <Agendamento />
    }
]

export default rotas