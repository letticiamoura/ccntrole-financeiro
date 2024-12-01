import Layout from "../components/Layout";

import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Layout>
      <div className="sm:w-[65vw] m-auto">
        
        <form className="px-5 pt-14 flex flex-col space-y-5">
          <div className="flex items-center justify-center ">
            <img
              src={logo}
              alt="Logo Finances"
              className="h-36 object-cover absolute -z-10 opacity-50"
            />
            <h3 className="text-center text-3xl text-slate-900 font-bold">
              Faça login na sua <br /> conta{" "}
              <span className="text-orange-500 font-extrabold">Finances</span>
            </h3>
          </div>

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

          <p className="text-slate-900">Não tem conta? <Link to="/register" className="text-orange-500 cursor-pointer font-bold hover:scale-105">Criar conta</Link></p>

          <Link to="/" className="p-3 w-full text-center bg-indigo-950 rounded-md text-xl text-white hover:text-orange-500">
              Entrar
            </Link>

        </form>

      </div>

    </Layout>

  );
}
