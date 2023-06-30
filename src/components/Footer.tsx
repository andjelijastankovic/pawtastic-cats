import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare  } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="fixed bottom-0 flex flex-row justify-center bg-red-500 w-full py-1 px-3">
            <div className="flex gap-x-8 flex-row justify-center md:justify-between items-center py-1 mx-5">
                <Link href="/"> <FaFacebookSquare /> </Link>
                <Link href="/"> <FaInstagramSquare /> </Link>
                <Link href="/"> <FaWhatsappSquare /> </Link>
            </div>
        </div>
    );
}