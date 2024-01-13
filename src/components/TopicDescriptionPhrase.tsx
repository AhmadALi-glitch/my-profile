
import { animated } from "@react-spring/web";
import { useSpring } from "@react-spring/web";
import { useEffect } from "react";

export default function({ sectionState }: { sectionState: number }) {

    const phrases = [
        'I Love My Job',
        'I Work Hard',
        'I Do Read',
        'I Never Stop',
        'I\'ll Do what it takes'
    ];

    const [springs, api ] = useSpring(() => ({}))

    useEffect(() => {
        api.start({
            from: {
                height: '0px',
                translateY: "-40px",
            }, 
            to: {
                height: '100px',
                translateY: '0px'
            } 
        })
    }, [sectionState])

    return(
        <>
            <div className='transition ease-in-out subpixel-antialiased xsm:text-2xl sm:text-5xl md:text-6xl text-5xl font-classic text-primary realtive'>
                {
                    phrases.map((phrase, phraseIndex) => {
                        return <div key={phraseIndex}>
                            <animated.div style={{...springs, transformOrigin: 'bottom'}} className={sectionState == phraseIndex ?  "" : "hidden"}>
                                {phrase}
                            </animated.div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

// todo: show just identical phrase with the section viewed
// todo: hide the not identical
// todo: on show trigger an animation (on sections state changes) 
