import calIcon from './images/icon-calculator.svg';
import karIcon from './images/icon-karma.svg';
import supIcon from './images/icon-supervisor.svg';
import teaIcon from './images/icon-team-builder.svg';

function App() {
  return (
    <main className="font-poppins min-h-screen bg-gray-100 pt-10 grid place-content-center">
      <section className="w-80 sm:w-auto mb-12 text-center text-sky-900">
        <h1 className="text-2xl sm:text-4xl mb-2 font-light">Reliable, efficient delivery</h1>
        <h1 className="text-2xl sm:text-4xl font-semibold">Powered by Technology</h1>
        <p className="font-light sm:w-3/5 mt-4 mx-auto">
          Our Artificial Intelligence powered tools use millions of project data points 
          to ensure that your project is successful
        </p>
      </section>
      <section className='w-80 sm:w-auto relative sm:mt-32 sm:mb-[25rem]'>
        <div className='sm:absolute sm:-left-[9rem] mb-8 sm:mb-0 text-sky-900 w-80 sm:w-96 h-60 grid bg-white border-t-2 border-t-cyan-400 p-6 rounded shadow-xl sm:shadow-2xl'>
          <h2 className='font-semibold mb-2'>Supervisor</h2>
          <p className='font-light'>Monitors activity to identify project roadblocks</p>
          <div className='flex justify-end '>
            <img src={supIcon} alt="" />
          </div>
        </div>
        <div className='sm:absolute sm:-top-[8rem] sm:left-[16rem] mb-8 sm:mb-0 text-sky-900 w-80 sm:w-96 h-60 grid bg-white border-t-2 border-t-red-500 p-6 rounded shadow-xl sm:shadow-2xl'>
          <h2 className='font-semibold mb-2'>Team Builder</h2>
          <p className='font-light'>Scans our talent network to create the optimal team for your project</p>
          <div className='flex justify-end '>
            <img src={teaIcon} alt="" />
          </div>
        </div>
        <div className='sm:absolute sm:-bottom-[24rem] sm:left-[16rem] mb-8 sm:mb-0 text-sky-900 w-80 sm:w-96 h-60 grid bg-white border-t-2 border-t-orange-500 p-6 rounded shadow-xl sm:shadow-2xl'>
          <h2 className='font-semibold mb-2'>Karma</h2>
          <p className='font-light'>Regularly evaluates our talent to ensure quality</p>
          <div className='flex justify-end '>
            <img src={karIcon} alt="" />
          </div>
        </div>
        <div className='sm:absolute sm:-top-0 sm:-right-[9rem] mb-8 sm:mb-0 text-sky-900 w-80 sm:w-96 h-60 grid bg-white border-t-2 border-t-blue-700 p-6 rounded shadow-xl sm:shadow-2xl'>
          <h2 className='font-semibold mb-2'>Calculator</h2>
          <p className='font-light'>Uses data from past projects to provide better delivery estimates</p>
          <div className='flex justify-end '>
            <img src={calIcon} alt="" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
