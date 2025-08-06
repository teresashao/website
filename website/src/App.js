import InfoRow from "./components/infoRow"
import ImageGallery from "./components/imageGallery"
export default function App() {


	return (

		<div className="">
			<div className="relative h-32">
				<h3 className="absolute left-1/2 top-20 transform -translate-x-1/2 text-5xl font-bric font-bold text-amber-300">
					Teresa Shao
				</h3>
				<h3 className="absolute left-1/2 top-20 transform translate-x-[-130px]  translate-y-[-2px] text-5xl font-bric font-bold">
					Teresa Shao
				</h3>
			</div>


			<div className="mt-20"> </div>
			<p className="absolute ml-32 mr-24 md:mx-28 lg:mx-40 text-2xl mt-1 font-kode">hello world! </p>
			<InfoRow image_src="website/tetris-1.png" />

			<div className="flex flex-col lg:flex-row items-start justify-center gap-12 ml-32 mr-24 md:mx-28 lg:mx-40 font-mono mt-4">
				<div className="lg:w-3/5">
					<p>
						I am a senior at Columbia University studying Computer Science. Currently, I am a software engineering intern at Meta, and I have previously worked at Scaleflux and Meetkai. On campus, I have served as a teaching assistant for several systems programming classes, including Operating Systems, Fundamentals of Computer Systems, and Advanced Programming in C. I was also previously a research assistant at Columbia Speech Lab where my work is focused on natural language processing.
					</p>
					<br />
					<p>
						I am from Shanghai and now live in New York City. In my free time, I enjoy nature, art exhibits, design, and <a href="#cooking" className="underline">cooking</a>!
					</p>
					<br />
					<p>
						You can find me on <a href="https://github.com/teresashao" target="_blank" className="underline">GitHub</a> and <a href="https://www.linkedin.com/in/teresa-shao/" target="_blank" className="underline">LinkedIn</a>. Feel free to reach out via <a href="mailto:ts3488@columbia.edu" className="underline">email</a>!
					</p>
				</div>

				<div className="lg:w-2/5 flex justify-center">
					<img
						src="website/portrait.png"
						alt="portrait"
						className="w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 drop-shadow-xl"
					/>
				</div>
			</div>

			<div className="mt-10"> </div>
			<p className="absolute ml-32 mr-24 md:mx-28 lg:mx-40 mt-2 text-2xl font-kode">experience</p>
			<InfoRow image_src="website/tetris-2.png" />
			<p className="ml-32 mr-24 md:mx-28 lg:mx-40 font-mono mt-4 text-slate-600">
				SWE Internship @ Meta
			</p>
			<div className="ml-32 mr-24 md:mx-28 lg:mx-40 font-mono text-sm">
				<p>
					❧ Built a data pipeline and Chronos batch job in C++ to train a model predicting transaction authorization rates for payment routing
				</p>
				<p>
					❧ Launched the machine-learning-based routing system to production, now serving 5% of Meta’s transaction volume
				</p>
				<p>
					❧ Designed and deployed a new routing tree type with FX-related and confidence-level optimizations using a Python script
				</p>
			</div>
			<p className="ml-32 mr-24 md:mx-28 lg:mx-40 font-mono mt-4 text-slate-600">
				SWE Internship @ ScaleFlux
			</p>
			<div className="ml-32 mr-24 md:mx-28 lg:mx-40 font-mono text-sm">
				<p>
					❧ Developed NVMe SSD firmware commands in C++ to improve power efficiency (3x performance per Watt) and achieve 14 GB/s read and 11 GB/s write throughput
				</p>
				<p>
					❧ Conducted CPU performance profiling to identify bottlenecks and resolve integration issues with flexible data placement logic
				</p>
				<p>
					❧ Improved Python unit tests by incorporating updated NVMe protocols into the validation codebase
				</p>
			</div>

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
			<p className="absolute ml-32 mr-24 md:mx-28 lg:mx-40 mt-4 text-2xl font-kode">projects</p>
			<InfoRow image_src="website/tetris-3.png" />
			<p className="ml-32 mr-24 md:mx-28 lg:mx-40 font-mono mt-1 text-slate-600">
				Journify | Flask, ReactJS, Tailwind CSS
			</p>
			<div className="ml-32 mr-24 md:mx-28 lg:mx-40 font-mono text-sm">
				<p>
					❧ AI journaling and guided-meditation web app with live analysis of 28 different emotions
				</p>
				<a href="https://youtu.be/7MD04NmlMmw" target="_blank" className="underline hover: shadow-sm" >
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
			<p className="absolute ml-32 mr-24 md:mx-28 lg:mx-40 text-2xl mt-8 font-kode">courses</p>
			<InfoRow image_src="website/tetris-4.png" />
			<p className="ml-32 mr-24 md:mx-28 lg:mx-40 font-mono mt-4 text-slate-600">
				CS-Math
			</p>
			<div className="ml-32 mr-24 md:mx-28 lg:mx-40 font-mono">
				<p>
					❧ Operating Systems
				</p>
				<p>
					❧ C++ for C Programmers
				</p>
				<p>
					❧ Fundamentals of Computer Systems
				</p>
				<p>
					❧ Innovation and Design Lab
				</p>
				<p>
					❧ Artificial Intelligence
				</p>
				<p>
					❧ Natural Language Processing
				</p>
				<p>
					❧ User Interfaces Design
				</p>
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
							<a href="https://www.linkedin.com/in/teresa-shao/" target="_blank">
								<div className="m-2 flex items-center">
									<img src="website/linkedin.png" className="h-6 w-6 m-2" alt="LinkedIn Logo"></img>
									<p className="pl-4 mt-1 text-xl font-mono">Teresa Shao</p>
								</div>
							</a>
							<a href="https://github.com/teresashao" target="_blank">
								<div className="m-2 flex items-center">
									<img src="website/github.svg" className="h-6 w-6 m-2" alt="GitHub Logo"></img>
									<p className="pl-4 mt-1 text-xl font-mono">teresashao</p>
								</div>
							</a>
							<a href="mailto:ts3488@columbia.edu">
								<div className="m-2 flex items-center">
									<img src="website/email.webp" className="h-6 w-6 m-2" alt="Email Logo"></img>
									<p className="pl-4 mt-1 text-xl font-mono">ts3488@columbia.edu</p>
								</div>
							</a>
						</div>

					</div>

					<div className="">
						<p className="text-2xl font-kode mt-10">for fun</p>
						<p className="font-mono mt-1 text-slate-600">
							design stuff -- Columbia Women's Business Society @columbiacwbs
						</p>
						<p id="cooking" className="font-mono mt-1 text-slate-600">
							some of my cooking:
						</p>

						<div className="mt-10"> </div>
						<ImageGallery></ImageGallery>
					</div>
				</div>
			</div>

		</div>
	)
}
