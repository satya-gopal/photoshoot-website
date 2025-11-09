// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import {  Hero } from "./screens/Desktop/Desktop";
// import { Services } from "./screens/Desktop/2ndSection";
// import { BabyShoot } from "./screens/Desktop/BabyShoot";
// import { MaternityShoot } from "./screens/Desktop/MaternityShoot";
// import { HalfSaree } from "./screens/Desktop/Halfsaree";
// import { NewBorn } from "./screens/Desktop/NewBorn";
// import { ModelPhotoShoot } from "./screens/Desktop/ModelPhotoShoot";
// import { PrePostWeddings } from "./screens/Desktop/PrePostWeddings";
// import { CouplePhotoshoot } from "./screens/Desktop/CouplePhotoshoot";
// import { OurJourney } from "./screens/Desktop/OurJourney";
// import { OneTinyMoment } from "./screens/Desktop/oneTinyMoment";
// import Testmonials from "./screens/Desktop/Testmonials";
// import { PhotoGraphyServices } from "./screens/Desktop/PhotoGraphyServices";
// import { Packages } from "./screens/Desktop/Packages";
// import Footer from "./screens/Desktop/Footer";
// import { Header } from "./screens/Desktop/Header";

// createRoot(document.getElementById("app") as HTMLElement).render(
//   <StrictMode>
//     <Header />
//     <Hero />
//     <Services />
//     <BabyShoot />
//     <MaternityShoot />
//     <HalfSaree />
//     <NewBorn />
//     <ModelPhotoShoot />
//     <PrePostWeddings />
//     <CouplePhotoshoot />
//     <OurJourney />
//     <OneTinyMoment />
//     <PhotoGraphyServices />
//     <Packages/>
//     <Testmonials />
//     <Footer />
//   </StrictMode>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
