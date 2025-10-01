import { FacebookIcon, Instagram, Mail, Phone } from "lucide-react";
import Navbar from "./components/Navbar.tsx";

function Home() {
  return (
    <>
      <div className={"bg-dark h-screen w-full"}>
        {/* Navbar */}
        <Navbar />

        <div className={"flex w-full items-center justify-between"}>
          <div className={"w-[60%]"}>
            <h1 className={"text-primary !font-impact ps-26 text-6xl"}>
              Welcome to Phoenix
            </h1>
            <p className={"my-10 ps-26 text-3xl text-white"}>
              Your trusted partner for high-quality Arizona food across the
              globe. We're passionate about bringing the finest ingredients and
              delicious flavors from our tables to yours.
            </p>

            <div className={"flex max-h-[20vh] items-center justify-between"}>
              <div className="flex flex-col space-y-6">
                <div className="from-primary h-2 w-20 rounded-r-full bg-gradient-to-r to-red-600"></div>
                <div className="from-primary h-2 w-20 rounded-r-full bg-gradient-to-r to-red-600"></div>
                <div className="from-primary h-2 w-20 rounded-r-full bg-gradient-to-r to-red-600"></div>
              </div>
              <img
                src={"/Logo-Phoenix.svg"}
                className="max-h-[40vh] max-w-1/6 object-contain pb-10"
                alt={"alameer co logo"}
              />
              <img
                src={"/03-Logo-Alameer.svg"}
                className="max-h-[40vh] max-w-full object-contain"
                alt={"alameer co logo"}
              />
              <img
                src={"/Logo-Arizona.svg"}
                className="max-h-[40vh] max-w-1/6 object-contain pb-10"
                alt={"alameer co logo"}
              />
            </div>
          </div>
          <div className={"flex w-[40%] items-center justify-center"}>
            <img
              src={"/Logo-icon-Phoenix.svg"}
              className="flex max-h-[80vh] w-full justify-end"
            />
          </div>
        </div>
      </div>
      <div className="flex h-[35vh] w-full items-center justify-center bg-[url('/05-Market-BG.jpg')] p-24">
        <p className="text-center text-3xl text-white">
          Founded in 2015, <strong>Arizona Food</strong> has quickly become a
          trusted name in food manufacturing and distribution. Our success is
          built on a commitment to quality, reliability, and a deep appreciation
          for global culinary traditions.
        </p>
      </div>
      <div className={"bg-dark w-full"}>
        <div className={"flex w-full items-center justify-center py-10"}>
          <h1 className={"text-primary !font-impact text-5xl"}>
            Our Journey & Global Reach
          </h1>
        </div>
        <div className={"flex items-center justify-between px-26"}>
          <div className={"w-[38%]"}>
            <img src={"/06-Map.svg"} />
          </div>
          <div className={"w-[62%]"}>
            <p className={"text-center text-4xl text-white"}>
              From our beginnings in the Middle East in 2015, we expanded to
              Turkey in 2016, reached every corner of Canada by 2023, and
              proudly established our presence in Syria in 2024. Our journey
              reflects a steadfast commitment to excellence and the ability to
              serve diverse markets with confidence and care.
            </p>
          </div>
        </div>

        <div className={"my-10 flex items-center justify-center"}>
          <div className={"h-2 w-[60%] rounded-md bg-red-600"}></div>
        </div>

        <div className={"flex w-full items-center justify-center py-10"}>
          <h1 className={"text-primary !font-impact text-5xl"}>
            Why Choose Arizona Food?
          </h1>
        </div>
        <div className={"flex flex-col items-start space-y-16 px-26"}>
          <div className={"flex items-center justify-between gap-2"}>
            <div className={"h-full border-r-2 border-r-red-800 py-4 pe-5"}>
              <img src={"/07-icon.svg"} className={"w-20"} />
            </div>
            <div className={"ps-3 text-start"}>
              <h2 className={"text-3xl font-bold text-white"}>
                Global Quality Standards:
              </h2>
              <p className={"text-2xl text-white"}>
                We adhere to the strictest international standards in
                manufacturing and distribution, ensuring every product meets
                your expectations for safety and excellence.
              </p>
            </div>
          </div>

          <div className={"flex items-center justify-between gap-2"}>
            <div className={"h-full border-r-2 border-r-red-800 py-4 pe-5"}>
              <img src={"/08-icon.svg"} className={"w-13"} />
            </div>
            <div className={"ps-3 text-start"}>
              <h2 className={"text-3xl font-bold text-white"}>
                Diverse Product Range:
              </h2>
              <p className={"text-2xl text-white"}>
                From staple ingredients to specialty items, our wide selection
                caters to varied tastes and culinary needs
              </p>
            </div>
          </div>

          <div className={"flex items-center justify-between gap-2"}>
            <div className={"h-full border-r-2 border-r-red-800 py-4 pe-5"}>
              <img src={"/09-icon.svg"} className={"w-15"} />
            </div>
            <div className={"ps-3 text-start"}>
              <h2 className={"text-3xl font-bold text-white"}>
                Reliable Partnership:
              </h2>
              <p className={"text-2xl text-white"}>
                We pride ourselves on building strong, lasting relationships
                with our partners and customers, founded on transparency and
                efficiency.
              </p>
            </div>
          </div>

          <div className={"flex items-center justify-between gap-2"}>
            <div className={"h-full border-r-2 border-r-red-800 py-4 pe-5"}>
              <img src={"/10-icon.svg"} className={"w-13"} />
            </div>
            <div className={"ps-3 text-start"}>
              <h2 className={"text-3xl font-bold text-white"}>
                Commitment to Innovation:
              </h2>
              <p className={"text-2xl text-white"}>
                We constantly explore new tastes and production methods to bring
                you the best and most innovative food solutions.
              </p>
            </div>
          </div>
        </div>

        <div className={"my-10 flex items-center justify-center"}>
          <div className={"h-2 w-[60%] rounded-md bg-red-600"}></div>
        </div>

        <div className={"px-26 pb-10"}>
          <h1 className={"text-primary !font-impact mb-10 text-start text-3xl"}>
            Phoenix General Trading Inc
          </h1>
          <div className={"flex w-full items-center justify-between"}>
            <div
              className={"flex flex-col items-start justify-start space-y-6"}
            >
              <div className={"flex items-center gap-2 text-2xl text-white"}>
                <img src={"/canada.png"} className={"w-8"} />
                <Phone className={"fill-primary text-primary"} />
                +1 (437) 231-1444
              </div>

              <div className={"flex items-center gap-2 text-2xl text-white"}>
                <img src={"/turkey.png"} className={"w-8"} />
                <Phone className={"fill-primary text-primary"} />
                +90 539 693 11 33
              </div>

              <div className={"flex items-center gap-2 text-2xl text-white"}>
                <img src={"/syria.png"} className={"w-8"} />
                <Phone className={"fill-primary text-primary"} />
                +963 937 777 960
              </div>
            </div>
            <div
              className={"flex flex-col items-start justify-start space-y-6"}
            >
              <div className={"flex items-center gap-2 text-2xl text-white"}>
                <Mail className={"text-primary"} />
                Info@phoenixtradings.ca
              </div>

              <div className={"flex items-center gap-2 text-2xl text-white"}>
                <Instagram className={"text-primary"} />
                ARIZONA1FOODS
              </div>
              <div className={"flex items-center gap-2 text-2xl text-white"}>
                <FacebookIcon className={"text-primary"} />
                Arizonafoods
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
