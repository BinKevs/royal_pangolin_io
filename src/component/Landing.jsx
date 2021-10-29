import discord from "../static_files/discord.png";
import twitter from "../static_files/twitter.png";
import React, { useState } from "react";
import pangolin from "../static_files/pangolin.gif";
import logo_landing from "../static_files/logo_landing.png";
import mobile_nav_close from "../static_files/mobile_nav_close.png";
import Navbar from "../static_files/Navbar.png";
import { Link } from "react-scroll";
import { Animated } from "react-animated-css";
import Countdown from "react-countdown";

const Landing = () => {
	const [ShowNav, setShowNav] = useState(false);
	const [TimerComplete, setTimerComplete] = useState(false);

	// const renderer = ({ days, hours, minutes, seconds, completed }) => {
	// 	if (completed) {
	// 		return <Completionist />;
	// 	} else {
	// 		return (
	// 			<span>
	// 				{days} Days : {hours} Hours : {minutes}{" "}
	// 				Minutes : {seconds} Seconds
	// 			</span>
	// 		);
	// 	}
	// };
	return (
		<div className="bg-landing-bg-image bg-cover bg-center bg-no-repeat h-screen relative">
			{ShowNav ? (
				<Animated
					animationIn="fadeInRight"
					animationOut="fadeOutUp"
					animationInDuration={500}
					animationOutDuration={500}
					isVisible={ShowNav}
					id="LandingPage"
					className="md:hidden fixed w-full flex flex-col h-full bg-white z-10"
				>
					<div className="flex justify-between px-10 pt-10">
						<div className="font-Oswald font-bold text-xl">
							MENU
						</div>
						<img
							onClick={() =>
								setShowNav(
									false
								)
							}
							src={mobile_nav_close}
							alt=""
							class="w-10"
						/>
					</div>
					<div className="font-Oswald font-bold text-showcase-text-color flex flex-col items-center text-xl space-y-8 m-auto cursor-pointer">
						<Link
							onClick={() =>
								setShowNav(
									false
								)
							}
							to="IntroPage"
							smooth={true}
							spy={true}
						>
							INTRO
						</Link>

						<Link
							onClick={() =>
								setShowNav(
									false
								)
							}
							to="CharityPage"
							smooth={true}
							spy={true}
						>
							CHARITY
						</Link>
						<Link
							onClick={() =>
								setShowNav(
									false
								)
							}
							to="ShowcasePage"
							smooth={true}
							spy={true}
						>
							SHOWCASE
						</Link>

						<Link
							onClick={() =>
								setShowNav(
									false
								)
							}
							to="RoadmapPage"
							smooth={true}
							spy={true}
						>
							ROADMAP
						</Link>
						<Link
							onClick={() =>
								setShowNav(
									false
								)
							}
							to="FAQPage"
							smooth={true}
							spy={true}
						>
							FAQ
						</Link>
						<Link
							onClick={() =>
								setShowNav(
									false
								)
							}
							to="TeamPage"
							smooth={true}
							spy={true}
						>
							TEAM
						</Link>
					</div>
				</Animated>
			) : (
				""
			)}

			<header class="text-white ">
				<div class="flex items-center md:justify-center justify-between pt-4 cursor-pointer">
					<a class="flex mb-4 md:mb-0">
						<img
							src={logo_landing}
							alt=""
							class="md:h-52 h-auto md:w-full w-40 min-h-0"
						/>
					</a>
					<div
						onClick={() => setShowNav(true)}
						className="md:hidden flex p-5 mb-4"
					>
						<img
							src={Navbar}
							alt=""
							class="h-8 w-10"
						/>
					</div>
					<nav class=" flex-wrap items-center text-2xl justify-center font-Oswald font-bold hidden md:flex space-x-10">
						<Link
							to="IntroPage"
							smooth={true}
							spy={true}
						>
							INTRO
						</Link>

						<Link
							to="CharityPage"
							smooth={true}
							spy={true}
						>
							CHARITY
						</Link>
						<Link
							to="ShowcasePage"
							smooth={true}
							spy={true}
						>
							SHOWCASE
						</Link>

						<Link
							to="RoadmapPage"
							smooth={true}
							spy={true}
						>
							ROADMAP
						</Link>
						<Link
							to="FAQPage"
							smooth={true}
							spy={true}
						>
							FAQ
						</Link>
						<Link
							to="TeamPage"
							smooth={true}
							spy={true}
						>
							TEAM
						</Link>
					</nav>
				</div>
			</header>
			<div className="flex md:flex-row flex-col absolute md:bottom-0 justify-center w-full">
				<img
					src={pangolin}
					alt=""
					className="md:w-5/12 w-64 mx-auto md:mx-0 md:mb-0 mb-8"
				/>
				<div className="flex text-white justify-center">
					<div className="text-center my-auto md:space-y-8 space-y-4">
						<div className="font-Oswald font-bold text-lg md:text-4xl">
							WELCOME TO THE JUNGLE!
						</div>
						<div className="font-Oswald text-md md:text-2xl">
							<div>
								We are the Royal
								Pangolins 1,111
								unique Pangolins
							</div>{" "}
							that will be living in
							the{" "}
							<span className="text-landing-text-color underline">
								Solana
							</span>{" "}
							Blockchain!
						</div>
						<div>
							<button
								disabled={
									TimerComplete
										? true
										: false
								}
								class={`p-4 pl-10 md:pl-16  pr-10 md:pr-16  text-md md:text-xl font-Oswald font-bold w-full md:w-auto + ${
									TimerComplete
										? "bg-landing-button-color text-gray-900"
										: "bg-gray-400	text-white"
								}`}
							>
								MINT
							</button>
						</div>
						<div
							className={`font-Oswald font-bold text-lg md:text-4xl text-center ${
								TimerComplete
									? "hidden"
									: ""
							} `}
						>
							<Countdown
								// date={
								// 	"2021-11-11T00:00:00"
								// }
								renderer={(
									props
								) =>
									props.completed ? (
										""
									) : (
										<span>
											{
												props.days
											}{" "}
											Days
											:{" "}
											{
												props.hours
											}{" "}
											Hours
											:{" "}
											{
												props.minutes
											}{" "}
											Minutes
											:{" "}
											{
												props.seconds
											}{" "}
											Seconds
											To
											Mint
										</span>
									)
								}
								onComplete={() =>
									setTimerComplete(
										true
									)
								}
								date={
									Date.now() +
									10000
								}
								// renderer={
								// 	renderer
								// }
							></Countdown>
						</div>
					</div>
				</div>
			</div>

			<div className="absolute bottom-10 right-14 lg:block hidden">
				<div className="w-full flex">
					<a class="mr-5 hover:text-white">
						<img
							className="h-10"
							src={twitter}
							alt=""
						/>
					</a>
					<a class="hover:text-white">
						<img
							className="h-10"
							src={discord}
							alt=""
						/>
					</a>
				</div>
			</div>

			{/* <div className="w-full md:w-28 pl-80 md:pl-0 absolute bottom-0 right-4 md:right-14 hidden">
				<div className="flex justify-center my-8">
					
				</div>
			</div> */}
		</div>
	);
};
export default Landing;
