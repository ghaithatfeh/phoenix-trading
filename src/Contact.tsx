import Navbar from "./components/Navbar.tsx";

const Contact = () => {
  return (
    <>
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
      <div className={"bg-dark flex h-[80vh] w-full items-center justify-between"}>
        <img src={"horse.png"} className={"h-full w-[15%]"} />
        <img src={"02-Map.svg"} className={"h-full w-full"} />
        <img src={"03-Shape.svg"} className={"h-full w-full"} />
      </div>
    </>
  );
};

export default Contact;
