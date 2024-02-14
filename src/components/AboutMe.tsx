import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { faComputer } from "@fortawesome/free-solid-svg-icons";

export default function() {

    return (
        <>

            <h1 className="text-secondary font-handwritten xsm:text-4xl sm:text-5xl md:text-8xl">bit about me:</h1>

            <div className="text-secondary pt-5 font-handwritten xsm:text-2xl sm:text-3xl md:text-4xl">I Started learning programming since 2021 .. since then I'm using javascript..  I Live In Syria Tartus/Baniyas ,, I Enjoy spending time with family, friends and also the keyborad.. and i Can talk well in english .</div>

            <div className="text-4xl pb-12  text-secondary font-handwritten">

                {/* Certificates */}
                <div className="pt-10">
    
                    <div className="heading flex gap-2 items-center">
                        <FontAwesomeIcon className="text-secondary" size="2xs" icon={faCertificate}/> Certificates :
                    </div>
                    
                    <div className="certificates text-secondary pt-5 font-handwritten xsm:text-2xl sm:text-2xl md:text-3xl">
                        <ul className="list-disc pl-12">
                            <li>
                                Technical Deiploma At
                                <a className="text-primary pl-2 pr-2" href="https://tishreen.edu.sy/ar/Institute/Index/52/%D8%A7%D9%84%D9%85%D8%B9%D9%87%D8%AF-%D8%A7%D9%84%D8%AA%D9%82%D8%A7%D9%86%D9%8A-%D9%84%D9%84%D8%AD%D8%A7%D8%B3%D9%88%D8%A8">
                                    TCI
                                    <FontAwesomeIcon size="xs" icon={faLink} />    
                                </a>
                                In Tishreen University
                            </li>
                            
                        </ul>

                    </div>
                    <a href=""></a>
                </div>

                <div className="bg-primary text-primary pt-1 mt-10 pl-1 pb-5 rounded-md">
                    
                    <div className="heading flex gap-2 items-center">
                        <FontAwesomeIcon className="text-primary" size="2xs" icon={faComputer}/> some of my works :
                    </div>
                
                    <ul className=" list-disc flex flex-wrap text-primary gap-16  rounded-lg pl-10 mt-4 p-2 text-2xl">

                        <div className="vue-projects flex flex-col gap-5 ">
                            <div className="text-3xl">using vue</div>
                            <li>
                                <a href="https://updatecompany.net/" target="_blank" className="bg-primary rounded-md p-2 border-2 underline">https:// Update</a>
                            </li>
                        </div>

                        <div className="vue-projects flex flex-col gap-5">

                            <div className="text-3xl">figma sketches</div>

                            <li>
                                
                                <a href="https://www.figma.com/file/L0CUAZufuZaRn0Tv0k4H5w/Portfolio?type=design&mode=design&t=0PL4Ete8U25Z5Sc0-1" target="_blank" className="bg-primary rounded-md p-2 border-2 underline">figma sketch : my portfolio</a>

                            </li>

                            <li>
                                <a href="https://www.figma.com/file/KKRIzzHG4tovRBlDhyjJfW/Intellegence?type=design&mode=design&t=XrtWD3MCf2XV7cfe-1" target="_blank" className="bg-primary rounded-md p-2 border-2 underline">figma sketch : Intellegence</a>
                            </li>

                        </div>

                    </ul>
                </div>

            </div>
        </>
    )
}