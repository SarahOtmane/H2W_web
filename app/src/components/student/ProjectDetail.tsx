
import img1 from "../../assets/images/student/projet_img1.svg"
import img2 from "../../assets/images/student/projet_img2.svg"
import img3 from "../../assets/images/student/projet_img3.svg"
import img4 from "../../assets/images/student/projet_img4.svg"
import cover from "../../assets/images/student/projet_img_cover.svg"
import ButtonBlack from "../buttons/ButtonBlack"

interface ProjectDetailProps {
    setOpen: (open: boolean) => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({setOpen}) => {
    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <div className="bg-white rounded-[1rem] p-6 w-[80%] max-h-[90vh] overflow-y-auto px-14 py-10">
                <img src={cover} alt="cover" className="w-full object-cover rounded-[1rem] mb-6" />
                <div className="flex">
                    <img src={cover} alt="cover" className="w-1/6 mr-4 rounded-[1rem]" />
                    <img src={img1} alt="cover" className="w-1/6 mr-4 rounded-[1rem]" />
                    <img src={img2} alt="cover" className="w-1/6 mr-4 rounded-[1rem]" />
                    <img src={img3} alt="cover" className="w-1/6 mr-4 rounded-[1rem]" />
                    <img src={img4} alt="cover" className="w-1/6 mr-4 rounded-[1rem]" />
                </div>
                <h1 className="text-[32px] font-Jakarta-extra-bold my-6 text-center">Cuisine en poche !</h1>
                <p className="text-[16px] font-Jakarta-bold">Description du projet</p>
                <p className="text-[16px] font-Jakarta-regular">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <ButtonBlack style="mt-6 m-auto w-[10rem]" text="Fermer" handleClick={() => setOpen(false)} />
            </div>
        </div>
    )
}

export default ProjectDetail;