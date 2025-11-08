import { useState } from "react";

export function useBuscarServicoAgenda(){
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const buscarServico = async() => {
        setLoading(true)
        setError(null)

        try{
            const token = localStorage.getItem('token')
            const response = await fetch('http://localhost:3000/agenda/buscar/servico',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })

            if (!response.ok) {
                throw new Error('não foi possivel buscar esses dados');
            }
            
            const data = await response.json()
            return data
        }catch(e){
            setError("Erro ao buscar serviço")
            return null
        }finally{
            setLoading(false)
        }
    }
    return {buscarServico, loading, error}
}