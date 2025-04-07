import Icon from "../../utils/Icon"
import ButtonBlack from "../buttons/ButtonBlack"



const HistoriqueCandidature = () => {
    return(
        <div className="bg-custom-black pl-8 pt-6 pb-12 rounded-[1rem] mt-10">
            <h2 className="font-Jakarta-bold text-[36px] text-white mb-10">Historique de mes candidatures</h2>

            <ButtonBlack text="Voir toutes mes candidatures" icon={<Icon name="flecheButton" />} style='border-white' />

        </div>
    )
}

export default HistoriqueCandidature