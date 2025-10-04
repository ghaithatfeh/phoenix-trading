import Navbar from "./components/Navbar.tsx";
import products from "./data/products.json";
import { FacebookIcon, Instagram, Mail, Phone } from "lucide-react";

const Products = () => {
  return (
    <div className="h-full w-full">
      {/* Hero wrapper made relative to position decorative logo */}
      <div className={"bg-dark relative w-full overflow-hidden"}>
        <Navbar />
        <div
          className={
            "relative z-10 mt-10 flex flex-col items-center justify-center px-8 md:px-20 lg:px-40"
          }
        >
          <h1
            className={
              "!font-impact text-primary text-center text-4xl md:text-5xl"
            }
          >
            Welcome to the Flavors of Phoenix!
          </h1>
          <p
            className={
              "mt-4 text-justify text-xl text-white md:text-2xl lg:text-3xl"
            }
          >
            Explore our curated selection of premium food products, where
            quality and taste come together in every bite. At Phonex, we believe
            that great food starts with the finest ingredients. Each item in our
            collection is carefully chosen to bring you an unparalleled culinary
            experience, whether you’re a professional chef or a home cook.
          </p>
        </div>
        <div className="w-full md:h-[80vh]">
          <img
            src="/02-LogoBc.svg"
            alt="Logo background"
            className="h-full w-full object-cover px-10"
          />
        </div>
      </div>
      <div
        className={
          "bg-primary bg-cover bg-center bg-no-repeat py-10 md:h-screen md:bg-[url('03-Background.jpg')] md:py-0"
        }
      >
        <div className={"flex h-full w-full items-center justify-end"}>
          <p className={"px-10 text-center text-3xl text-white md:w-[50%]"}>
            Dive in and discover the rich variety, exceptional freshness, and
            exquisite flavors that define the Phoenix brand. We're dedicated to
            bringing the best to your table, every time.
          </p>
        </div>
      </div>
      <div className={"hidden w-full items-center justify-center md:flex"}>
        <span className={"h-2 w-[60%] rounded-xl bg-red-700"} />
      </div>
      <h1 className={"text-primary !font-impact my-10 text-center text-4xl"}>
        Our Products
      </h1>
      <div
        className={
          "grid grid-cols-1 items-stretch justify-center gap-10 px-10 md:grid-cols-4 md:px-32"
        }
      >
        {products.map((product, index) => (
          <div
            className={"border-primary h-fit min-h-full border-2"}
            key={index}
          >
            <div className={"h-[50%] w-full"}>
              <img
                src={product.image}
                alt={product.name}
                className={"h-full w-full object-cover"}
              />
            </div>
            <h1
              className={
                "!font-impact bg-primary p-2 text-center text-xl text-white"
              }
            >
              {product.name}
            </h1>
            <p className={"text-md p-5 text-center !leading-5"}>
              {product.description}
            </p>
          </div>
        ))}
      </div>

      <div className={"my-10 flex w-full items-center justify-center"}>
        <span className={"h-2 w-[60%] rounded-xl bg-red-700"} />
      </div>

      <div className={"px-10 pb-10 md:px-36"}>
        <h1
          className={
            "text-primary !font-impact mb-10 text-center text-2xl md:text-start md:text-3xl"
          }
        >
          Phoenix General Trading Inc
        </h1>
        <div
          className={
            "w-full items-center justify-between space-y-10 md:flex md:space-y-0"
          }
        >
          <div className={"flex flex-col items-start justify-start space-y-6"}>
            <a
              href={"tel:+14372311444"}
              className={
                "flex items-center gap-2 text-xl font-bold text-black hover:underline md:text-2xl"
              }
            >
              <img src={"/canada.png"} className={"w-8"} />
              <Phone className={"fill-primary text-primary"} />
              +1 (437) 231-1444
            </a>

            <a
              href={"tel:+905396931133"}
              className={
                "flex items-center gap-2 text-xl font-bold text-black hover:underline md:text-2xl"
              }
            >
              <img src={"/turkey.png"} className={"w-8"} />
              <Phone className={"fill-primary text-primary"} />
              +90 539 693 11 33
            </a>

            <a
              href={"tel:+96393777960"}
              className={
                "flex items-center gap-2 text-xl font-bold text-black hover:underline md:text-2xl"
              }
            >
              <img src={"/syria.png"} className={"w-8"} />
              <Phone className={"fill-primary text-primary"} />
              +963 937 777 960
            </a>
          </div>
          <div className={"flex flex-col items-start justify-start space-y-6"}>
            <a
              href={"mailto:Info@phoenixtradings.ca"}
              className={
                "flex items-center gap-2 text-xl font-bold text-black hover:underline md:text-2xl"
              }
            >
              <Mail className={"text-primary"} />
              Info@phoenixtradings.ca
            </a>

            <a
              href={"https://www.instagram.com/ARIZONA1FOODS"}
              className={
                "flex items-center gap-2 text-xl font-bold text-black hover:underline md:text-2xl"
              }
            >
              <Instagram className={"text-primary"} />
              ARIZONA1FOODS
            </a>
            <a
              href={"https://www.facebook.com/Arizonafoods"}
              className={
                "flex items-center gap-2 text-xl font-bold text-black hover:underline md:text-2xl"
              }
            >
              <FacebookIcon className={"text-primary"} />
              Arizonafoods
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
