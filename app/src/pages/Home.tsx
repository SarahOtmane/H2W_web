import ButtonBlack from "../components/ButtonBlack";
import icon from "../assets/react.svg"

import '../App.css';
import ButtonWhite from "../components/ButtonWhite";


const Home: React.FC = () => {
    return (
        <div>
            <h1>Home</h1>
            <ButtonBlack
                text='Click me'
                icon={icon}
            />
            <ButtonWhite
                text='Click me'
                icon={icon}
            />
        </div>
    );
}

export default Home;