import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
    return(
        <footer className="py-2 w-full bg-indigo-950 relative bottom-0 rounded-tl-[50px]">
            <div className="flex items-center justify-center space-x-5">
                <FaGithub size={25} color="#f97316"  className="hover:scale-110 cursor-pointer"/>
                <FaLinkedin size={25} color="#f97316"  className="hover:scale-110 cursor-pointer"/>
                <FaInstagram size={25} color="#f97316" className="hover:scale-110 cursor-pointer"/>
            </div>
            <p className="italic text-center text-orange-400/80 py-2">&copy;Leticia Moura Lopes Soares - 2024</p>
        </footer>
    )
}