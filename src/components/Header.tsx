import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <div className="flex flex-wrap flex-col md:flex-row justify-center md:justify-around lg:justify-around items-center gap-x-5 bg-white w-full py-1 px-3 drop-shadow-lg">
            <Link href="/">
                <Image src="/logo-removed-bg.png" alt="logo" width={250} height={110}/>
            </Link>
            <div className="flex gap-x-8 gap-y-2 flex-col md:flex-row justify-center md:justify-between items-center mx-5 py-3">
                <Link href="/about" className="hover:underline decoration-red-500 decoration-2 underline-offset-4">About us</Link>
                <Link href="/adopt" className="hover:underline decoration-red-500 decoration-2 underline-offset-4">Adopt Cats</Link>
                <Link href="/shop" className="hover:underline decoration-red-500 decoration-2 underline-offset-4">Our Shop</Link>
            </div>
        </div>
    )
}