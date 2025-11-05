import { useState } from "react";

export function useAuth(){
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const login = async(email_usuario, senha_usuario) => {
        setLoading(true)
        setError(null)

        try{
            const response = await fetch('http://localhost:3000/auth/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email_usuario, senha_usuario})
            })

            const text = await response.text()

            if(!response.ok){
                throw new Error(data.message || 'erro no login')
            }

            localStorage.setItem('token', text)

            return text
        }catch(e){
            setError(e.message)
            return null
        }finally{
            setLoading(false)
        }
    }
    return {login, loading, error}
}