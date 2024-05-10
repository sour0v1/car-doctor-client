import About from "./About";
import Banner from "./Banner";
import Services from "./services/Services";

const Home = () => {
    return (
        <div>
            {/* <h1>Home Page</h1> */}
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;