import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContactUs } from "./screens/Desktop/Contact";
import { HomePage } from "./pages/HomePage";
import BabyShootMenu from "./pages/menu_pages/BabyShootMenu";
import WeddingShootMenu from "./pages/menu_pages/WeddingShootMenu";
import BirthdayShootMenu from "./pages/menu_pages/BirthdayShootMenu";
import MaternityShootMenu from "./pages/menu_pages/MaternityShootMenu";
import ModelShootMenu from "./pages/menu_pages/ModelShootMenu";
import NewBornShootMenu from "./pages/menu_pages/Newbornbaby";
import { Header } from "./screens/Desktop/Header";
import Footer from "./screens/Desktop/Footer";

function App() {
  return (
    <Router>
      <div className="bg-white flex flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/babyshootmenu" element={<BabyShootMenu />} />
            <Route path="/weddingshootmenu" element={<WeddingShootMenu/>}/>
            <Route path="/birthdayshootmenu" element={<BirthdayShootMenu/>}/>
            <Route path="/maternityshootmenu" element={<MaternityShootMenu/>}/>
            <Route path="/modelshootmenu" element={<ModelShootMenu/>}/>
            <Route path="/newbornmenu" element={<NewBornShootMenu/>}/>
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
