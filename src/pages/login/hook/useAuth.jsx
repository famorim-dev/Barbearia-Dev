import { useState } from "react";

export function useAuth(){
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const login = async(email, senha) => {
        try{
            const response = await fetch('http://localhost:8080/auth/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, senha})
            })

            const data = await response.json()

            if(!response.ok){
                throw new Error(data.message || 'erro no login')
            }

            localStorage.setItem('token', data.token)

            return data
        }catch(e){
            setError(e.message)
        }finally{
            setLoading(false)
        }
    }
    return {login, loading, error}
}