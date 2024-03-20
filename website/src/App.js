import InfoRow from "./components/infoRow"
import ImageGallery from "./components/imageGallery"
export default function App() {


  return (
    <div>
      <div className="bg-stone-200">
        <div className="flex justify-center">
          <h3 className="flex text-4xl mt-20 font-kode">
            Teresa Shao 
          </h3>
        </div>
        <div className="mt-10"> </div>
        <p className = "absolute ml-32 mr-24 md:mx-28 lg:mx-40 text-2xl mt-1 font-kode">hello world! </p>
        <InfoRow image_src = "./tetris-1.png"/>
        <div className="ml-32 ml:flex lg:flex ml:mx-28 lg:ml-40 mr-20 font-mono"> 
          <div className = "ml:w-3/5 lg:w-3/5">
            <p>I am a sophmore at Columbia University studying Computer Science.  Currently, I am a software engineering intern at MeetKai. On campus, I am a teaching assistant for COMS 3157: Advanced Programming in C, and a research assistant at Columbia Speech Lab where my work is focused on natural language processing. </p>
            <br></br>
            <p>I am from Shanghai and the SF Bay Area. In my free time, I enjoy hiking, design, and the culinary arts!</p>
            <br></br>
            <p>You can find me on GitHub and LinkedIn. Feel free to reach out via email!</p>
          </div>
          <div className="w-4/5 ml:w-2/5 lg:w-2/5 mt-0 mr-0 align-middle justify-center">
            <img src="portrait.png" alt="portrait" className="scale-90 w-4/5 aspect-square"></img>
          </div>
        </div>


        <div className="mt-10"> </div>
        <p className = "absolute ml-32 mt-2 text-2xl font-kode">experience</p>
        <InfoRow image_src = "./tetris-2.png"/>
        <p className="mx-32 mt-0"> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div className="mt-10"> </div>
        <p className = "absolute ml-32 mt-4 text-2xl font-kode">projects</p>
        <InfoRow image_src = "./tetris-3.png"/>
        <p className="mx-32 mt-0"> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div className="mt-10"> </div>
        <p className = "absolute ml-32 mr-24 md:mx-28 lg:mx-40 text-2xl mt-8 font-kode">courses</p>
        <InfoRow image_src = "./tetris-4.png"/>
        <p className="ml-32 mr-24 md:mx-28 lg:mx-40 font-mono mt-4 text-slate-600"> 
          Computer Science
        </p>
        <p className="mx-32 mr-2 mt-0 font-mono "> 
          ❧ Data Structures in Java
        </p>
        <p className="mx-32 mr-2 mt-0 font-mono "> 
          ❧ Advanced Programming in C
        </p>
        <p className="mx-32 mr-2 mt-0 font-mono "> 
          ❧ Introduction to Databases 
        </p>
        <p className="mx-32 mr-2 mt-0 font-mono "> 
          ❧ Discrete Math 
        </p>
        <p className="mx-32 mr-2 mt-0 font-mono "> 
          ❧ Linear Algebra
        </p>
        <p className="mx-32 mr-2 mt-0 font-mono "> 
          ❧ Multivariable Calculus
        </p>
        <p className="mx-32 mr-2 mt-0 font-mono "> 
          ❧ Calculus-Based Statistics
        </p>
        
        <p className="ml-32 mr-24 md:mx-28 lg:mx-40 font-mono mt-4 text-slate-600"> 
          Others!
        </p>
        <p className="mx-32 mr-2 mt-0 font-mono "> 
          ❧ Principles of Economics
        </p>
        <p className="mx-32 mr-2 mt-0 font-mono "> 
          ❧ Intermediate Macroeconomics
        </p>
        <p className="mx-32 mr-2 mt-0 font-mono "> 
          ❧ Latin I
        </p>
        
        <div className="mt-20"> </div>
        <p className="ml-32 mr-24 md:mx-28 lg:mx-40 font-kode mt-10 text-2xl"> 
          contact info
        </p>
        <div className="grid grid-rows-3 mx-28 pb-72">
          <a href="https://www.linkedin.com/in/teresa-shao/" target ="_blank">
            <div className="m-2 flex items-center">
              <img src="./linkedin.png" className="h-6 w-6 m-2" alt="LinkedIn Logo"></img>
              <p className="pl-4 mt-1 text-xl font-mono">Teresa Shao</p>
            </div>
          </a>
          <a href="https://github.com/teresashao" target ="_blank">
            <div className="m-2 flex items-center">
              <img src="./github.svg" className="h-6 w-6 m-2" alt="GitHub Logo"></img>
              <p className="pl-4 mt-1 text-xl font-mono">teresashao</p>
            </div>
          </a>
          <a href="mailto:ts3488@columbia.edu">
            <div className="m-2 flex items-center">
              <img src="./email.webp" className="h-6 w-6 m-2" alt="Email Logo"></img>
              <p className="pl-4 mt-1 text-xl font-mono">ts3488@columbia.edu</p>
            </div>
          </a>
        </div>

        <div>
          <ImageGallery />
        </div>
      </div>
    
    </div>
  )
}

      {/*
        <img className="sticky top-0 mx-12 w-10" src="./tetris-1.png" alt="tetris-1"></img>
        <div className="absolute top-24 mt-6 mb-4 ml-28 text-base font-kode">
          <h2 className="text-base font-kode">
            About Me
          </h2>
          <p className="text-base font-kode">
            Description
          </p>
        </div>

        <img className="sticky top-0 mx-12 w-10" src="./tetris-2.png" alt="tetris-1"></img>
        <div className="absolute top-48 mt-6 mb-4 ml-28 text-base font-kode">
          <h2 className="text-base font-kode">
            About Me
          </h2>
          <p className="text-base font-kode">
            Description
          </p>
        </div>

        <img className="sticky top-0 mx-12 w-10" src="./tetris-3.png" alt="tetris-1"></img>
        <div className="absolute top-96 mt-6 mb-4 ml-28 text-base font-kode h-screen">
          <h2 className="text-base font-kode">
            About Me
          </h2>
          <p className="text-base font-kode">
            Description
          </p>
  </div> */}