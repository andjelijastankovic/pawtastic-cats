import Link from "next/link";
import Image from "next/image";
import Footer from "@component/components/Footer";

export default function About() {
    return (
        <div className="flex min-h-screen flex-col gap-y-5 mb-10">
            <div className="flex flex-wrap flex-col md:flex-row justify-center md:justify-around lg:justify-around items-center gap-x-5 bg-white w-full py-1 px-3 drop-shadow-lg">
                <Link href="/">
                    <Image src="/logo-removed-bg.png" alt="logo" width={250} height={110} />
                </Link>
                <div className="flex gap-x-8 gap-y-2 flex-col md:flex-row justify-center md:justify-between items-center mx-5 py-3">
                    <Link href="/adopt" className="hover:underline decoration-red-500 decoration-2 underline-offset-4">Adopt Cats</Link>
                    <Link href="/shop" className="hover:underline decoration-red-500 decoration-2 underline-offset-4">Our shop</Link>
                </div>
            </div>

            <div className="py-1 px-3 mb-5">
                <h1 className="text-2xl md:text-4xl font-bold mb-3 text-center md:text-left">Who we are?</h1>

                <div className="flex flex-wrap flex-col items-center justify-center gap-y-5 md:gap-x-5">
                    <div>
                        <p className="whitespace-break-spaces">
                            We are a cat protection society located in Niš, composed of passionate cat lovers.
                            Our goal is to provide safety, care, and love to abandoned, lost, or sick cats.
                        </p>
                        <p className="whitespace-break-spaces text-justify">
                            We are dedicated to rescuing, sterilizing, and healing as many cats as possible.
                            Our immense love for cats inspires us to actively strive towards creating a happy and healthy environment
                            for these beautiful creatures.
                        </p>

                        <p className="whitespace-break-spaces text-justify">
                            We closely collaborate with veterinarians, the local community, and other organizations to ensure the necessary medical care, sterilization, and vaccination for cats in need. Additionally, we regularly organize adoption campaigns, aiming to find suitable homes for our feline friends.
                            In addition to cat welfare, we conduct educational programs that promote responsible ownership and provide information about the importance of cat sterilization and neutering. Our aim is to raise awareness about the significance of cat protection and advocate for humane treatment.
                        </p>

                        <p className="whitespace-break-spaces text-justify">
                            Pawtastic Cats is a society driven by compassion and dedication, working towards the betterment of cats' lives. Through our efforts, we aspire to create a compassionate community that cherishes and protects these amazing animals.
                        </p>
                    </div>
                    
                    <div className="flex flex-col items-center md:flex-row md:gap-x-5 md:items-center">
                        <Image src="/pexels-photo-6397911.jpeg" width={300} height={600} alt="street-cat" className="w-96 block rounded-lg bg-blend-hard-light"/>
                        <div className="flex flex-col items-center md:flex-col md:gap-x-5 md:items-start">
                            <div>
                                <h1 className="text-2xl md:text-4xl font-bold mt-3 mb-5 text-center md:text-left">How to help us?</h1>
                            </div>

                            <div className="flex flex-col gap-y-10">
                                <div>
                                    <p>
                                        Here you can see some of our cats ready for adoption
                                    </p>
                                    <button type="button" className="w-full focus:outline-none text-white bg-red-500 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-5">
                                        <Link href="/adopt">Adopt</Link>
                                    </button>
                                </div>
                                
                                <div>
                                    <p>Buy something from our shop and make your donation</p>
                                    <button type="button" className="w-full focus:outline-none text-white bg-red-500 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-5">
                                        <Link href="/shop">Donate</Link>
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}