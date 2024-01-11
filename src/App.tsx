import './App.css';

/*

  todo: 1. create responsive container for 2 sizes : large and small under App Component inside of it create 2 components . side for the picture compoennt . another is for info component . percentage is 35% for 65%

  todo: 2. create

*/

function App() {

  return (
    <>
      <div className='main-page pt-3 pr-3 pl-3 pb-3 w-screen h-screen bg-red-300 flex flex-col md:flex-row text-black'>
        <div className='basis-[35%] bg-green-50'>35</div>
        <div className='basis-[65%] bg-yellow-400'>65</div>
      </div>
    </>
  )

}

export default App
