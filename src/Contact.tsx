import Navbar from "./components/Navbar.tsx";
import { FacebookIcon, Instagram, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className={"bg-dark h-screen w-full overflow-y-scroll"}>
      <div className={"bg-dark h-full"}>
        <Navbar />

        <h1
          className={
            "!font-impact text-primary my-12 w-full text-center text-6xl"
          }
        >
          Inquiries, Partnerships & More: Let’s Connect
        </h1>
        <p className={"px-40 text-center text-4xl text-white"}>
          We’d love to hear from you! Whether you have questions about ARIZONA
          products, want to share feedback, or explore partnership opportunities
          our team is here to help. Get in touch with us today!
        </p>
      </div>
      <div className={"my-5 grid w-full grid-cols-5 justify-start"}>
        <img src={"04-Shape.png"} className={"w-2/3"} />
        <img src={"02-Map.png"} className={"col-span-3 w-full"} />
        <img src={"03-Shape.png"} className={"w-1/2 justify-self-end"} />
      </div>

      <div className={"bg-dark mt-16 px-36 pb-10"}>
        <div className={"flex w-full items-start justify-between"}>
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
              <div
                className={
                  "flex items-center gap-2 text-2xl font-bold text-white"
                }
              >
                <Phone className={"fill-primary text-primary"} />
                +963 937 777 960
              </div>
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
              <div
                className={
                  "flex items-center gap-2 text-2xl font-bold text-white"
                }
              >
                <Phone className={"fill-primary text-primary"} />
                +1 (437) 231-1444
              </div>
            </div>

            <div className={"flex flex-col items-start"}>
              <div className={"flex items-center gap-2 text-2xl text-white"}>
                <img src={"/turkey.png"} className={"w-8"} />
                Turkey :
              </div>
              <div
                className={
                  "flex items-center gap-2 text-2xl font-bold text-white"
                }
              >
                <Phone className={"fill-primary text-primary"} />
                +90 539 693 11 33
              </div>
            </div>
          </div>
          <div className={"flex flex-col items-start justify-start space-y-6"}>
            <div
              className={
                "flex items-center gap-2 text-2xl font-bold text-white"
              }
            >
              <Mail className={"text-primary"} />
              Info@phoenixtradings.ca
            </div>

            <div
              className={
                "flex items-center gap-2 text-2xl font-bold text-white"
              }
            >
              <Instagram className={"text-primary"} />
              ARIZONA1FOODS
            </div>
            <div
              className={
                "flex items-center gap-2 text-2xl font-bold text-white"
              }
            >
              <FacebookIcon className={"text-primary"} />
              Arizonafoods
            </div>
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
