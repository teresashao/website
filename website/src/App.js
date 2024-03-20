import InfoRow from "./components/infoRow"
import ImageGallery from "./components/imageGallery"
export default function App() {


  return (
    <div>
      <div className="bg-stone-200">
        <div className="flex justify-center">
        <h3 className="text-5xl mt-20 font-bric font-bold absolute text-amber-300">
          Teresa Shao 
        </h3>
        <h3 className="text-5xl mt-20 ml-2 font-bric font-bold absolute">
          Teresa Shao 
        </h3>
        </div>
        <div className="mt-40"> </div>
        <p className = "absolute ml-32 mr-24 md:mx-28 lg:mx-40 text-2xl mt-1 font-kode">hello world! </p>
        <InfoRow image_src = "./tetris-1.png"/>
        <div className="ml-32 ml:flex lg:flex ml:mx-28 lg:ml-40 mr-20 font-mono"> 
          <div className = "ml:w-3/5 lg:w-3/5">
            <p>I am a sophomore at Columbia University studying Computer Science.  Currently, I am a software engineering intern at MeetKai. On campus, I am a teaching assistant for COMS 3157: Advanced Programming in C, and a research assistant at Columbia Speech Lab where my work is focused on natural language processing. </p>
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
        <p className = "absolute ml-32 mr-24 md:mx-28 lg:mx-40 mt-2 text-2xl font-kode">experience</p>
        <InfoRow image_src = "./tetris-2.png"/>
        <p className="ml-32 mr-24 md:mx-28 lg:mx-40 font-mono mt-1 text-slate-600"> 
          SWE Internship @ MeetKai 
        </p>
        <div className="ml-32 mr-24 md:mx-28 lg:mx-40 font-mono text-sm">
          <p> 
            ❧ Implement scalable components for dynamic 3D scenes to be employed in metaverse environments that reach over 75M users, including a synchronized mini-map and other user interface features
          <p> 
          </p>
            ❧ Optimized object rendering by 10% through automating asset tools and performance warning corrections using Python scripts and generating flexible add-on features for customizing Blender
          </p>
        </div>

        <p className="ml-32 mr-24 md:mx-28 lg:mx-40 font-mono mt-4 text-slate-600"> 
          NLP Research Assistant @ Columbia Speech Lab 
        </p>
        <div className="ml-32 mr-24 md:mx-28 lg:mx-40 font-mono text-sm">
          <p> 
            ❧ Assess emotion-detection pipelines for accented oral speech by applying machine learning models under the mentorship of Professor Julia Hirschberg and PhD Student Siyan "Sylvia" Li
          <p> 
          </p>
            ❧ Contributed to research paper on enhancing the empathy levels of educational chat-bots, specifically spearheading the data analysis of 1000+ speech entries and communicating findings in the paper
          </p>
        </div>

        <p className="ml-32 mr-24 md:mx-28 lg:mx-40 font-mono mt-4 text-slate-600"> 
          Teaching Assistant- Advanced Programming in C
        </p>
        <div className="ml-32 mr-24 md:mx-28 lg:mx-40 font-mono text-sm">
          <p> 
            ❧ Organize office hours and review sessions on Linux systems programming, TCP/IP networking, and the C-programming language to assist the learning of 300+ students
          <p> 
          </p>
            ❧ Grade coding assignments, assess exams, and update automated grading scripts in a timely manner
          </p>
        </div>

        <div className="mt-10"> </div>
        <p className = "absolute ml-32 mr-24 md:mx-28 lg:mx-40 mt-4 text-2xl font-kode">projects</p>
        <InfoRow image_src = "./tetris-3.png"/>
        <p className="ml-32 mr-24 md:mx-28 lg:mx-40 font-mono mt-1 text-slate-600"> 
          Journify | Flask, ReactJS, Tailwind CSS
        </p>
        <div className="ml-32 mr-24 md:mx-28 lg:mx-40 font-mono text-sm">
          <p> 
            ❧ AI journaling and guided-meditation web app with live analysis of 28 different emotions
          </p> 
          <a href="https://youtu.be/7MD04NmlMmw" target= "_blank" className="underline hover: shadow-sm" >
          ❧ Link to video demo
          </a>
        </div>

        <p className="ml-32 mr-24 md:mx-28 lg:mx-40 font-mono mt-2 text-slate-600"> 
          Sunscreen Reminder | Python, Beautiful Soup
        </p>
        <div className="ml-32 mr-24 md:mx-28 lg:mx-40 font-mono text-sm">
          <p> 
            ❧ Conducts web scraping of UV indices and sends automatic email reminders about wearing sunscreen based on location 
          </p> 
        </div>

        <div className="mt-8"> </div>
        <p className = "absolute ml-32 mr-24 md:mx-28 lg:mx-40 text-2xl mt-8 font-kode">courses</p>
        <InfoRow image_src = "./tetris-4.png"/>
        <p className="ml-32 mr-24 md:mx-28 lg:mx-40 font-mono mt-4 text-slate-600"> 
          CS-Math
        </p>
        <div className="ml-32 mr-24 md:mx-28 lg:mx-40 font-mono">
          <p> 
            ❧ Data Structures in Java
          <p> 
          </p>
            ❧ Advanced Programming in C
          </p>
          <p> 
            ❧ Introduction to Databases 
          </p>
          <p> 
            ❧ Discrete Math 
          </p>
          <p> 
            ❧ Linear Algebra
          </p>
          <p> 
            ❧ Multivariable Calculus
          </p>
          <p> 
            ❧ Calculus-Based Statistics
          </p>
        </div>
        
        <p className="ml-32 mr-24 md:mx-28 lg:mx-40 font-mono mt-4 text-slate-600"> 
          Others!
        </p>
        <div className="ml-32 mr-24 md:mx-28 lg:mx-40 font-mono">
          <p> 
            ❧ Principles of Economics
          </p>
          <p> 
            ❧ Intermediate Macroeconomics
          </p>
          <p> 
            ❧ Latin I
          </p>
        </div>
        
        <div className="mt-20"> </div>
        <div className="flex-col justify-between">
          <div className="flex"> {/* at one point need to adjust for screen size here */}
            <div className="">
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

          </div>
          
          <div className="">
            <p className = "text-2xl font-kode mt-10">for fun</p>
            <p className="font-mono mt-1 text-slate-600"> 
              designing - Columbia Women's Business Society @columbiacwbs 
            </p>
            <p className="font-mono mt-1 text-slate-600"> 
              crumbs of my cooking!
            </p>

            <div className="mt-10"> </div>
            <ImageGallery></ImageGallery>
          </div>
        </div>
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