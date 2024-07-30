import  React from 'react';

//import "./landingPageStyle.css"
// import ContactPage from '../../views/contact';

import HeroSection from 'components/heroSection';
import Header from 'shared/header';
import SubHeroSection from 'components/subHeroSection';
import OurExperience from 'components/ourExperience';
import InfoCard from 'components/infocard';
import FeaturedProperty from 'components/featuredProperty';
import FindYourSpace from 'components/findYourSpace';
// import FeaturedCard from 'shared/featuredCard';//



const LandingPage = () => {
return (
   <div>
     <Header /> 
     <HeroSection />
     <SubHeroSection />
     <InfoCard />
     {/* <ContactPage /> */}
     <OurExperience />
     <FindYourSpace />
     <FeaturedProperty />
     {/* <FeaturedCard /> */}
   </div>
 )
};
export default LandingPage;