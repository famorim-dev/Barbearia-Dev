import logo from '../../../assets/logo.svg'

import { useState } from 'react'
import { useRegistro } from './hook/useRegistro'
import { useNavigate } from 'react-router-dom'
import ToastError from '../../../components/toast/toastError'


function Registro(){
    const [email_usuario, setEmail] = useState('')
    const [senha_usuario, setSenha] = useState('')
    const [nome_usuario, setNome] = useState('')
    const {Registro, loading, erro} = useRegistro()
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = await Registro(email_usuario, senha_usuario, nome_usuario)
        if(user){
            navigate("/login")
        }else{
            setToastMessage('Email ou senha Invalidos')
            setShowToast(true)

            setTimeout(() => setShowToast(false), 3000)
            }
        }
    return(
      <>      
        <div className="bg-home flex flex-col min-h-screen w-full justify-center px-6 py-12 lg:px-8 items-center">
            <div className='flex justify-end items-end w-full'>
                <ToastError message={toastMessage} show={showToast}/>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="barber dev"
                    src={logo}
                    className="mx-auto h-13 w-auto not-dark:hidden"
                />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
                    Entre na sua conta
                </h2>
            </div>

            <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            value={email_usuario}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                                senha
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            autoComplete="current-password"
                            value={senha_usuario}
                            onChange={(e) => setSenha(e.target.value)}
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                                nome
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                            id="name"
                            name="name"
                            type="name"
                            required
                            autoComplete="current-password"
                            value={nome_usuario}
                            onChange={(e) => setNome(e.target.value)}
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                        >
                            {loading ? 'Registrando...' : 'Registrar'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
export default Registro