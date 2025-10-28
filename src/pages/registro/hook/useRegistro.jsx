import { useState } from "react";

export function useRegistro(){
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const Registro = async(email, senha, nome) => {
        try{
            const response = await fetch('http://localhost:8080/auth/registro',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, senha, nome})
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