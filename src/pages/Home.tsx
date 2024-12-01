import Layout from "../components/Layout";
import bot from "../assets/bot.png";
import { Link } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import { PiMoneyWavyBold } from "react-icons/pi";

export default function Home() {
    const cards = [
        {id: 1, title: "Formulario", link: "/form", icon: <PiMoneyWavyBold  size={70} color="#f97316"/>},
        {id: 2, title: "Dashboards", link: "/dash", icon: <RiDashboardFill size={70} color="#f97316" />},
    ]
    return(
        <Layout>
            <div className="py-10 px-5 md:px-10 flex flex-col gap-10">

                <div className="flex gap-2 justify-between items-center">
                    <div className="flex gap-2 justify-start items-center">
                        <img src={bot} alt="Imagem bot" className="h-12 -rotate-6" />
                        <h2 className="text-3xl font-bold text-indigo-950">Seja Bem Vinda(a) <span className="text-orange-500 font-extrabold">Leticia</span>!</h2>
                    </div>
                    <Link to="/login" className="w-28 text-white text-xl rounded-md bg-indigo-950 p-2 hover:scale-105 hover:text-orange-400 text-center">Sair</Link>
                </div>

                <div className="flex justify-center items-center space-x-5">
                    {
                        cards.map((card) => (
                                <Link key={card.id} to={card.link} className="flex justify-center items-center flex-col text-center m-auto h-[30vh] w-2/3 md:1/4 rounded-md bg-indigo-950 text-white text-xl hover:scale-105 hover:bg-indigo-950/90 hover:transition-colors">{card.icon} {card.title}</Link>
                        ))
                    }
                </div>

            </div>

        </Layout>
    )
}