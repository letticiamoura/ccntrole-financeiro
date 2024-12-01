import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";

export default function Header() {
    return(
        <header className="py-2 w-full fixed bg-indigo-950 flex justify-center items-center rounded-br-[50px]">
            <Link to="/login">
                <img src={logo2} alt="Logo Finances" className="h-20 object-cover" />
            </Link>
            <h1 className="text-4xl text-orange-300/90 font-extrabold">Finances</h1>
        </header>
    )
}