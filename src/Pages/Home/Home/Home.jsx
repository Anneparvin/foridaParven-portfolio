import AboutMe from "../AboutMe/AboutMe";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import FeaturedPro from "../FeaturedPro/FeaturedPro";
import Logo from "../Logo/Logo";
import Myself from "../Myself/Myself";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
           <Myself></Myself>
           <Logo></Logo>
           <Services></Services> 
           <FeaturedPro></FeaturedPro>
           <AboutMe></AboutMe>
           <Blog></Blog>
           <Contact></Contact>
        </div>
    );
};

export default Home;