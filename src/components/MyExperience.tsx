
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons"; 
import { useEffect, useState } from "react";

export default function() {

    let [exp, setExp] = useState('agile')

    let experienceDiscription: {[key: string]: string[]} = {
        'agile' : ['working on erp systems', 'Pos, billing applications'],
        'js/ts': ['creating typed frontend applications', 'deep knowledge in javascript and its implementaion details'],
        'vue' : ['managing hundreds of sfc in vuejs', 'worked with popular ui libraries like quasar'],
        'css' : ['autent in creating complex shapes and ui', 'experienced with tailwind'],
        'backend': ['designing small-medium size databses', 'creating restful api\'s using expressjs framework', 'using ORM like prisma', 'deploying applications and databases', 'basic experience in graphql', 'basic experience in using linux '],
        'ui': ['it is a hobby'],
        'git': ['managing large codebases on git servers', 'branching, solving conflicts, stashing, configurations,ssh authentication']
    }

    useEffect(() => {console.log("exp")}, [exp])

    return (
        <>
            <h1 className="text-secondary font-handwritten xsm:text-4xl sm:text-5xl md:text-8xl">My Experiences:</h1>

            <div className="text-secondary mt-3  font-handwritten xsm:text-2xl sm:text-3xl md:text-4xl md:pt-5">
                <a href="https://www.facebook.com/UpdateCompany.sy" target="_blank" className="underline text-[30px] pl-2 pr-2 gap-2 ">
                    i worked for 2 years and a half for a business solution company called Update as frontend engineer
                </a>
                        
                <div className="wrapper flex items-center gap-3">

                    <div className="journies basis-[50%]">


                        <div onMouseOver={() => setExp('agile')} className="text-2xl pt-16 pl-4 flex flex-row gap-4 items-center" style={{
                            borderLeft: '1px solid #eee'
                        }}>

                            <FontAwesomeIcon color="#333" size="xs" icon={faHandPointer} />
                            I became well skilled in working in agile method with small to medium-size projects
                        </div>


                        <div onMouseOver={() => setExp('git')} className="text-2xl pt-4 pl-4 flex flex-row gap-4 items-center" style={{
                            borderLeft: '1px solid #eee'
                        }}>

                            <FontAwesomeIcon color="#333" size="xs" icon={faHandPointer} />
                            Skillfull Git User
                        </div>

                        <div onMouseOver={() => setExp('js/ts')} className="text-2xl mt-4 pl-4 flex flex-row gap-4 items-center" style={{
                            borderLeft: '1px solid #eee'
                        }}>
                            <FontAwesomeIcon color="#333" size="xs" icon={faHandPointer} />
                            became a master at javascript and typescript</div>

                        <div onMouseOver={() => setExp('vue')} className="text-2xl mt-4 pl-4 flex flex-row items-center gap-4 relative" style={{
                            borderLeft: '1px solid #eee'
                        }}>

                            <FontAwesomeIcon color="#333" size="xs" icon={faHandPointer} />
                            and professional in working in vuejs

                        </div>
            
                        <div onMouseOver={() => setExp('css')} className="text-2xl mt-4 pl-4 flex flex-row items-center gap-4 " style={{
                            borderLeft: '1px solid #eee'
                        }}>
                            <FontAwesomeIcon color="#333" size="xs" icon={faHandPointer} />
                            Expert at css
                        </div>

                        <div onMouseOver={() => setExp('backend')} className="text-2xl mt-4 pl-4 flex flex-row items-center gap-4" style={{
                            borderLeft: '1px solid #eee'
                        }}>
                            <FontAwesomeIcon color="#333" size="xs" icon={faHandPointer} />
                            gained skills in backend development in restful api using laravel and nodejs
                        </div>

                        <div onMouseOver={() => setExp('ui')} className="text-2xl mt-4 pl-4 flex flex-row items-center gap-4" style={{
                            borderLeft: '1px solid #eee'
                        }}>
                            <FontAwesomeIcon color="#333" size="xs" icon={faHandPointer} />
                            UI/UX Experiences
                        </div>
                    </div>

                    <div style={{transition: 'all ease 1s'}} className="tool-badge text-[25px] border-4 border-overflow rounded-lg p-4 basis-[50%]">
                        {
                            experienceDiscription[exp].map((exp) => {
                                return <li>{exp}</li>
                            })
                        }
                    </div>

                </div>
            </div>

        </>
    )
}
