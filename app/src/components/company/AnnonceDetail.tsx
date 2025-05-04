import React from "react";
import { CreateAnnoncesType } from "../../types/Annonces.type";
import ButtonBlack from "../buttons/ButtonBlack";

import Hive2Work from '../../assets/images/company/hive2work_annonce.svg'
import Icon from "../../utils/Icon";

interface AnnonceDetailProps {
    annonce : CreateAnnoncesType,
    setPopupVisualAnnonce : React.Dispatch<React.SetStateAction<boolean>>,
}

const AnnonceDetail : React.FC<AnnonceDetailProps> = ({annonce, setPopupVisualAnnonce}) => {
    return(
        <>
        <div className="bg-[#F6F6F6] w-[90%] max-h-[90vh] overflow-y-auto px-14 py-20 ">
            <section className="bg-white rounded-[1rem] flex justify-between px-6 py-10 mb-10">
                <div>
                    <article className="flex items-center mb-10 ">
                        <img src={Hive2Work} />
                        <h2 className="font-Jakarta-bold text-[19px] ml-10 mr-4 ">{annonce.companyName || 'Hive2Work'}</h2>
                        <p className="flex py-2 px-5 bg-[#D6F9E3] rounded-[.6rem] ">
                            <Icon name="trust" />
                            <span className="text-[#03682B] ml-2 text-[15px] font-Jakarta-medium ">BeeTrust</span>
                        </p>
                    </article>
                    <h1 className="text-[23px] font-Jakarta-extra-bold ">{annonce.title}</h1>
                    <article className="flex mt-3">
                        <p className="flex px-4 py-2 bg-[#F6F6F6] mr-4 rounded-[.6rem] ">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3217 13.6619C13.9577 13.6619 15.284 12.3357 15.284 10.6996C15.284 9.06358 13.9577 7.7373 12.3217 7.7373C10.6856 7.7373 9.35938 9.06358 9.35938 10.6996C9.35938 12.3357 10.6856 13.6619 12.3217 13.6619Z" stroke="#6F6F6F" stroke-width="1.42419"/>
                                <path d="M4.35549 8.97156C6.22592 0.749245 18.4075 0.75874 20.2684 8.98106C21.3603 13.8043 18.36 17.887 15.73 20.4126C13.8216 22.2545 10.8023 22.2545 8.88441 20.4126C6.2639 17.887 3.26361 13.7948 4.35549 8.97156Z" stroke="#6F6F6F" stroke-width="1.42419"/>
                            </svg>
                            <span className="text-[#6F6F6F] ml-2 text-[15px] font-Jakarta-medium ">{annonce.location}</span>
                        </p>
                        <p className="flex px-4 py-2 bg-[#F6F6F6] rounded-[.6rem] ">
                            <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.04688 21.7988H21.0361" stroke="#6F6F6F" stroke-width="1.42419" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.95312 21.7985L3.0006 10.3764C3.0006 9.79727 3.27594 9.24663 3.73168 8.88584L10.3779 3.71127C11.0615 3.17958 12.0205 3.17958 12.7136 3.71127L19.3598 8.87634C19.825 9.23713 20.0909 9.78777 20.0909 10.3764V21.7985" stroke="#6F6F6F" stroke-width="1.42419" stroke-miterlimit="10" stroke-linejoin="round"/>
                                <path d="M12.495 17.0513H10.5961C9.80801 17.0513 9.17188 17.6874 9.17188 18.4755V21.7986H13.9192V18.4755C13.9192 17.6874 13.283 17.0513 12.495 17.0513Z" stroke="#6F6F6F" stroke-width="1.42419" stroke-miterlimit="10" stroke-linejoin="round"/>
                                <path d="M9.16869 13.9657H7.26977C6.74757 13.9657 6.32031 13.5384 6.32031 13.0162V11.592C6.32031 11.0698 6.74757 10.6426 7.26977 10.6426H9.16869C9.69089 10.6426 10.1182 11.0698 10.1182 11.592V13.0162C10.1182 13.5384 9.69089 13.9657 9.16869 13.9657Z" stroke="#6F6F6F" stroke-width="1.42419" stroke-miterlimit="10" stroke-linejoin="round"/>
                                <path d="M15.8171 13.9657H13.9182C13.396 13.9657 12.9688 13.5384 12.9688 13.0162V11.592C12.9688 11.0698 13.396 10.6426 13.9182 10.6426H15.8171C16.3393 10.6426 16.7666 11.0698 16.7666 11.592V13.0162C16.7666 13.5384 16.3393 13.9657 15.8171 13.9657Z" stroke="#6F6F6F" stroke-width="1.42419" stroke-miterlimit="10" stroke-linejoin="round"/>
                                <path d="M18.1905 7.55687L18.162 4.7085H13.9844" stroke="#6F6F6F" stroke-width="1.42419" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span className="text-[#6F6F6F] ml-2 text-[15px] font-Jakarta-medium ">Télétravail : {annonce.teleworking}</span>
                        </p>
                    </article>
                    <ButtonBlack style="mt-8 w-[11rem]" text="Postuler" />
                </div>
                <div className="flex flex-col items-end">
                    <article className="flex items-center">
                        <button className="cursor-pointer">
                            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.923032" y="1.40545" width="50.7961" height="50.7961" rx="25.398" stroke="#111111" stroke-width="1.42419"/>
                                <path d="M26.9114 35.1684C26.5886 35.2824 26.0569 35.2824 25.7341 35.1684C22.9806 34.2285 16.8281 30.3072 16.8281 23.661C16.8281 20.7272 19.1923 18.3535 22.1071 18.3535C23.8351 18.3535 25.3638 19.189 26.3227 20.4803C27.2817 19.189 28.8198 18.3535 30.5383 18.3535C33.4532 18.3535 35.8173 20.7272 35.8173 23.661C35.8173 30.3072 29.6648 34.2285 26.9114 35.1684Z" stroke="#111111" stroke-width="1.42419" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <button className="cursor-pointer ml-3">
                            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.625" y="0.693359" width="52.2203" height="52.2203" rx="26.1101" fill="#FF9B3E"/>
                                <path d="M26.7565 18.1733C23.6138 18.1733 21.0598 20.7274 21.0598 23.8701V26.614C21.0598 27.1932 20.8129 28.0762 20.5186 28.5699L19.4267 30.3834C18.7526 31.5038 19.2178 32.7475 20.4521 33.1653C24.5443 34.5325 28.9593 34.5325 33.0514 33.1653C34.2003 32.7855 34.7035 31.4278 34.0768 30.3834L32.985 28.5699C32.7001 28.0762 32.4533 27.1932 32.4533 26.614V23.8701C32.4533 20.7369 29.8897 18.1733 26.7565 18.1733Z" stroke="white" stroke-width="1.42419" stroke-miterlimit="10" stroke-linecap="round"/>
                                <path d="M28.513 18.4483C28.2187 18.3628 27.9148 18.2964 27.6015 18.2584C26.69 18.1444 25.8165 18.2109 25 18.4483C25.2753 17.7457 25.959 17.252 26.7565 17.252C27.554 17.252 28.2377 17.7457 28.513 18.4483Z" stroke="white" stroke-width="1.42419" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M29.6108 33.5068C29.6108 35.0734 28.329 36.3552 26.7624 36.3552C25.9839 36.3552 25.2623 36.0324 24.7496 35.5197C24.2369 35.007 23.9141 34.2854 23.9141 33.5068" stroke="white" stroke-width="1.42419" stroke-miterlimit="10"/>
                            </svg>
                        </button>
                    </article>
                    <p className="mt-auto text-[#9FA6B2] text-[16px] font-Jakarta-medium ">Publiée le 05/05/2025</p>
                </div>
            </section>

            <section className="w-1/2">
                <h2 className="text-[24px] font-Jakarta-extra-bold mb-3 ">Résumé de l’offre</h2>
                <article className="flex mb-3">
                    <p className="flex bg-white px-2 py-3 mr-2 rounded-[.6rem] ">
                        <Icon name='calendrier' />
                        <span className="ml-2">Date de début : {annonce.startDate} </span>
                    </p>
                    <p className="flex bg-white px-2 py-3 rounded-[.6rem]">
                        <Icon name='calendrier' />
                        <span className="ml-2">Alternance de {annonce.duration} </span>
                    </p>
                </article>
                <p className="flex bg-white px-2 py-3 rounded-[.6rem] w-max ">
                    <Icon name='calendrier' />
                    <span className="ml-2">Secteur : {annonce.secteurActivity} </span>
                </p>
                <h2 className="text-[24px] font-Jakarta-extra-bold mb-3 mt-8">Tes missions</h2>
                <ul className="list-disc">
                    {annonce.missions.map((mission, index) => (
                        <li key={index} className="ml-12">{mission}</li>
                    ))}
                </ul>
                <h2 className="text-[24px] font-Jakarta-extra-bold  mb-3 mt-8">Profil recherché</h2>
                <p>{annonce.profile}</p>
                <h2 className="text-[24px] font-Jakarta-extra-bold mb-3 mt-8">A propos de Hive2Work</h2>
                <p>{annonce.companyDescription}</p>
                <h2 className="text-[24px] font-Jakarta-extra-bold  mb-3 mt-8">Tes avantages</h2>
                <ul className="list-disc">
                    {annonce.avantages.map((avantage, index) => (
                        <li key={index} className="ml-12">{avantage}</li>
                    ))}
                </ul>
            </section>
        </div>

        <button className="cursor-pointer absolute left-[96%] top-[6%]" onClick={()=>setPopupVisualAnnonce(false)}>
            <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.5026 50.4168C40.1068 50.4168 50.4193 40.1043 50.4193 27.5002C50.4193 14.896 40.1068 4.5835 27.5026 4.5835C14.8984 4.5835 4.58594 14.896 4.58594 27.5002C4.58594 40.1043 14.8984 50.4168 27.5026 50.4168Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.0234 33.9855L33.9943 21.0146" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M33.9943 33.9855L21.0234 21.0146" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
        </>
    )
}

export default AnnonceDetail;