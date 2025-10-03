import Navbar from "./components/Navbar.tsx";
import products from "./data/products.json";
import { FacebookIcon, Instagram, Mail, Phone } from "lucide-react";

const Products = () => {
  return (
    <>
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
        <div className="h-[80vh] w-full">
          <img
            src="/02-LogoBc.svg"
            alt="Logo background"
            className="h-full w-full object-cover px-10"
          />
        </div>
      </div>
      <div
        className={
          "h-screen bg-[url('03-Background.jpg')] bg-cover bg-center bg-no-repeat"
        }
      >
        <div className={"flex h-full w-full items-center justify-end"}>
          <p className={"w-[50%] px-10 text-center text-3xl text-white"}>
            Dive in and discover the rich variety, exceptional freshness, and
            exquisite flavors that define the Phoenix brand. We're dedicated to
            bringing the best to your table, every time.
          </p>
        </div>
      </div>
      <div className={"flex w-full items-center justify-center"}>
        <span className={"h-2 w-[60%] rounded-xl bg-red-700"} />
      </div>
      <h1 className={"text-primary !font-impact my-10 text-center text-4xl"}>
        Our Products
      </h1>
      <div
        className={
          "grid grid-cols-2 items-stretch justify-center gap-10 px-32 md:grid-cols-4"
        }
      >
        {products.map((product, index) => (
          <div className={"border-primary h-fit min-h-full border-2"} key={index}>
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

      <div className={"px-36 pb-10"}>
        <h1 className={"text-primary !font-impact mb-10 text-start text-3xl"}>
          Phoenix General Trading Inc
        </h1>
        <div className={"flex w-full items-center justify-between"}>
          <div className={"flex flex-col items-start justify-start space-y-6"}>
            <div
              className={
                "flex items-center gap-2 text-2xl font-bold text-black"
              }
            >
              <img src={"/canada.png"} className={"w-8"} />
              <Phone className={"fill-primary text-primary"} />
              +1 (437) 231-1444
            </div>

            <div
              className={
                "flex items-center gap-2 text-2xl font-bold text-black"
              }
            >
              <img src={"/turkey.png"} className={"w-8"} />
              <Phone className={"fill-primary text-primary"} />
              +90 539 693 11 33
            </div>

            <div
              className={
                "flex items-center gap-2 text-2xl font-bold text-black"
              }
            >
              <img src={"/syria.png"} className={"w-8"} />
              <Phone className={"fill-primary text-primary"} />
              +963 937 777 960
            </div>
          </div>
          <div className={"flex flex-col items-start justify-start space-y-6"}>
            <div
              className={
                "flex items-center gap-2 text-2xl font-bold text-black"
              }
            >
              <Mail className={"text-primary"} />
              Info@phoenixtradings.ca
            </div>

            <div
              className={
                "flex items-center gap-2 text-2xl font-bold text-black"
              }
            >
              <Instagram className={"text-primary"} />
              ARIZONA1FOODS
            </div>
            <div
              className={
                "flex items-center gap-2 text-2xl font-bold text-black"
              }
            >
              <FacebookIcon className={"text-primary"} />
              Arizonafoods
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
