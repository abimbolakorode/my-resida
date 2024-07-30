import React from 'react'
import "./findYourSpaceStyle.css";
import find_your_space_bg from 'assets/find_your_space_bg.png'
import Button from 'shared/button';


const FindYourSpace = () => {
  return (
    <div>
    <div className="fys_container">
       {/*left*/}
       <section className="fys_image_section img"> 
         <img src={find_your_space_bg} alt="find_your_space_bg"  
        className="image" />
        </section>
        {/* right */}
         <section className="fys_text_section">
            <div>
           <p>{"Your dream home is only a few clicks away"}</p>
            </div>
            <div>
                <span>{"- Find your space now!"}</span>
            </div>
            <div className="fys_button">
                 <Button
                  style={{
                  width: "100%",
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#1B2056",
                  borderRadius: "8px",
                  padding: "5px 20px",
                  backgroundColor: "#fff",
                }}
                btnName={"Download App"}
                />
            </div>
        </section>
    </div>
    </div>
  )
}

export default FindYourSpace;