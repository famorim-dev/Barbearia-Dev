import { useState } from "react";

export function useRegistro(){
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const Registro = async(email_usuario, senha_usuario, nome_usuario) => {
        try{
            const response = await fetch('http://localhost:3000/auth/cadastrar',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email_usuario, senha_usuario, nome_usuario})
            })

            const data = await response.json()

            if(!response.ok){
                throw new Error(data.message || 'erro no login')
            }

            return data
        }catch(e){
            setError(e.message)
        }finally{
            setLoading(false)
        }
    }
    return {Registro, loading, error}
}