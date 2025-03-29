import MenuItem from "../../components/student/MenuItem";
import TitrePage from "../../components/student/TitrePage";




const Portfolio = () => {
    return(
        <main className="px-4 md:px-38 md:pt-10 md:pb-20 bg-gray-background">
            <MenuItem linkSelected="portfolio" style="bg-white text-black" iconStyle="ml-[5%]" fillIcon="white" />
            <TitrePage title="Portfolio" />

            
        </main>
    )
}

export default Portfolio;