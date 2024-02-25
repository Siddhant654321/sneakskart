import HeroSection from "./HeroSection";
import iPhone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy iPhone 14 Pro"
        subtitle="Experience the power of the latest iPhone 14 with our most Pro camera ever."
        link="/"
        image={iPhone}
      />
      <HeroSection
        title="Build the ultimate setup"
        subtitle="You can add Studio Display and colour-matched Magic accessories to your bag after configure your Mac mini."
        link="/"
        image={mac}
      />
      {/* Featured Products */}
      {/* Hero Section */}
    </div>
  );
};
export default HomePage;
