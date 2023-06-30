import Link from "next/link";
import Image from "next/image";
import Footer from "@component/components/Footer";

export default function Adopt() {
    return (
        <div className="flex min-h-screen flex-col gap-y-3 mb-10">
            <div className="flex flex-wrap flex-col md:flex-row justify-center md:justify-around lg:justify-around items-center gap-x-5 bg-white w-full py-1 px-3 drop-shadow-lg">
                <Link href="/">
                    <Image src="/logo-removed-bg.png" alt="logo" width={250} height={110} />
                </Link>
                <div className="flex gap-x-8 gap-y-2 flex-col md:flex-row justify-center md:justify-between items-center mx-5 py-3">
                    <Link href="/about" className="hover:underline decoration-red-500 decoration-2 underline-offset-4">About us</Link>
                    <Link href="/shop" className="hover:underline decoration-red-500 decoration-2 underline-offset-4">Our shop</Link>
                </div>
            </div>

            <div className="py-1 px-3 mx-auto mb-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Image className="rounded-t-lg w-full object-contain" src="/pexels-natalie-bond-16587655.jpg" width={200} height={200} alt="cat-adopt" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ginger</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Sweet Ginger is 8 month old indoor cat. He's very active and playful, adoooores to cuddle. 
                            </p>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Image className="rounded-t-lg w-full object-contain" src="/pexels-linken-van-zyl-16648734.jpg" width={200} height={200} alt="cat-adopt" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Missy</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Missy is 1 year old sweet girl. She is very shy, but loves to cuddle and purr like an engine when she loosens up.
                            </p>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Image className="rounded-t-lg w-full object-contain" src="/pexels-ann-bugaichuk-16555882.jpg" width={200} height={200} alt="cat-adopt" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mr Shadow</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                6 month old, his name is Mr Shadow because he loves to hide around the house.
                            </p>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Image className="rounded-t-lg w-full object-contain" src="/pexels-anya-juárez-tenorio-16622431.jpg" width={200} height={200} alt="cat-adopt" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Blue</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Sweet, cuddling, adorable Blue is waiting for his true friends and home for too long. Reach for us and adopt Blue!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}