import './App.css';
import PersonalPhoto from './components/PersonalPhoto';
import TopicDescriptionPhrase from './components/TopicDescriptionPhrase';
import ContactMe from './components/ContactMe';
import AboutMe from './components/AboutMe';
import MyExperience from './components/MyExperience';

import { useInView } from 'react-intersection-observer';
import { animated } from '@react-spring/web'
import { useEffect, useRef } from 'react';
import Readings from './components/Readings';
import NextPlan from './components/NextPlan';
import Interests from './components/Interests';

/*

  todo: 1. create responsive container for 2 sizes : large and small under App Component inside of it create 2 components . side for the picture compoennt . another is for info component . percentage is 35% for 65%

  todo: 2. create the separator line between the two components . and handle it's (height, width) reponsively

  todo: 3. customize theme colors in tailwind.config.js

  todo: 4. create personal photo component and design it

  todo: 5. import fonts and icons libraries

  todo: 6. design photo side responsively
        |
        todo: 6.1 set screen sized configurations -- done
        todo: 6.2 height of the 2 sides (photo, description) -- done
        todo: 6.3 photo -- done
        todo: 6.4 describe phrase --done
        todo: 6.5 contact icons -- done

  todo: 7. design articles side responsively -- done

  todo: 8. create the state of the y scroll
    |
    todo: 8.1 test the react-intersection-observer

*/

enum SECTIONS {
  ABOUT_ME = 0,
  MY_EXPERIENCE = 1,
  READINGS = 2,
  NEXT_PLAN = 3,
  INTERESTS = 4
}

function App() {
  
  const sectionsRef = useRef(null!);

  const { ref: aboutMeRef, inView: aboutMeSectionVisibility } = useInView({threshold: 0.1, initialInView: true});

  const { ref: myExperienceRef, inView: myExperienceSectionVisibility} = useInView({threshold: 0.1, initialInView: false});
  
  const { ref: readingsRef, inView: readingsSectionVisibility } = useInView({threshold: 0.1, initialInView: false});
  
  const { ref: nextPlanRef, inView: nextPlanSectionVisibility } = useInView({threshold: 0.1, initialInView: false});
  
  const { ref: interestsRef, inView: interestesSectionVisibility } = useInView({threshold: 0.1, initialInView: false});

  const scrollYProgress = useRef(SECTIONS.ABOUT_ME);

  useEffect(() => {
    if(myExperienceSectionVisibility) {
      scrollYProgress.current = SECTIONS.MY_EXPERIENCE;
    }
  }, [myExperienceSectionVisibility]);

  useEffect(() => {
    if(aboutMeSectionVisibility) {
      scrollYProgress.current = SECTIONS.ABOUT_ME;
    }
  }, [aboutMeSectionVisibility])

  useEffect(() => {
    if(nextPlanSectionVisibility) {
      scrollYProgress.current = SECTIONS.NEXT_PLAN;
    }
  }, [nextPlanSectionVisibility])

  useEffect(() => {
    if(readingsSectionVisibility) {
      scrollYProgress.current = SECTIONS.READINGS;
    }
  }, [readingsSectionVisibility])

  useEffect(() => {
    if(interestesSectionVisibility) {
      scrollYProgress.current = SECTIONS.INTERESTS;
    }
  }, [interestesSectionVisibility])
  
  return (
    <>
      {/* main container */}
      <div className='bg-primary-diagonal-pattern bg-secondary pt-3 pr-3 pl-3 pb-3 w-screen h-screen'>

        {/* inner container */}
        <div className="shadow-flat h-full w-full overflow-hidden rounded-md flex items-center flex-col md:flex-row text-black">

          {/* photo side*/}
          <div className='xsm:basis-[25%]  sm:basis-[30%] md:basis-[50%] md:min-w-96 w-full h-full flex flex-row md:flex-col bg-primary'>

            <div className="xsm:basis-[25%] sm:basis-[25%] md:basis-[50%] flex justify-center items-center">
              <PersonalPhoto />
            </div>

            <div className="xsm:basis-[75%] xsm:min-h-40 sm:basis-[75%] md:basis-[50%] flex flex-col xsm:justify-start xsm:items-start md:justify-between">

              <div className="basis-[60%] xsm:pt-2 pr-3 overflow-hidden xsm:pl-2">
                <TopicDescriptionPhrase sectionState={scrollYProgress.current} />
              </div>

              <div className="basis-[45%] xsm:pr-2 flex items-end justify-end w-full pb-2">
                <ContactMe />
              </div>

            </div>

          </div>

          {/* separator */}
          <div className="basis-13 overflow-hidden" >

            <animated.div
              style={{
                backgroundPosition: "top",
                backgroundColor: "white"
              }}
              className='basis-10 size-full md:pt-14 md:pb-14 flex items-center justify-around md:flex-col md:gap-32 xsm:gap-6 xsm:p-3 md:p-0 xsm:text-sm sm:text-2xl font-handwritten text-4xl'
            >

              <div className="creative md:rotate-90">Creative</div>
              <div className="creative md:rotate-90 ">Productive</div>
              <div className="creative md:rotate-90 font-classic">Reader</div>
              <div className="creative md:rotate-90 ">Visioner</div>

            </animated.div>

          </div>

          {/* sections */}
          <div ref={sectionsRef} className='bg-secondary scroll-smooth snap-y snap-mandatory basis-[100%] pl-4 pt-4 pt-5 w-full h-full overflow-auto'>

            <div ref={aboutMeRef}  className="h-fit min-h-full snap-center pt-20">
              <AboutMe />
            </div>

            <div ref={myExperienceRef} className='h-fit min-h-full snap-center  pt-20'>
              <MyExperience />
            </div>

            <div ref={readingsRef} className='h-fit snap-center min-h-full  pt-20'>
              <Readings />
            </div>

            <div ref={nextPlanRef} className='h-fit snap-center min-h-full  pt-20'>
              <NextPlan />
            </div>

            <div ref={interestsRef} className='h-fit snap-center min-h-full pt-20'>
              <Interests />
            </div>

          </div>

        </div>
        
      </div>
    </>
  )

}

export default App
