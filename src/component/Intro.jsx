import Pangolin_Left from "../static_files/Pangolin_Left.png";
import Pangolin_Right from "../static_files/Pangolin_Right.png";
import Intro_Line from "../static_files/Intro_Line.png";

const Intro = () => {
	return (
		<div
			id="IntroPage"
			className="bg-intro-bg-image bg-cover bg-center bg-no-repeat relative"
		>
			{/* <div className="flex justify-center pt-10 md:pt-40"> */}
			<div className="lg:pb-60 pb-80 py-40">
				<div className="m-auto flex flex-col items-center text-center space-y-6 text-intro-first-text-color w-5/6">
					<div className="font-Oswald font-bold md:text-5xl text-3xl ">
						THE ROYALS ARE HERE!
					</div>
					<div className="font-Oswald font-normal  md:text-3xl text-xl text-intro-second-text-color md:w-1/2 w-full">
						Each Pangolin is unique, and
						holding one or more grants you
						access to many perks!
					</div>
					<div className="font-Oswald font-light md:text-xl text-sm ">
						BI-WEEKLY GIVEAWAYS!
					</div>

					<img
						src={Intro_Line}
						className="w-2/5"
						alt=""
					/>
					<div className="font-Oswald font-light md:text-xl text-sm">
						RANDOM DROP OF SOL!
					</div>
					<img
						src={Intro_Line}
						className="w-2/5"
						alt=""
					/>
					<div className="font-Oswald font-light md:text-xl text-sm md:w-full w-1/2">
						WITH 3 OR MORE PANGOLINS, AN ANT
						IS GUARANTEED!
					</div>
					<img
						src={Intro_Line}
						className="w-2/5"
						alt=""
					/>
					<div className="font-Oswald font-light  md:text-xl text-sm">
						MERCHANDISES AND MORE!
					</div>
				</div>
			</div>

			<img
				src={Pangolin_Left}
				className="absolute left-0 bottom-0 h-auto lg:h-5/6 lg:w-auto w-48"
				alt=""
			/>
			<img
				src={Pangolin_Right}
				className="absolute right-0 bottom-0 h-auto lg:h-5/6 lg:w-auto w-48"
				alt=""
			/>
		</div>
	);
};
export default Intro;
