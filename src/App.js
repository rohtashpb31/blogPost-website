import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "toastify-js/src/toastify.css"
import NavBars from "./Components/ NavBars";
// import Main from "./Components/Main";
import Footer from "./Components/Footers";
import Blogs from "./Components/Blogs";
import Details from "./Components/Details";
import Home from "./Components/Home";
// import Slider from "./Components/Slider";
import ContactForm from "./Components/ContactForm";
import About from "./Components/About";
import Features from "./Components/Features";
import HomePageblog from "./Components/HomePageblog";
import RegisterForm from "./Components/RegisterFrom";
import LoginForm from "./Components/LoginFrom";
import Writeus from "./Components/Writeus";
import ProfilePage from "./Components/Profile";
import PrivacyPolicy from "./Components/Privacy";
import WriteUsPage from "./Components/FooterWriteus";
import AdminBlogs from "./Components/AdminBlogs";
import Admin from "./Components/Admin";
import AdminPanel from "./Components/Admin";
import Error404 from "./Components/Error404";
function App() {
  
  return (
    <>
    <div className="container">
    <NavBars/>
 
      <Routes>
      <Route path="adminblogs" element={<AdminBlogs/>} />
      <Route path="admin" element={<Admin/>} />
        <Route path="Blogs" element={<Blogs/>} />
        <Route path="profile" element={<ProfilePage/>} />
        <Route path="navbars" element={<NavBars/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/Contact" element={<ContactForm/>} /> 
        <Route path="/Abouts/Contact" element={<ContactForm/>} />        
        <Route path="/About" element={<About/>} /> 
        <Route path="/writeus" element={<Writeus/>} /> 
        <Route path="/Features" element={<Features/>} />  
        <Route path="/blog/:id" element={<Details/>} />
        <Route path="/homepageblog" element={<HomePageblog/>}/>
        <Route path="/categeores" element={<Blogs/>}/>
         <Route path="/login" element={<LoginForm/>}/>
         <Route path="/register" element={<RegisterForm/>}/>
         <Route path="Login/register" element={<RegisterForm/>}/>
         <Route path="privacy" element={<PrivacyPolicy/>}/>
         <Route path="footerWrite" element={<WriteUsPage/>}/>
         <Route path="*" element={<Error404/>}/>
      </Routes>
      <Footer/>
      
      </div>
    </>
  );
}

export default App;
