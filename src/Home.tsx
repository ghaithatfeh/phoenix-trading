import { FacebookIcon, Instagram, Mail, Phone } from "lucide-react";
import Navbar from "./components/Navbar.tsx";

function Home() {
  return (
    <div className="h-full w-full">
      <div className={"bg-dark h-full w-full md:h-screen"}>
        {/* Navbar */}
        <Navbar />

        <div className={"mt-10 flex w-full items-end justify-between md:my-0"}>
          <div className={"w-full md:w-[60%]"}>
            <h1
              className={
                "text-primary !font-impact text-center text-4xl md:ps-26 md:text-start md:text-5xl"
              }
            >
              Welcome to Phoenix
            </h1>
            <p
              className={
                "my-10 px-5 text-center text-xl text-white md:ps-26 md:pe-16 md:text-start md:text-3xl"
              }
            >
              Your trusted partner for high-quality{" "}
              <strong>Arizona Food</strong> across the globe. We're passionate
              about bringing the finest ingredients and delicious flavors from
              our tables to yours.
            </p>

            <div
              className={
                "flex max-h-[20vh] w-full items-center justify-between px-5"
              }
            >
              <div className="hidden flex-col space-y-6 md:flex">
                <div className="from-primary h-2 w-20 rounded-r-full bg-gradient-to-r to-red-600"></div>
                <div className="from-primary h-2 w-20 rounded-r-full bg-gradient-to-r to-red-600"></div>
                <div className="from-primary h-2 w-20 rounded-r-full bg-gradient-to-r to-red-600"></div>
              </div>
              <img
                src={"/Logo-Phoenix.svg"}
                className="max-h-[40vh] w-1/4 object-contain pb-10 md:max-w-1/6"
                alt={"alameer co logo"}
              />
              <img
                src={"/03-Logo-Alameer.svg"}
                className="max-h-[40vh] w-1/2 object-contain md:max-w-full"
                alt={"alameer co logo"}
              />
              <img
                src={"/Logo-Arizona.svg"}
                className="max-h-[40vh] w-1/4 object-contain pb-10 md:max-w-1/6"
                alt={"alameer co logo"}
              />
            </div>
          </div>
          <div className={"hidden w-[40%] items-center justify-center md:flex"}>
            <img
              src={"/Logo-icon-Phoenix.svg"}
              className="flex max-h-[80vh] w-full justify-end"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center bg-[url('/05-Market-BG.jpg')] p-5 md:h-[35vh] md:p-24">
        <p className="text-center text-xl text-white md:text-3xl">
          Founded in 2015, <strong>Arizona Food</strong> has quickly become a
          trusted name in food manufacturing and distribution. Our success is
          built on a commitment to quality, reliability, and a deep appreciation
          for global culinary traditions.
        </p>
      </div>
      <div className={"bg-dark w-full"}>
        <div className={"flex w-full items-center justify-center py-20"}>
          <h1
            className={
              "text-primary !font-impact text-center text-4xl md:text-start md:text-5xl"
            }
          >
            Our Journey & Global Reach
          </h1>
        </div>
        <div className={"flex items-center justify-between md:px-26"}>
          <div className={"hidden md:block md:w-[38%]"}>
            <img src={"/06-Map.svg"} />
          </div>
          <div className={"w-full md:ms-18 md:w-[62%]"}>
            <p
              className={
                "px-5 text-center text-xl text-white md:px-0 md:text-3xl"
              }
            >
              From our beginnings in the Middle East in 2015, we expanded to
              Turkey in 2016, reached every corner of Canada by 2023, and
              proudly established our presence in Syria in 2024. Our journey
              reflects a steadfast commitment to excellence and the ability to
              serve diverse markets with confidence and care.
            </p>
          </div>
        </div>

        <div className={"my-10 flex items-center justify-center"}>
          <div className={"bg-primary h-2 w-[60%] rounded-md"}></div>
        </div>

        <div className={"flex w-full items-center justify-center py-10"}>
          <h1
            className={
              "text-primary !font-impact text-center text-4xl md:text-start md:text-5xl"
            }
          >
            Why Choose Arizona Food?
          </h1>
        </div>
        <div className={"flex flex-col items-start space-y-16 px-5 md:px-26"}>
          <div className={"flex items-center justify-between gap-2"}>
            <div
              className={
                "hidden h-full border-r-2 border-r-red-800 py-4 pe-5 md:block"
              }
            >
              <img src={"/07-icon.svg"} className={"w-20"} />
            </div>
            <div className={"ps-3 text-start"}>
              <h2
                className={
                  "rounded-sm border-b-2 border-b-red-800 py-4 text-3xl font-bold text-white md:border-b-0"
                }
              >
                Global Quality Standards:
              </h2>
              <p className={"text-xl text-white"}>
                We adhere to the strictest international standards in
                manufacturing and distribution, ensuring every product meets
                your expectations for safety and excellence.
              </p>
            </div>
          </div>

          <div className={"flex items-center justify-between gap-2"}>
            <div
              className={
                "hidden h-full border-r-2 border-r-red-800 py-4 pe-5 md:block"
              }
            >
              <img src={"/08-icon.svg"} className={"w-13"} />
            </div>
            <div className={"ps-3 text-start"}>
              <h2
                className={
                  "rounded-sm border-b-2 border-b-red-800 py-4 text-3xl font-bold text-white md:border-b-0"
                }
              >
                Diverse Product Range:
              </h2>
              <p className={"text-xl text-white"}>
                From staple ingredients to specialty items, our wide selection
                caters to varied tastes and culinary needs
              </p>
            </div>
          </div>

          <div className={"flex items-center justify-between gap-2"}>
            <div
              className={
                "hidden h-full border-r-2 border-r-red-800 py-4 pe-5 md:block"
              }
            >
              <img src={"/09-icon.svg"} className={"w-15"} />
            </div>
            <div className={"ps-3 text-start"}>
              <h2
                className={
                  "rounded-sm border-b-2 border-b-red-800 py-4 text-3xl font-bold text-white md:border-b-0"
                }
              >
                Reliable Partnership:
              </h2>
              <p className={"text-xl text-white"}>
                We pride ourselves on building strong, lasting relationships
                with our partners and customers, founded on transparency and
                efficiency.
              </p>
            </div>
          </div>

          <div className={"flex items-center justify-between gap-2"}>
            <div
              className={
                "hidden h-full border-r-2 border-r-red-800 py-4 pe-5 md:block"
              }
            >
              <img src={"/10-icon.svg"} className={"w-13"} />
            </div>
            <div className={"ps-3 text-start"}>
              <h2
                className={
                  "rounded-sm border-b-2 border-b-red-800 py-4 text-3xl font-bold text-white md:border-b-0"
                }
              >
                Commitment to Innovation:
              </h2>
              <p className={"text-2xl text-white"}>
                We constantly explore new tastes and production methods to bring
                you the best and most innovative food solutions.
              </p>
            </div>
          </div>
        </div>

        <div className={"flex items-center justify-center py-10"}>
          <div className={"bg-primary h-2 w-[60%] rounded-md"}></div>
        </div>

        <div className={"px-5 pb-10 md:px-26"}>
          <h1 className={"text-primary !font-impact mb-10 text-center md:text-start text-2xl md:text-3xl"}>
            Phoenix General Trading Inc
          </h1>
          <div className={"md:flex w-full space-y-10 md:space-y-0 items-center justify-between"}>
            <div
              className={"flex flex-col items-start justify-start space-y-6"}
            >
              <a
                href={"tel:+14372311444"}
                className={
                  "flex items-center gap-2 md:text-2xl text-white hover:underline"
                }
              >
                <img src={"/canada.png"} className={"w-8"} />
                <Phone className={"fill-primary text-primary"} />
                +1 (437) 231-1444
              </a>

              <a
                href={"tel:+905396931133"}
                className={
                  "flex items-center gap-2 md:text-2xl text-white hover:underline"
                }
              >
                <img src={"/turkey.png"} className={"w-8"} />
                <Phone className={"fill-primary text-primary"} />
                +90 539 693 11 33
              </a>

              <a
                href={"tel:+963937777960"}
                className={
                  "flex items-center gap-2 md:text-2xl text-white hover:underline"
                }
              >
                <img src={"/syria.png"} className={"w-8"} />
                <Phone className={"fill-primary text-primary"} />
                +963 937 777 960
              </a>
            </div>
            <div
              className={"flex flex-col items-start justify-start space-y-6"}
            >
              <a
                href={"mailto:Info@phoenixtradings.ca"}
                className={
                  "flex items-center gap-2 md:text-2xl text-white hover:underline"
                }
              >
                <Mail className={"text-primary"} />
                Info@phoenixtradings.ca
              </a>

              <a
                href={"https://www.instagram.com/ARIZONA1FOODS"}
                className={
                  "flex items-center gap-2 md:text-2xl text-white hover:underline"
                }
              >
                <Instagram className={"text-primary"} />
                ARIZONA1FOODS
              </a>
              <a
                href={"https://www.facebook.com/arizonafoods"}
                className={
                  "flex items-center gap-2 md:text-2xl text-white hover:underline"
                }
              >
                <FacebookIcon className={"text-primary"} />
                Arizonafoods
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
