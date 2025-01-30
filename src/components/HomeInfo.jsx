import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Adrian Nugroho</span>
        <br />
        A Software Engineer 
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center py-2 px-5'>
        Getting to know me better. 
        </p>

        <Link to='/about' className=' neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-3 h-3 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
           
        Let's take a look at the projects I've created.
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box '>
      <p className='font-medium sm:text-xl text-center w-80  py-2 px-5'>
      Contact me. 
      </p>

      <Link to='/contact' className=' w-7 neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4  object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
