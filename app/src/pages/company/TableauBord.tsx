import MenuItem from "../../components/company/MenuItem";
import TitrePage from "../../components/student/TitrePage";


const TableauBordC = () => {
    return(
        <main className=" bg-gray-background md:pt-10 md:pb-20">
            <TitrePage title="Tableau de bord" />
            <MenuItem linkSelected="TBord" style="bg-white text-custom-black" textColor="black" />
            
        </main>
    )
}

export default TableauBordC;