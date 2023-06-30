import Image from "next/image";
import Link from "next/link";

export default function Landing() {
    return (
        <div>
            <div className="flex flex-nowrap flex-col justify-center items-center text-center md:flex-row md:justify-center md:text-left w-full gap-x-5 px-3">
                <div>
                    <Image src="/the-lucky-neko-2JcixB1Ky3I-unsplash.jpg" alt="kittens" width={450} height={400} className="rounded-lg bg-blend-hard-light" />
                </div>

                <div className="w-96">
                    <h1 className="text-2xl md:text-4xl font-bold mt-3 mb-3">Pawtastic Cats Rescue</h1>
                    <p className="text-black leading-normal text-justify font-medium whitespace-pre-line">
                        Pawtastic Cats is a cat protection society based in Niš, Serbia.
                        Our passionate team is committed to rescuing, sterilizing, and finding
                        loving homes for abandoned and sick cats.
                        Join us in creating a brighter future for these wonderful feline companions.
                    </p>
                    <button type="button" className="focus:outline-none text-white bg-red-500 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-5">
                        <Link href="/about">Read more</Link>
                    </button>
                </div>
            </div>

            <div>
                <h1 className="text-2xl md:text-4xl font-bold text-center mt-5">Our stats</h1>
                <div className="flex flex-wrap justify-center mt-1 mb-10">
                    {/* card-1  */}
                    <div className="p-4 max-w-sm text-center md:w-1/3">
                        <div className="flex justify-center items-center rounded-lg h-full bg-red-500 p-8 flex-col">
                            <a href="https://www.flaticon.com/free-stickers/wool" title="wool stickers" className="pointer-events-none">
                                <Image src="/wool.png" alt="cat-icon" width={100} height={100} className="mb-2" />
                            </a>
                            <h2 className="text-black font-bold text-2xl">500+</h2>
                            <p className="leading-relaxed text-base text-white">happy cat owners</p>
                        </div>
                    </div>

                    {/* card-2 */}
                    <div className="p-4 max-w-sm text-center md:w-1/3">
                        <div className="flex justify-center items-center rounded-lg h-full bg-red-500 p-8 flex-col">
                            <a href="https://www.flaticon.com/free-stickers/veterinary" title="veterinary stickers" className="pointer-events-none">
                                <Image src="/adoption.png" alt="cat-adopt" width={100} height={100} className="mb-2" />
                            </a>
                            <h2 className="text-black font-bold text-2xl">17</h2>
                            <p className="leading-relaxed text-base text-white">adoption campaigns</p>
                        </div>
                    </div>

                    {/* card-3  */}
                    <div className="p-4 max-w-sm text-center md:w-1/3">
                        <div className="flex justify-center items-center rounded-lg h-full bg-red-500 p-8 flex-col">
                            <a href="https://www.flaticon.com/free-stickers/veterinary" title="veterinary stickers" className="pointer-events-none"> 
                                <Image src="/veterinarian.png" alt="cat-vet" width={100} height={100} className="mb-2" />
                            </a>
                            <h2 className="text-black font-bold text-2xl">1200+</h2>
                            <p className="leading-relaxed text-base text-white">neutered cats</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}