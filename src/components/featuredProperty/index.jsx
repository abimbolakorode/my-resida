import React from 'react'
import  './featuredPropertyStyle.css';
import pty1 from 'assets/pty1 img.jpg';
import { FaHeart } from "react-icons/fa";

const FeaturedProperty = () => {
  return (
    <main className="main_container">
         <section className="featured_property_div">
         <h2>Featured Properties</h2>
         <p>Explore our curated selection of premier properties, 
            meticulously chosen to suit every lifestyle and budget. 
            From luxurious penthoues to cozy family homes, 
            our featured listings showcase the best of Lagos living.</p>

        
        </section>
        <section className="featured_card_div">
            <featuredCard 
            title={"Lillian Pepple Estate"}
            icons={<FaHeart color="#797b7c" size={14} />}
            image={pty1}
            buttons={["Duplexes", "Bungalows", "Self-contains"]}
            price={"From NGN500,000/year"}
            />
            <featuredCard />
            <featuredCard />
            
         </section>
         
    </main>
  );
};

export default FeaturedProperty;