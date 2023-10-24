import person from "./../../assets/images/about_us/person.jpg";
import parts from "./../../assets/images/about_us/parts.jpg";
const AboutUs = () => {
  return (
    <div className="hero py-10 md:py-16">
      <div className="hero-content flex-col lg:flex-row gap-8">
        <div className="relative">
          <img className="rounded-lg w-3/4" src={person} />
          <img
            className="rounded-lg absolute w-1/2 right-0 -bottom-16 border-8 border-white"
            src={parts}
          />
        </div>
        <div className="pt-16 lg:pt-0 text-center lg:text-left">
          <p className="text-orange-500 font-bold text-lg md:text-xl">
            About Us
          </p>
          <h1 className="text-xl md:text-4xl font-bold pt-4">
            We are qualified & of experience in this field
          </h1>
          <p className="pt-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
          <p className="pt-2 pb-5">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.{" "}
          </p>
          <button className="btn btn-error">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
