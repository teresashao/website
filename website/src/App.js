export default function App() {
  return (
    <div className="bg-stone-200 h-screen">
      <div className= "flex-col justify-center">
        <div className="flex justify-center">
          <h3 className="flex text-3xl mt-20 font-kode">
            Teresa Shao 
          </h3>
        </div>
        
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
        </div>
  
      </div>
    </div>
  )
}