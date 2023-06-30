import Link from "next/link";
import Image from "next/image";
import Footer from "@component/components/Footer";

export default function Shop() {
    return (
        <div className="flex min-h-screen flex-col gap-y-3 mb-10">
            <div className="flex flex-wrap flex-col md:flex-row justify-center md:justify-around lg:justify-around items-center gap-x-5 bg-white w-full py-1 px-3 drop-shadow-lg">
                <Link href="/">
                    <Image src="/logo-removed-bg.png" alt="logo" width={250} height={110} />
                </Link>
                <div className="flex gap-x-8 gap-y-2 flex-col md:flex-row justify-center md:justify-between items-center mx-5 py-3">
                    <Link href="/about" className="hover:underline decoration-red-500 decoration-2 underline-offset-4">About us</Link>
                    <Link href="/adopt" className="hover:underline decoration-red-500 decoration-2 underline-offset-4">Adopt cats</Link>
                </div>
            </div>

            <div className="py-1 px-3 mx-auto mb-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Image className="rounded-t-lg w-full object-contain" src="/pexels-coppertist-wu-15569343.jpg" width={200} height={200} alt="cat-adopt" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">15$</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Cat figurine for Incense Stick
                            </p>
                            <button className="focus:outline-none text-white bg-red-500 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-5">Donate now</button>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Image className="rounded-t-lg w-full object-contain" src="/pexels-photo-1717673.jpeg" width={200} height={200} alt="cat-adopt" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">20$</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Cat figurine
                            </p>
                            <button className="focus:outline-none text-white bg-red-500 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-5">Donate now</button>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Image className="rounded-t-lg w-full object-contain" src="/pexels-nika-benedictova-10081073.jpg" width={200} height={200} alt="cat-adopt" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">20$</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Wooden cat figurine
                            </p>
                            <button className="focus:outline-none text-white bg-red-500 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-5">Donate now</button>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Image className="rounded-t-lg w-full object-contain" src="/pexels-david-yu-10914510.jpg" width={200} height={200} alt="cat-adopt" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">50$</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Cat tree
                            </p>
                            <button className="focus:outline-none text-white bg-red-500 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-5">Donate now</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}