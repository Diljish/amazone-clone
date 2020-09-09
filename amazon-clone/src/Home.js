import React from 'react';
import "./Home.css";
import Product from "./Product.js";

const Home=() => {
    return (
        <div className = "home">
         <img className = "home_image" src= "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="" /> 

<div className = "home__row">
<Product 
          id = "123456"
          title = "Wireless Mouse for Laptop, JOYACCESS Silent Cordless Mouse with USB Nano Receiver and High Precision 2400 DPI-Black" 
          price = {12}
          rating= {5}
          image = "https://m.media-amazon.com/images/I/31VXgXhhPBL._AC_UY218_.jpg" />

<Product 
          id = "1234561"
          title = "Unlocked Smartphones Ulefone Note 9P (2020) Android 10 Unlocked Cell phones, Triple Rear Camera Triple Card Slots, 6.52 Waterdrop Full-Screen Dual SIM Phones, 4500mAh Global Bands, US Version - Green" 
          price = {139}
          rating= {4}
          image = "https://m.media-amazon.com/images/I/71Q8gm97H8L._AC_UY218_.jpg" />

</div>

<div className = "home__row">
<Product 
          id = "1234562"
          title = "Google Pixel 4a - New Unlocked Android Smartphone - 128 GB of Storage - Up to 24 Hour Battery - Just Black" 
          price = {139}
          rating= {4}
          image = "https://m.media-amazon.com/images/I/61REHV3z2GL._AC_UY218_.jpg" />

<Product 
          id = "1234563"
          title = "Ulefone Armor 9 Rugged Cell Phones Unlocked, Thermal Imaging Camera, Helio P90 8GB + 128GB Android 10, 64MP Rear Camera, 6600mAh Battery, 6.3 inch FHD+ Screen, NFC, OTG, IP68/69K Waterproof Phone" 
          price = {599}
          rating= {5}
          image = "https://m.media-amazon.com/images/I/61kGWQwX8ZL._AC_UY218_.jpg" />
          <Product 
          id = "1234564"
          title = "Nokia 2.3 Fully Unlocked Smartphone with AI-Powered Dual Camera and Android 10 Ready, Charcoal (AT&T/T-Mobile/Cricket/Tracfone/Simple Mobile)" 
          price = {129}
          rating= {4}
          image = "https://m.media-amazon.com/images/I/61w-77mWokL._AC_UY218_.jpg" />

</div>
<div className = "home__row">
<Product 
          id = "1234565"
          title = "Lenovo Legion 5 Gaming Laptop, 15 FHD (1920x1080) IPS Screen, AMD Ryzen 7 4800H Processor, 16GB DDR4, 512GB SSD, NVIDIA GTX 1660Ti, Windows 10, 82B1000AUS, Phantom Black" 
          price = {999}
          rating= {5}
          image = "https://m.media-amazon.com/images/I/71UfCUiGsOL._AC_UY218_.jpg" />

</div>
          



        </div>
    )
}

export default Home;
