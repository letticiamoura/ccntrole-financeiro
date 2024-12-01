import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Register() {
    return(
        <Layout>
           <div className="px-5 md:px-10">
            
                <h2 className="text-3xl font-medium text-indigo-950">Crie sua conta <br /> no <strong className="text-orange-500 font-extrabold text-4xl">Finances</strong></h2>
                <div className="sm:w-[65vw] m-auto">
                    <form className="px-5 pt-14 flex flex-col space-y-5">

                        <label
                            htmlFor="name"
                            className="text-slate-900 font-medium text-2xl"
                        >
                            Primeiro Nome
                            <input
                            id="name"
                            type="text"
                            required
                            placeholder="Seu primeiro nome..."
                            title="Digite o seu nome"
                            className="text-lg font-normal p-1.5 w-full border border-indigo-950 rounded-lg"
                            />
                        </label>

                        <label
                            htmlFor="lastname"
                            className="text-slate-900 font-medium text-2xl"
                        >
                            Sobrenome
                            <input
                            id="lastname"
                            type="text"
                            required
                            placeholder="Seu sobrenome"
                            title="Digite o seu sobrenome"
                            className="text-lg font-normal p-1.5 w-full border border-indigo-950 rounded-lg"
                            />
                        </label>

                        <label
                            htmlFor="email"
                            className="text-slate-900 font-medium text-2xl"
                        >
                            Email
                            <input
                            id="email"
                            type="email"
                            required
                            placeholder="email@email.com"
                            className="text-lg font-normal p-1.5 w-full border border-indigo-950 rounded-lg"
                            />
                        </label>

                        <label
                            htmlFor="password"
                            className="text-slate-900 font-medium text-2xl"
                        >
                            Senha
                            <input
                            id="password"
                            type="password"
                            required
                            placeholder="**********"
                            className="text-lg font-normal p-1.5 w-full border border-indigo-950 rounded-lg"
                            />
                        </label>
                        
                        <Link to="/" className="p-3 w-full text-center bg-indigo-950 rounded-md text-xl text-white hover:text-orange-500">
                            Cadastrar
                        </Link>

                    </form>

                </div>
           </div>
        </Layout>
    )
}