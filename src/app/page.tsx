import ContactButtons from "@/components/ContactButton";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ImageSlider from "@/components/ImageSlider";
import Menu from "@/components/Menu";
import Owner from "@/components/Owner";
import Task from "@/components/Task";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  const data = [
    {
      heading: "MISION",
      paragraph:
        "To deliver unforgettable and personalized event experiences by providing high-quality services such as tent setups, DJ, games, tattoos, flower decorations, mehndi, and haldi arrangements, ensuring every celebration is filled with joy, creativity, and meticulous planning.",
    },
    {
      heading: "VISION",
      paragraph:
        "To become the most trusted and sought-after event service provider, recognized for transforming special occasions into unique and cherished moments by offering innovative, elegant, and seamless event solutions.",
    },
    {
      heading: "GOAL",
      paragraph:
        "To exceed client expectations through consistent, timely, and exceptional service delivery, focusing on attention to detail, customization, and providing a stress-free event planning experience, making each celebration an extraordinary and memorable affair.",
    },
  ];
  return (
    <div className="mt-6 p-4">
      <Task />
      <ImageSlider />
      <div className="text-center mt-6">
        <h1 className="inline-block text-4xl font-bold bg-gradient-to-r from-indigo-500 to-pink-600 bg-clip-text text-transparent">
          Who we are . . .
        </h1>
      </div>
      <div className="flex items-center justify-center md:mt-6 mt-12">
        <div className="shadow-2xl bg-black text-white rounded p-4">
          <span className="text-2xl">
            Welcome to{" "}
            <span className="font-bold text-teal-400">
              Banaras Caterers having last 10 Years of experience in Catering
              Services
            </span>
            , your one-step solution for creating unforgettable celebrations! We
            specialize in a range of services designed to make your special
            occasions even more memorable, including catering, tent setups,
            haldi and mehendi ceremonies, fun-filled games, temporary tattoos,
            DJ services, and breathtaking flower decorations. Whether you are
            planning a wedding, birthday, or any other event, our dedicated team
            is here to provide top-notch services that reflect your style and
            vision. With attention to detail and a passion for perfection, we
            ensure that every aspect of your event is handled with care, leaving
            you free to enjoy every moment.
            <span className="font-bold text-teal-400">Banaras Caterers</span>,
            we believe in transforming your celebrations into extraordinary
            experiences. Let us help you create memories that will last a
            lifetime!
          </span>
        </div>
      </div>

      <div className="mt-6">
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4 rounded">
          {data.map((items, key) => (
            <div
              className="rounded h-full dark:bg-gray-800 bg-black p-8"
              key={key}
            >
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-white dark:text-white text-lg font-medium">
                  {items.heading}
                </h2>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed text-base text-white dark:text-gray-300">
                  {items.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Hero />
      <Menu />
      <Owner />
      <Testimonial />
      <Footer />
      <ContactButtons />
    </div>
  );
}
