import { useState } from "react";

import '../App.css';
import icon from "../assets/react.svg"

import ButtonBlack from "../components/buttons/ButtonBlack";
import ButtonWhite from "../components/buttons/ButtonWhite";
import SelectEspace from "../components/fields/SelectEspace";
import PageTitle from "../components/titles/PageTitle";
import SectionTitle from "../components/titles/SectionTitle";
import Subtitle from "../components/titles/Subtitle";
import Pg from "../components/Pg";
import InputLabel from "../components/fields/InputLabel";
import SearchBar from "../components/SearchBar";


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
            <Pg text='Text' />

            <div className="w-1/5">
                <InputLabel label='Label' value='' placeholder="test" setValue={() => {}}/>
            </div>

            <SearchBar metier='' localisation='' setLocalisation={() => {}} setMetier={() => {}}/>
        </div>
    );
}

export default Home;