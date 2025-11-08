
export default function NotFound(){
    return(
        <main className="grid min-h-full place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 relative bg-center bg-no-repeat bg-cover h-screen w-full" style={{ backgroundImage: `linear-gradient(to bottom, rgba(6, 18, 30, 0.4), #06121e), url(https://thumbs.dreamstime.com/b/polo-do-barbeiro-no-fundo-da-parede-de-tijolo-velha-conceito-barber-shop-127517277.jpg)`, opacity: 0.9}}>
            <div className="text-center">
                <p className="text-base font-semibold text-indigo-400">404</p>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">Pagina não encontrada</h1>
                <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">Desculpe, não conseguimos encontrar a página que você está procurando.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a href="/" className="text-sm font-semibold text-white">Volte para pagina<span aria-hidden="true">&rarr;</span></a>
                </div>
            </div>
        </main>
    )
}