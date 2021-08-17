import ParticlesBackground from "../ui/particles-background.ui";
import Typography from "../ui/typography.ui";
import Button from "../ui/button.ui";

const HeroSection = () => (
  <div
    className="pt-72 px-4 xs:px-2 pb-96 sm:pt-60 sm:pb-72 xs:pt-44 xs:pb-56 bg-gradient-to-br from-primary-dark to-primary"
    id="home"
  >
    <div className="max-w-4xl flex flex-col mx-auto items-center z-20 relative">
      <Typography
        variant="h1"
        className="mb-5 text-center text-white lg:text-4xl"
      >
        Your way to modern technology
      </Typography>
      <Typography
        variant="p1"
        className="mb-7 text-center max-w-xl text-white opacity-70 lg:max-w-md md:max-w-sm"
      >
        We design and implement sophisticated websites and mobile apps with a
        rich user experience
      </Typography>
      <div className="flex space-x-8 mt-0.5 xs:space-x-0 xs:space-y-4 xs:flex-col xs:w-full">
        <Button>Contact Us</Button>
        <Button style="outline" className="">
          Study Case
        </Button>
      </div>
    </div>
    <ParticlesBackground />
  </div>
);

export default HeroSection;
