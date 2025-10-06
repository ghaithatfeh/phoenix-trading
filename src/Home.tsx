import { FacebookIcon, Instagram, Mail, Phone } from "lucide-react";
import Navbar from "./components/Navbar.tsx";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
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
              {t("welcome")}
            </h1>
            <p
              className={
                "my-10 px-5 text-center text-xl text-white md:ps-26 md:pe-16 md:text-start md:text-3xl"
              }
            >
              {t("welcomeDescription")}
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
              className="flex max-h-[80vh] w-full scale-x-[-1] justify-end rtl:transform"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center bg-[url('/05-Market-BG.jpg')] p-5 md:h-[35vh] md:p-24">
        <p className="text-center text-xl text-white md:text-3xl">
          {t("foundedIn2015")}
        </p>
      </div>
      <div className={"bg-dark w-full"}>
        <div className={"flex w-full items-center justify-center py-20"}>
          <h1
            className={
              "text-primary !font-impact text-center text-4xl md:text-start md:text-5xl"
            }
          >
            {t("ourJourneyTitle")}
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
              {t("ourJourney")}
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
            {t("whyChooseUs")}
          </h1>
        </div>
        <div className={"flex flex-col items-start space-y-16 px-5 md:px-26"}>
          <div className={"flex w-full items-center justify-between gap-2"}>
            <div
              className={
                "hidden h-full w-[7%] border-e-2 border-e-red-800 py-4 pe-5 md:block"
              }
            >
              <img src={"/07-icon.svg"} className={"w-full"} />
            </div>
            <div className={"w-[93%] ps-3 text-start"}>
              <h2
                className={
                  "rounded-sm border-b-2 border-b-red-800 py-4 text-3xl font-bold text-white md:border-b-0"
                }
              >
                {t("globalQualityStandards")}:
              </h2>
              <p className={"text-xl text-white"}>
                {t("globalQualityStandardsDescription")}
              </p>
            </div>
          </div>

          <div className={"flex w-full items-center justify-between gap-2"}>
            <div
              className={
                "hidden h-full w-[7%] border-e-2 border-e-red-800 py-4 pe-5 md:block"
              }
            >
              <img src={"/08-icon.svg"} className={"w-full"} />
            </div>
            <div className={"w-[93%] ps-3 text-start"}>
              <h2
                className={
                  "rounded-sm border-b-2 border-b-red-800 py-4 text-3xl font-bold text-white md:border-b-0"
                }
              >
                {t("diverseProductRange")}:
              </h2>
              <p className={"text-xl text-white"}>
                {t("diverseProductRangeDescription")}
              </p>
            </div>
          </div>

          <div className={"flex w-full items-center justify-between gap-2"}>
            <div
              className={
                "hidden h-full w-[7%] border-e-2 border-e-red-800 py-4 pe-5 md:block"
              }
            >
              <img src={"/09-icon.svg"} className={"w-full"} />
            </div>
            <div className={"w-[93%] ps-3 text-start"}>
              <h2
                className={
                  "rounded-sm border-b-2 border-b-red-800 py-4 text-3xl font-bold text-white md:border-b-0"
                }
              >
                {t("reliablePartnership")}:
              </h2>
              <p className={"text-xl text-white"}>
                {t("reliablePartnershipDescription")}
              </p>
            </div>
          </div>

          <div className={"flex w-full items-center justify-between gap-2"}>
            <div
              className={
                "hidden h-full w-[7%] border-e-2 border-e-red-800 py-4 pe-5 md:block"
              }
            >
              <img src={"/10-icon.svg"} className={"w-full"} />
            </div>
            <div className={"w-[93%] ps-3 text-start"}>
              <h2
                className={
                  "rounded-sm border-b-2 border-b-red-800 py-4 text-3xl font-bold text-white md:border-b-0"
                }
              >
                {t("commitmentToInnovation")}:
              </h2>
              <p className={"text-2xl text-white"}>
                {t("commitmentToInnovationDescription")}
              </p>
            </div>
          </div>
        </div>

        <div className={"flex items-center justify-center py-10"}>
          <div className={"bg-primary h-2 w-[60%] rounded-md"}></div>
        </div>

        <div className={"px-5 pb-10 md:px-26"}>
          <h1
            className={
              "text-primary !font-impact mb-10 text-center text-2xl md:text-start md:text-3xl"
            }
          >
            {t("companyName")}
          </h1>
          <div
            className={
              "w-full items-center justify-between space-y-10 md:flex md:space-y-0"
            }
          >
            <div
              className={"flex flex-col items-start justify-start space-y-6"}
            >
              <a
                href={"tel:+14372311444"}
                className={
                  "flex items-center gap-2 text-white hover:underline md:text-2xl"
                }
              >
                <img src={"/canada.png"} className={"w-8"} />
                <Phone className={"fill-primary text-primary"} />
                <span dir="ltr">+1 (437) 231-1444</span>
              </a>

              <a
                href={"tel:+905396931133"}
                className={
                  "flex items-center gap-2 text-white hover:underline md:text-2xl"
                }
              >
                <img src={"/turkey.png"} className={"w-8"} />
                <Phone className={"fill-primary text-primary"} />
                <span dir="ltr">+90 539 693 11 33</span>
              </a>

              <a
                href={"tel:+963937777960"}
                className={
                  "flex items-center gap-2 text-white hover:underline md:text-2xl"
                }
              >
                <img src={"/syria.png"} className={"w-8"} />
                <Phone className={"fill-primary text-primary"} />
                <span dir="ltr">+963 937 777 960</span>
              </a>
            </div>
            <div
              className={"flex flex-col items-start justify-start space-y-6"}
            >
              <a
                href={"mailto:Info@phoenixtradings.ca"}
                className={
                  "flex items-center gap-2 text-white hover:underline md:text-2xl"
                }
              >
                <Mail className={"text-primary"} />
                Info@phoenixtradings.ca
              </a>

              <a
                href={"https://www.instagram.com/ARIZONA1FOODS"}
                className={
                  "flex items-center gap-2 text-white hover:underline md:text-2xl"
                }
              >
                <Instagram className={"text-primary"} />
                ARIZONA1FOODS
              </a>
              <a
                href={"https://www.facebook.com/arizonafoods"}
                className={
                  "flex items-center gap-2 text-white hover:underline md:text-2xl"
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
