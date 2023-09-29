import { logo } from "../assets";

const Hero = () => {
  return (
    <header
      className="w-full flex justify-center 
    items-center flex-col pt-10"
    >
      <h1 className="head_text">
        <h1 className="header_text ">
          Article Summarizer with
        </h1>
        <br className="max-md:hidden" />
        <span className="blue_gradient">Rapid API</span>
      </h1>
      <h2 className="desc">
        Make your reading easier with Summrize, an open-source tool that turns
        long articles into short summaries.
      </h2>
    </header>
  );
};

export default Hero;
