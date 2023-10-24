import banner1 from "./../../assets/images/banner/1.jpg";
import banner2 from "./../../assets/images/banner/2.jpg";
import banner3 from "./../../assets/images/banner/3.jpg";
import banner4 from "./../../assets/images/banner/4.jpg";
import banner5 from "./../../assets/images/banner/5.jpg";

const Slider = () => {
  return (
    <div className="carousel gap-5 w-full h-[80vh]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={banner1}
          className="w-full absolute -z-10 h-full rounded-lg"
        />
        <div className=" p-6 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full flex justify-center flex-col gap-5 w-max rounded-lg">
          <h1 className="text-2xl md:text-5xl font-bold max-w-md mx-auto text-center md:text-left md:mx-0">
            Affordable Price For Car Servicing
          </h1>
          <p className="max-w-lg">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4">
            <button className="btn btn-error">Discover More</button>
            <button className="btn btn-outline text-white border-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 right-5 bottom-5">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle btn-error">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={banner2}
          className="w-full absolute -z-10 h-full rounded-lg"
        />
        <div className=" p-6 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full flex justify-center flex-col gap-5 w-max rounded-lg">
          <h1 className="text-2xl md:text-5xl font-bold max-w-md mx-auto text-center md:text-left md:mx-0">
            Affordable Price For Car Servicing
          </h1>
          <p className="max-w-lg">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4">
            <button className="btn btn-error">Discover More</button>
            <button className="btn btn-outline text-white border-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 right-5 bottom-5">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle btn-error">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={banner3}
          className="w-full absolute -z-10 h-full rounded-lg"
        />
        <div className=" p-6 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full flex justify-center flex-col gap-5 w-max rounded-lg">
          <h1 className="text-2xl md:text-5xl font-bold max-w-md mx-auto text-center md:text-left md:mx-0">
            Affordable Price For Car Servicing
          </h1>
          <p className="max-w-lg">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4">
            <button className="btn btn-error">Discover More</button>
            <button className="btn btn-outline text-white border-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 right-5 bottom-5">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle btn-error">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={banner4}
          className="w-full absolute -z-10 h-full rounded-lg"
        />
        <div className=" p-6 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full flex justify-center flex-col gap-5 w-max rounded-lg">
          <h1 className="text-2xl md:text-5xl font-bold max-w-md mx-auto text-center md:text-left md:mx-0">
            Affordable Price For Car Servicing
          </h1>
          <p className="max-w-lg">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4">
            <button className="btn btn-error">Discover More</button>
            <button className="btn btn-outline text-white border-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 right-5 bottom-5">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle btn-error">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img
          src={banner5}
          className="w-full absolute -z-10 h-full rounded-lg"
        />
        <div className=" p-6 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full flex justify-center flex-col gap-5 w-max rounded-lg">
          <h1 className="text-2xl md:text-5xl font-bold max-w-md mx-auto text-center md:text-left md:mx-0">
            Affordable Price For Car Servicing
          </h1>
          <p className="max-w-lg">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4">
            <button className="btn btn-error">Discover More</button>
            <button className="btn btn-outline text-white border-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 right-5 bottom-5">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle btn-error">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
