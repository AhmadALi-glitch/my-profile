
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFacebookF, faVuejs } from "@fortawesome/free-brands-svg-icons";

import { useSpring } from "@react-spring/web";
import { useRef } from "react";

import { animated } from "@react-spring/web";

export default function() {

    const vueProjectsContainer = useRef(null!);

    const [springs, api] = useSpring( () => ({
        container: vueProjectsContainer.current,
        from: {
            width: '0px',
            height: '0px',
            position: 'absolute',
            top: '0px',
            left: '0px',
            display: 'none'
        },
    }));

    const openProjectsModal = () => {
        console.log("resizing")
        api.start({
            to: {
                width: '100px',
                height: '100px',
                position: 'absolute',
                top: '1px',
                left: '1px',
                display: 'flex'
            }
        })
    }

    const closeProjectModal = () => {
        console.log("resizing")
        api.start({
            to: {
                width: '1px',
                height: '1px',
                position: 'absolute',
                top: '0px',
                left: '0px',
                display: 'none'
            }
        })
    }

    return (
        <>
            <h1 className="text-secondary font-handwritten xsm:text-4xl sm:text-5xl md:text-8xl">My Experiences:</h1>
            <div className="text-secondary font-handwritten xsm:text-2xl sm:text-3xl md:text-4xl md:pt-5">
                after 1 year of self study i applied for a startup business solution company
                <a href="https://www.facebook.com/UpdateCompany.sy" target="_blank" className="underline pl-2 pr-2 gap-2 ">
                    Update
                    <FontAwesomeIcon icon={faFacebookF} size="xs" className="ml-2 mr-2" />
                </a>job as vueJs frontend developer . they accepted me and i worked with them for 2 years ..

                <div className="text-2xl pt-16 mt-4 pl-4 flex flex-row items-center" style={{
                    borderLeft: '1px solid #eee'
                }}>I became well skilled in working in agile method with small to medium-size projects</div>

                <div className="text-2xl mt-4 pl-4 flex flex-row items-center" style={{
                    borderLeft: '1px solid #eee'
                }}>became a master at javascript and typescript</div>

                <div className="text-2xl mt-4 pl-4 flex flex-row items-center relative" style={{
                    borderLeft: '1px solid #eee'
                }}>

                    and professional in working in vuejs
                    <FontAwesomeIcon icon={faVuejs} size="xs" className="pt-2 pl-2 relative" />

                </div>
 
                <div className="text-2xl mt-4 pl-4 flex flex-row items-center" style={{
                    borderLeft: '1px solid #eee'
                }}>
                    Expert at css
                </div>

                <div className="text-2xl pb-20 mt-4 pl-4 flex flex-row items-center" style={{
                    borderLeft: '1px solid #eee'
                }}>
                    gained skills in backend development in restful api using laravel and bit of nodejs
                </div>

            </div>
        </>
    )
}