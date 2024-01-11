import './App.css';

/*

  todo: 1. create responsive container for 2 sizes : large and small under App Component inside of it create 2 components . side for the picture compoennt . another is for info component . percentage is 35% for 65%

  todo: 2. create the separator line between the two components . and handle it's (height, width) reponsively

  todo: 3.  customize theme colors in tailwind.config.js

*/

function App() {

  return (
    <>
      {/* main container */}
      <div className=' bg-secondary pt-3 pr-3 pl-3 pb-3 w-screen h-screen'>

        {/* inner container */}
        <div className="bg-primary shadow-flat h-full w-full overflow-hidden rounded-md flex items-center flex-col md:flex-row text-black">

          <div className='basis-[25%] md:basis-[35%] w-full h-full'>
            <h1 className="text-primary text-8xl">PRIMARY TEXT COLOR</h1>
          </div>
          <div className='basis-[0.2%] bg-secondary size-full'></div> 
          <div className='basis-[65%] bg-secondary w-full h-full'>
            <h1 className="text-secondary text-8xl">SECONDARY TEXT COLOR</h1>
          </div>

        </div>
        
      </div>
    </>
  )

}

export default App
