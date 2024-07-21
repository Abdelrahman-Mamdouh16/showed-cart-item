import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className='mt-auto bg-gray-900 text-gray-100'>
            <section className="py-10 sm:pt-12 lg:pt-18">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-12">
                        <div>
                            <p className="text-base text-gray-500">Company</p>
                            <ul className="mt-8 space-y-4">
                                <li>
                                    <Link href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80">About</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80">Features</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80">Works</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80">Career</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-base text-gray-500">Help</p>
                            <ul className="mt-8 space-y-4">
                                <li>
                                    <Link href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80">Customer Support</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80">Delivery Details</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80">Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-base text-gray-500">Resources</p>
                            <ul className="mt-8 space-y-4">
                                <li>
                                    <Link href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80">Free eBooks</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80">Development Tutorial</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80">How to - Blog</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80">YouTube Playlist</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-base text-gray-500">Extra Links</p>
                            <ul className="mt-8 space-y-4">
                                <li>
                                    <Link href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80">Customer Support</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80">Delivery Details</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80">Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-base text-white transition-all duration-200 hover:text-opacity-80">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr className="my-16 border-gray-800" />

                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <img
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/logo-alt.svg"
                            alt="Logo"
                            width={128}
                            height={32}
                            className="h-8"
                        />

                        <div className="mt-8 md:mt-0 text-center text-sm text-gray-400">
                            <p>&copy; 2024 Abdelrahman Mamdouh. All rights reserved.</p>
                        </div>

                        <ul className="flex space-x-3 mt-8 md:mt-0">
                            <li>
                                <Link href="#" className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 hover:bg-blue-600 hover:border-blue-600 focus:bg-blue-600 focus:border-blue-600">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                                    </svg>
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 hover:bg-blue-600 hover:border-blue-600 focus:bg-blue-600 focus:border-blue-600">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                    </svg>
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 hover:bg-blue-600 hover:border-blue-600 focus:bg-blue-600 focus:border-blue-600">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                        <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                        <path d="M20.533 6.111A4.605 4.605 0 0 0 16.58 5.62c-.67-.123-1.331.145-1.84.623-.148.08-.275.166-.415.251-.154.092-.292.205-.417.326-.084.095-.145.188-.184.307-.044.121-.07.246-.077.373-.005.136-.036.274-.082.405a4.721 4.721 0 0 0-.007 1.253c.061.27.16.537.296.782.1.195.2.388.322.578.046.075.097.147.146.22a4.619 4.619 0 0 0 1.45.989c.626.12 1.257.072 1.84-.15a4.548 4.548 0 0 0 1.272-.748c.08-.075.167-.16.243-.237.272-.229.49-.488.674-.778.152-.281.23-.594.247-.91.018-.359.017-.719-.029-1.075a4.602 4.602 0 0 0-.777-2.188z"></path>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>


                </div>
            </section>
        </footer>
    );
}
