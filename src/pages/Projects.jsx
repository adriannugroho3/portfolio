import { Link } from "react-router-dom";
import { home, krs, sebaranbsps, informasi, bankdesain, sebaranrusun, sikumbangdiy, tentang, logo } from "../assets/images";
import { CTA } from "../components";
import { projects, myprojects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text mb-5'>
        Dokumentasi{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
        My Project
        </span>
      </h1>

      <div className='mt-5 mb-5 flex flex-col gap-3 text-slate-500'>
        <p>
        The project documentation below is a website for the Balai Pelaksana Penyediaan Perumahan Jawa III, Division Klinik Rumah Swadaya.  
        </p>
      </div>


      {/* {myprojects.map((myproject) => ( */}

      <div class="flex  items-center justify-center [&:hover>div]:w-16 [&>div:hover]:w-full">
      
      <div class="group relative h-96 w-[60rem] cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
        <img class="h-full  object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src={home} alt="" />
        <div class="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
          <div class="absolute inset-x-5 bottom-6">
            <div class="flex gap-3 text-white">
             
              <div>
                <p class="mt-5 text-gray-300">Klinik Rumah Swadaya</p>
              </div>
            </div>
         
          </div>
        </div>
      </div>

      <div class="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
        <img class="h-full w-full object-cover transition-all group-hover:w-full " src={sebaranbsps} alt="" />
      </div>

      <div class="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
        <img class="h-full w-full object-cover transition-all  group-hover:w-full " src={sebaranrusun} alt="" />
      </div>
      
      <div class="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
        <img class="h-full w-full object-cover transition-all  group-hover:w-full" src={sikumbangdiy} alt="" />
      </div>

      <div class="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
        <img class="h-full w-full object-cover transition-all  group-hover:w-full " src={bankdesain} alt="" />
      </div>

      <div class="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
        <img class="h-full w-full object-cover transition-all group-hover:w-full" src={informasi} alt="" />
      </div>

      <div class="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
        <img class="h-full w-full object-cover transition-all group-hover:w-full " src={tentang} alt="" />
      </div>

    
    </div>

      {/* ))} */}
    
      
      <h1 className='head-text mt-10 '>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

   

      <div className='flex flex-wrap mt-11 my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                 Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>


    </section>
  );
};

export default Projects;
