import React from "react";
import "./Home.css";
import banner from "./banner.jpg";
import Product from "./product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img src={banner} alt={banner} className="home_image"></img>
        <div className="home_row">
          <Product
            id="8979"
            title="MSI Katana GF66 11UC - 478IN 15.6 inches FHD Gaming Laptop I Notebook Black - Intel Core i5-11400H I 8GB (3200MHz) I 512GB I RTX 3050, GDDR6 4GB I Windows 10 Home I Single Backlight KB(Red), 2.25kg"
            price={70990}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrlIPp6Oq8SttUcobqfHr2Pfc6JcS8TtvJCTHwGN3rQ2Hrx_D5wwXl9A8cTnIXneyKRucxH_3R7VE&usqp=CAU&ec=48665701"
            rating={4}
          />
          <Product
            id="3596"
            title="ASUS ROG Flow Z13 (2022) with RTX 3080 eGPU, 13.4 (34.03 cm) UHD+ Touch, Core i9 12th Gen, 4GB RTX 3050 Ti Graphics, 2-in-1 Gaming Laptop (16GB/1TB SSD/Win 11/Office/Black/1.18 kg), GZ301ZE-LC193WS"
            price={304980}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1YmXpCz7ehukwJSutOxBwfeCPskNPGqwkOBk3k65mO8LB5qX8qu0AP7CY_h0_PCdunhzEQ-4Vg8&usqp=CAU&ec=48665701"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="6487"
            title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (White)"
            price={5599}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoTmqzYib0HiaPMYFvFz_P2S-vB4RW7oExBDNIBj27bg&usqp=CAU&ec=48665701"
            rating={4}
          />
          <Product
            id="9889"
            title="Sony HT-S20R Real 5.1ch Dolby Digital Soundbar for TV with subwoofer and Compact Rear Speakers, 5.1ch Home Theatre System (400W,Bluetooth & USB Connectivity, HDMI & Optical connectivity)"
            price={17990}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHHv-OFDmI5Lc6-Y_eB6kW4Uw_gkDTJNHmWJT0z0tVFw&usqp=CAU&ec=48665701"
            rating={4}
          />
          <Product
            id="8006"
            title="Gandhi's Assassin: The Making of Nathura: The Making of Nathuram Godse and His Idea of India "
            price={1325}
            rating={5}
            image="data:image/jpeg;base64,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"
          />
        </div>
        <div className="home_row">
          <Product
            id="3762"
            title="Samsung 123.9cm (49) Gaming Monitor with 32:9 Aspect Ratio Display and 240Hz Refresh Rate - LC49G95TSSWXXL"
            price={134655}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkOyOm-J6eVxd4C1DZ3DgVrVN-gJLLBRtpGhrm9lYUzw&usqp=CAU&ec=48665701"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
