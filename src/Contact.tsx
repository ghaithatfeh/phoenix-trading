import Navbar from "./components/Navbar.tsx";
import { FacebookIcon, Instagram, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className={"bg-dark w-full overflow-y-scroll md:h-screen"}>
      <div className={"bg-dark h-full"}>
        <Navbar />

        <h1
          className={
            "!font-impact text-primary my-12 w-full px-5 text-center text-3xl md:px-0 md:text-6xl"
          }
        >
          Inquiries, Partnerships & More: Let’s Connect
        </h1>
        <p
          className={
            "px-5 text-center text-2xl text-white md:px-40 md:text-4xl"
          }
        >
          We’d love to hear from you! Whether you have questions about ARIZONA
          products, want to share feedback, or explore partnership opportunities
          our team is here to help. Get in touch with us today!
        </p>
      </div>
      <div
        className={
          "my-5 flex w-full grid-cols-5 items-center justify-center md:grid md:justify-start"
        }
      >
        <img src={"04-Shape.png"} className={"hidden w-2/3 md:block"} />
        <img src={"02-Map.png"} className={"col-span-3 w-full"} />
        <img
          src={"03-Shape.png"}
          className={"hidden w-1/2 justify-self-end md:block"}
        />
      </div>

      <div className={"bg-dark mt-16 px-10 pb-10 md:px-36"}>
        <div
          className={
            "flex w-full flex-col items-start justify-between space-y-10 md:flex-row md:space-y-0"
          }
        >
          <div
            className={
              "flex flex-col items-start justify-start space-y-6 font-bold"
            }
          >
            <div className={"flex flex-col items-start"}>
              <div
                className={
                  "flex items-center gap-2 text-2xl font-bold text-white"
                }
              >
                <img src={"/syria.png"} className={"w-8"} />
                Syria :
              </div>
              <a
                href={"tel:+96393777960"}
                className={
                  "flex items-center gap-2 text-xl font-bold text-white hover:underline md:text-2xl"
                }
              >
                <Phone className={"fill-primary text-primary"} />
                +963 937 777 960
              </a>
            </div>

            <div className={"flex flex-col items-start text-2xl text-white"}>
              <div
                className={
                  "flex items-center gap-2 text-2xl font-bold text-white"
                }
              >
                <img src={"/canada.png"} className={"w-8"} />
                Canada :
              </div>
              <a
                href={"tel:+14372311444"}
                className={
                  "flex items-center gap-2 text-xl font-bold text-white hover:underline md:text-2xl"
                }
              >
                <Phone className={"fill-primary text-primary"} />
                +1 (437) 231-1444
              </a>
            </div>

            <div className={"flex flex-col items-start"}>
              <div className={"flex items-center gap-2 text-2xl text-white"}>
                <img src={"/turkey.png"} className={"w-8"} />
                Turkey :
              </div>
              <a
                href={"tel:+905396931133"}
                className={
                  "flex items-center gap-2 text-xl font-bold text-white hover:underline md:text-2xl"
                }
              >
                <Phone className={"fill-primary text-primary"} />
                +90 539 693 11 33
              </a>
            </div>
          </div>
          <div className={"flex flex-col items-start justify-start space-y-6"}>
            <a
              href={"mailto:Info@phoenixtradings.ca"}
              className={
                "flex items-center gap-2 text-xl font-bold text-white hover:underline md:text-2xl"
              }
            >
              <Mail className={"text-primary"} />
              Info@phoenixtradings.ca
            </a>

            <a
              href={"https://www.instagram.com/ARIZONA1FOODS"}
              className={
                "flex items-center gap-2 text-xl font-bold text-white hover:underline md:text-2xl"
              }
            >
              <Instagram className={"text-primary"} />
              ARIZONA1FOODS
            </a>
            <a
              href={"https://www.facebook.com/Arizonafoods"}
              className={
                "flex items-center gap-2 text-xl font-bold text-white hover:underline md:text-2xl"
              }
            >
              <FacebookIcon className={"text-primary"} />
              Arizonafoods
            </a>
          </div>
        </div>
      </div>

      <div className={"my-10 flex w-full items-center justify-center"}>
        <span className={"h-2 w-[60%] rounded-xl bg-red-700"} />
      </div>
    </div>
  );
};

export default Contact;
