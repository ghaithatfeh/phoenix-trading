import {FacebookIcon, Instagram, Mail, Phone} from "lucide-react";

function App() {
    return (
        <>
            <div className={"relative h-screen w-full bg-black"}>
                {/* Navbar */}
                <div className={"flex items-center justify-center py-10"}>
                    <nav
                        className={"flex items-center gap-16 text-2xl font-bold text-white border-b-2 border-white pb-5"}>
                        <a href={"/"}
                           className={`${window.location.pathname == "/" ? "!text-red-700" : ""} hover:text-red-400`}>Home</a>
                        <a href={"/our-products"}
                           className={`${window.location.pathname == "/our-products" ? "!text-red-700" : ""} hover:text-red-400`}>Our
                            Products</a>
                        <a href={"/contact-us"}
                           className={`${window.location.pathname == "/contact-us" ? "!text-red-700" : ""} hover:text-red-400`}>Contact
                            Us</a>
                    </nav>
                </div>

                {/*  Site Logo  */}
                <div className={"absolute top-2 start-[8%]"}>
                    <img src={"/Logo-Phoenix.svg"} width={150} alt={"Site Logo"}/>
                </div>

                <div className={"flex items-center justify-between w-full"}>
                    <div className={"w-[60%]"}>
                        <h1 className={"text-6xl text-red-700 font-bold ps-26"}>
                            Welcome to Phoenix
                        </h1>
                        <p className={"text-white my-10 text-3xl ps-26"}>
                            your trusted partner for high-quality Arizona food
                            across the globe. We're passionate about bringing
                            the finest ingredients and delicious flavors from our
                            tables to yours.
                        </p>

                        <div className={"flex items-center justify-between max-h-[20vh]"}>
                            <div className="flex flex-col space-y-6">
                                <div className="h-2 w-20 rounded-r-full bg-gradient-to-r from-red-700 to-red-600"></div>
                                <div className="h-2 w-20 rounded-r-full bg-gradient-to-r from-red-700 to-red-600"></div>
                                <div className="h-2 w-20 rounded-r-full bg-gradient-to-r from-red-700 to-red-600"></div>
                            </div>
                            <img src={"/Logo-Phoenix.svg"} className="max-w-1/6 pb-10 max-h-[40vh] object-contain"
                                 alt={"alameer co logo"}/>
                            <img src={"/03-Logo-Alameer.svg"} className="max-w-full max-h-[40vh] object-contain"
                                 alt={"alameer co logo"}/>
                            <img src={"/Logo-Arizona.svg"} className="max-w-1/6 pb-10 max-h-[40vh] object-contain"
                                 alt={"alameer co logo"}/>
                        </div>

                    </div>
                    <div className={"w-[40%] flex items-center justify-center"}>
                        <img src={"/Logo-icon-Phoenix.svg"}
                             className="flex justify-end w-full max-h-[80vh]"/>
                    </div>
                </div>
            </div>
            <div className="relative w-full bg-red-600/80 h-[35vh]">
                <img
                    src="/05-Market-BG.jpg"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-fill mix-blend-multiply"
                />
                <div className="relative flex items-center justify-center z-10 p-18">
                    <p className="text-white text-3xl text-center">
                        Founded in 2015, <strong>Arizona Food</strong> has quickly become a trusted name in food
                        manufacturing and distribution. Our success is built on a commitment to quality, reliability,
                        and a deep appreciation for global culinary traditions.
                    </p>
                </div>
            </div>
            <div className={"w-full bg-black"}>
                <div className={"flex items-center justify-center py-10 w-full"}>
                    <h1 className={"text-5xl text-red-700 font-bold"}>Our Journey & Global Reach</h1>
                </div>
                <div className={"flex items-center justify-between px-26"}>
                    <div className={"w-[38%]"}>
                        <img src={"/06-Map.svg"}/>
                    </div>
                    <div className={"w-[62%]"}>
                        <p className={"text-white text-4xl text-center"}>
                            From our beginnings in the Middle East in 2015, we
                            expanded to Turkey in 2016, reached every corner of
                            Canada by 2023, and proudly established our presence in Syria in 2024. Our journey reflects
                            a steadfast commitment to excellence and the ability to
                            serve diverse markets with confidence and care.
                        </p>
                    </div>
                </div>

                <div className={"flex items-center justify-center my-10"}>
                    <div className={"h-2 w-[60%] bg-red-600 rounded-md"}></div>
                </div>

                <div className={"flex items-center justify-center py-10 w-full"}>
                    <h1 className={"text-5xl text-red-700 font-bold"}>Why Choose Arizona Food?</h1>
                </div>
                <div className={"flex flex-col items-start space-y-16 px-26"}>
                    <div className={"flex items-center justify-between gap-2"}>
                        <div className={"border-r-2 h-full border-r-red-800 pe-2 py-4"}>
                            <img src={"/07-icon.svg"} className={"w-20"}/>
                        </div>
                        <div className={"text-start"}>
                            <h2 className={"text-3xl font-bold text-white"}>
                                Global Quality Standards:
                            </h2>
                            <p className={"text-2xl text-white"}>
                                We adhere to the strictest international standards in manufacturing and distribution,
                                ensuring every product meets your expectations for safety and excellence.
                            </p>
                        </div>
                    </div>

                    <div className={"flex items-center justify-between gap-2"}>
                        <div className={"border-r-2 h-full border-r-red-800 pe-2 py-4"}>
                            <img src={"/08-icon.svg"} className={"w-13"}/>
                        </div>
                        <div className={"text-start"}>
                            <h2 className={"text-3xl font-bold text-white"}>
                                Diverse Product Range:
                            </h2>
                            <p className={"text-2xl text-white"}>
                                From staple ingredients to specialty items, our wide selection caters to varied
                                tastes and culinary needs
                            </p>
                        </div>
                    </div>

                    <div className={"flex items-center justify-between gap-2"}>
                        <div className={"border-r-2 h-full border-r-red-800 pe-2 py-4"}>
                            <img src={"/09-icon.svg"} className={"w-15"}/>
                        </div>
                        <div className={"text-start"}>
                            <h2 className={"text-3xl font-bold text-white"}>
                                Reliable Partnership:
                            </h2>
                            <p className={"text-2xl text-white"}>
                                We pride ourselves on building strong, lasting relationships with our partners and
                                customers, founded on transparency and efficiency.
                            </p>
                        </div>
                    </div>

                    <div className={"flex items-center justify-between gap-2"}>
                        <div className={"border-r-2 h-full border-r-red-800 pe-2 py-4"}>
                            <img src={"/10-icon.svg"} className={"w-13"}/>
                        </div>
                        <div className={"text-start"}>
                            <h2 className={"text-3xl font-bold text-white"}>
                                Commitment to Innovation:
                            </h2>
                            <p className={"text-2xl text-white"}>
                                We constantly explore new tastes and production methods to bring you the best
                                and most innovative food solutions.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={"flex items-center justify-center my-10"}>
                    <div className={"h-2 w-[60%] bg-red-600 rounded-md"}></div>
                </div>

                <div className={"px-26 pb-10"}>
                    <h1 className={"text-start text-3xl mb-10 text-red-700 font-bold"}>
                        Phoenix General Trading Inc
                    </h1>
                    <div className={"flex items-center justify-between w-full"}>
                        <div className={"flex flex-col items-start space-y-6 justify-start"}>
                            <div className={"text-white text-2xl flex items-center gap-2"}>
                                <img src={"/canada.png"} className={"w-8"}/>
                                <Phone className={"text-red-700 fill-red-700"}/>
                                +1 (437) 231-1444
                            </div>

                            <div className={"text-white text-2xl flex items-center gap-2"}>
                                <img src={"/turkey.png"} className={"w-8"}/>
                                <Phone className={"text-red-700 fill-red-700"}/>
                                +90 539 693 11 33
                            </div>

                            <div className={"text-white text-2xl flex items-center gap-2"}>
                                <img src={"/syria.png"} className={"w-8"}/>
                                <Phone className={"text-red-700 fill-red-700"}/>
                                +963 937 777 960
                            </div>
                        </div>
                        <div className={"flex flex-col items-start space-y-6 justify-start"}>
                            <div className={"text-white text-2xl  flex items-center gap-2"}>
                                <Mail className={"text-red-700"}/>
                                Info@phoenixtradings.ca
                            </div>

                            <div className={"text-white text-2xl  flex items-center gap-2"}>
                                <Instagram className={"text-red-700"}/>
                                ARIZONA1FOODS
                            </div>
                            <div className={"text-white text-2xl  flex items-center gap-2"}>
                                <FacebookIcon className={"text-red-700"}/>
                                Arizonafoods
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
