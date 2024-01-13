import './App.css';
import PersonalPhoto from './components/PersonalPhoto';
import TopicDescriptionPhrase from './components/TopicDescriptionPhrase';
import ContactMe from './components/ContactMe';
import AboutMe from './components/AboutMe';
import MyExperience from './components/MyExperience';

import { useInView } from 'react-intersection-observer';
import { useScroll, animated, useSpring } from '@react-spring/web'
import { Ref, useEffect, useRef } from 'react';

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
  const scrollY = useRef(0);

  const { ref: aboutMeRef, inView: aboutMeSectionVisibility, entry: aboutMeSectionEntry } = useInView({threshold: 0.1, initialInView: true});

  const { ref: myExperienceRef, inView: myExperienceSectionVisibility, entry: myExperienceSectionEntry } = useInView({threshold: 0., initialInView: false});
  
  const { ref: readingsRef, inView: readingsSectionVisibility, entry: readingsSectionEntry } = useInView({threshold: 0.1, initialInView: false});
  
  const { ref: nextPlanRef, inView: nextPlanSectionVisibility, entry: nextPlanSectioEntry } = useInView({threshold: 0.1, initialInView: false});
  
  const { ref: interestsRef, inView: interestesSectionVisibility, entry: interestesSectionEntry } = useInView({threshold: 0.1, initialInView: false});

  // storing the scrollY State in the parent component
  // const {scrollYProgress} = useScroll({
  //   onChange:({value}) => {
  //     console.log("result on rest : ", value);
  //     if(value.scrollYProgress > 0.25) {
  //       scrollY.current = 1;
  //     } else {
  //       scrollY.current = 0;
  //     }
  //   },
  //   default: {
  //     immediate: true,
  //   },
  //   container: sectionsRef
  // })


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
      scrollYProgress.current = SECTIONS.ABOUT_ME;
    }
  }, [nextPlanSectionVisibility])

  useEffect(() => {
    if(readingsSectionVisibility) {
      scrollYProgress.current = SECTIONS.READINGS;
    }
  }, [readingsSectionVisibility])

  useEffect(() => {
    if(interestesSectionVisibility) {
      scrollYProgress.current = SECTIONS.ABOUT_ME;
    }
  }, [interestesSectionVisibility])

  
  return (
    <>
      {/* main container */}
      <div className='bg-primary-diagonal-pattern bg-secondary pt-3 pr-3 pl-3 pb-3 w-screen h-screen'>

        {/* inner container */}
        <div className="shadow-flat h-full w-full overflow-hidden rounded-md flex items-center flex-col md:flex-row text-black">

          {/* photo side*/}
          <div className='xsm:basis-[25%]  sm:basis-[30%] md:basis-[50%] w-full h-full flex flex-row md:flex-col bg-primary'>

            <div className="xsm:basis-[25%] sm:basis-[25%] md:basis-[50%] flex justify-center items-center">
              <PersonalPhoto />
            </div>

            <div className="xsm:basis-[75%] sm:basis-[75%] md:basis-[50%] flex flex-col xsm:justify-start xsm:items-start md:justify-between">

              <div className="basis-[60%] xsm:pt-2 pr-3 xsm:pl-2">
                <TopicDescriptionPhrase sectionsState={scrollYProgress.current} />
              </div>

              <div className="basis-[45%] xsm:pr-2 flex items-end justify-end w-full pb-2">
                <ContactMe />
              </div>

            </div>

          </div>

          {/* separator */}
          <div className='basis-20 bg-side size-full md:pt-14 md:pb-14 flex items-center justify-around md:flex-col md:gap-40'>
            <div className="creative md:rotate-90 ">creative</div>
            <div className="creative md:rotate-90 ">productive</div>
            <div className="creative md:rotate-90 ">reader</div>
            <div className="creative md:rotate-90 ">visioner</div>
          </div>

          {/* topics */}
          <div ref={sectionsRef} className='bg-secondary scroll-smooth snap-y snap-mandatory basis-[100%] pl-4 pt-5 w-full h-full overflow-auto'>

            <div ref={aboutMeRef}  className="h-dvh snap-center pt-20">
              <AboutMe />
            </div>

            <div ref={myExperienceRef} className='h-dvh snap-center  pt-20'>
              <MyExperience />
            </div>

          </div>

        </div>
        
      </div>
    </>
  )

}

export default App
