import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import bot from "../assets/bot.png";

export default function Dashboard() {
    return (
        <Layout>
            <div className="flex flex-col space-y-10 justify-center items-center">
                <div className="flex gap-2 justify-between items-center">
                    <div className="flex gap-2 justify-start items-center">
                        <img src={bot} alt="Imagem bot" className="h-12 -rotate-6" />
                        <h2 className="text-3xl font-bold text-indigo-950">Seja Bem Vinda(a) <span className="text-orange-500 font-extrabold">Leticia</span>!</h2>
                    </div>
                    <Link to="/" className="w-28 text-white text-xl rounded-md bg-indigo-950 p-2 hover:scale-105 hover:text-orange-400 text-center">Voltar</Link>
                </div>

                <iframe 
                    title="Acompanhamento_de_Gastos" 
                    width="400" 
                    height="600" 
                    className="border"
                    src="https://app.powerbi.com/view?r=eyJrIjoiYmE3MTU4ZmMtOWIzOC00NDY4LWJmMzMtMTQ4MjY3ZWJlMTVjIiwidCI6Ijg1ODlkOThmLWQwODQtNDRjYS04OWZlLThiOGZmNmJjNDZhMyJ9" 
                    allowFullScreen
                ></iframe>
            </div>
        </Layout>
    );
}
