import Image from "next/image";
import fr from "../../../public/fr.jpg";

const AboutSection = () => {
  return (
    <section className="my-5">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:pr-4 flex flex-col px-4">
          <p className="mb-5 font-light text-lg text-[#000000]">
            Welcome to Fraud Check
          </p>
          <h1 className="text-4xl font-black mb-5 text-[#1A1A1A]">
            YOUR TRUSTED PARTNER IN FRAUD DETECTION
          </h1>
          <p className="font-normal text-base mb-4 text-[#333333]">
            We specialize in providing comprehensive fraud detection services
            for individuals and businesses alike.
          </p>
          <p className="font-normal text-base mb-4 text-[#333333]">
            Our database continues to expand by thousands of new entries, making
            it easier than ever to identify and prevent fraudulent activity. And
            best of all, you can search this data for free, giving you access to
            the insights you need to stay one step ahead of the game. So whether
            you&apos;re looking to protect your personal finances or safeguard
            your business operations, Fraud-check.org is here to help.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0 mx-2 flex items-center justify-center">
          <Image src={fr} alt="fr" className="rounded-md max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
