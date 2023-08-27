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
        </div>
    );
};

export default Home;