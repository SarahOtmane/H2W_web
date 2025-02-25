import ButtonBlack from "../components/ButtonBlack";
import icon from "../assets/react.svg"

import '../App.css';
import ButtonWhite from "../components/ButtonWhite";
import SelectEspace from "../components/SelectEspace";
import { useState } from "react";
import PageTitle from "../components/titles/PageTitle";
import SectionTitle from "../components/titles/SectionTitle";
import Subtitle from "../components/titles/Subtitle";
import TextUnderTitle from "../components/titles/TextUnderTitle";


const Home: React.FC = () => {
    const [espaceSelected, setEspaceSelected] = useState<string>('Espace étudiant');

    return (
        <div className="ml-10">
            <h1>Home</h1>
            <ButtonBlack
                text='Click me'
                icon={icon}
            />
            <ButtonWhite
                text='Click me'
                icon={icon}
            />
            <SelectEspace  espaceSelected={espaceSelected} setEspaceSelected={setEspaceSelected}/>
            <PageTitle text='Page Title'/>
            <SectionTitle text='Section Title'/>
            <Subtitle text='Subtitle'/>
            <TextUnderTitle text='Text Under Title' />
        </div>
    );
}

export default Home;