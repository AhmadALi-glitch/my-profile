import './App.css';
import PersonalPhoto from './components/PersonalPhoto';
import TopicDescriptionPhrase from './components/TopicDescriptionPhrase';
import ContactMe from './components/ContactMe';

/*

  todo: 1. create responsive container for 2 sizes : large and small under App Component inside of it create 2 components . side for the picture compoennt . another is for info component . percentage is 35% for 65%

  todo: 2. create the separator line between the two components . and handle it's (height, width) reponsively

  todo: 3. customize theme colors in tailwind.config.js

  todo: 4. create personal photo component and design it

  todo: 5. import fonts and icons libraries

  todo: 6. design photo side responsively
        |
        todo: 6.1 set screen sized configurations -- done
        todo: 6.2 height of the 2 sides (photo, description)
        todo: 6.3 photo
        todo: 6.4 describe phrase
        todo: 6.5 contact icons 

*/

function App() {

  return (
    <>
      {/* main container */}
      <div className='bg-secondary pt-3 pr-3 pl-3 pb-3 w-screen h-screen'>

        {/* inner container */}
        <div className="shadow-flat h-full w-full rounded-md flex items-center flex-col md:flex-row text-black">

          {/* photo side*/}
          <div className='xsm:basis-[16%] sm:basis-[25%] md:basis-[30%] w-full h-full flex flex-row md:flex-col bg-primary'>

            <div className="xsm:basis-[25%] sm:basis-[25%] md:basis-[50%] flex justify-center items-center">
              <PersonalPhoto />
            </div>

            <div className="xsm:basis-[75%] sm:basis-[75%] md:basis-[50%] flex flex-col xsm:justify-start xsm:items-start md:justify-between">

              <div className="basis-[60%] xsm:pt-2 pr-3 xsm:pl-2">
                <TopicDescriptionPhrase />
              </div>

              <div className="basis-[45%] xsm:pr-2 flex items-end justify-end w-full pb-2">
                <ContactMe />
              </div>

            </div>

          </div>

          {/* separator */}
          <div className='basis-[0.2%] bg-secondary size-full'></div> 

          {/* topics */}
          <div className='basis-[65%] bg-secondary w-full h-full'>
            <h1 className="text-secondary font-handwritten pl-2 pt-11 text-8xl"></h1>
          </div>

        </div>
        
      </div>
    </>
  )

}

export default App
