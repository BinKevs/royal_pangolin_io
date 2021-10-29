import React from "react";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";

import "@brainhubeu/react-carousel/lib/style.css";
import Show_Case_1 from "../static_files/Show_Case_1.png";
import Show_Case_2 from "../static_files/Show_Case_2.png";
import Show_Case_3 from "../static_files/Show_Case_3.png";
import Show_Case_4 from "../static_files/Show_Case_4.png";
import Show_Case_5 from "../static_files/Show_Case_5.png";
import Show_Case_6 from "../static_files/Show_Case_6.png";
import Show_Case_7 from "../static_files/Show_Case_7.png";
import Show_Case_8 from "../static_files/Show_Case_8.png";
import Show_Case_9 from "../static_files/Show_Case_9.png";
import Show_Case_10 from "../static_files/Show_Case_10.png";
import Show_Case_11 from "../static_files/Show_Case_11.png";

class Showcase extends React.Component {
	constructor() {
		super();
		this.state = {
			value: 5,
		};
		this.onchange = this.onchange.bind(this);
	}
	handleChangeCenterOnClick(Position) {
		return (event) => {
			event.preventDefault();
			this.setState({ value: Position });
		};
	}
	onchange(value) {
		this.setState({ value });
	}

	render() {
		return (
			<div
				id="ShowcasePage"
				className="md:bg-showcase-bg-image bg-showcase-bg-image-mobile bg-cover bg-center bg-no-repeat"
			>
				<div className="flex h-full">
					<div className="w-full m-auto">
						<div className="font-Oswald font-bold md:text-5xl text-3xl text-showcase-text-color text-center my-8">
							SHOWCASE
						</div>
						<Carousel
							value={this.state.value}
							slides={[
								<div
									onClick={this.handleChangeCenterOnClick(
										0
									)}
									className="p-14"
								>
									<img
										class={
											this
												.state
												.value ===
											0
												? "w-full rounded-xl"
												: "w-4/5 rounded-xl"
										}
										src={
											Show_Case_1
										}
									/>
								</div>,
								<div
									onClick={this.handleChangeCenterOnClick(
										1
									)}
									className="p-14"
								>
									<img
										class={
											this
												.state
												.value ===
											1
												? "w-full rounded-xl"
												: "w-4/5 rounded-xl"
										}
										src={
											Show_Case_2
										}
									/>
								</div>,
								<div
									onClick={this.handleChangeCenterOnClick(
										2
									)}
									className="p-14"
								>
									<img
										class={
											this
												.state
												.value ===
											2
												? "w-full rounded-xl"
												: "w-4/5 rounded-xl"
										}
										src={
											Show_Case_3
										}
									/>
								</div>,
								<div
									onClick={this.handleChangeCenterOnClick(
										3
									)}
									className="p-14"
								>
									<img
										class={
											this
												.state
												.value ===
											3
												? "w-full rounded-xl"
												: "w-4/5 rounded-xl"
										}
										src={
											Show_Case_4
										}
									/>
								</div>,
								<div
									onClick={this.handleChangeCenterOnClick(
										4
									)}
									className="p-14"
								>
									<img
										class={
											this
												.state
												.value ===
											4
												? "w-full rounded-xl"
												: "w-4/5 rounded-xl"
										}
										src={
											Show_Case_5
										}
									/>
								</div>,
								<div
									onClick={this.handleChangeCenterOnClick(
										5
									)}
									className="p-14"
								>
									<img
										class={
											this
												.state
												.value ===
											5
												? "w-full rounded-xl"
												: "w-4/5 rounded-xl"
										}
										src={
											Show_Case_6
										}
									/>
								</div>,
								<div
									onClick={this.handleChangeCenterOnClick(
										6
									)}
									className="p-14"
								>
									<img
										class={
											this
												.state
												.value ===
											6
												? "w-full rounded-xl"
												: "w-4/5 rounded-xl"
										}
										src={
											Show_Case_7
										}
									/>
								</div>,
								<div
									onClick={this.handleChangeCenterOnClick(
										7
									)}
									className="p-14"
								>
									<img
										class={
											this
												.state
												.value ===
											7
												? "w-full rounded-xl"
												: "w-4/5 rounded-xl"
										}
										src={
											Show_Case_8
										}
									/>
								</div>,
								<div
									onClick={this.handleChangeCenterOnClick(
										8
									)}
									className="p-14"
								>
									<img
										class={
											this
												.state
												.value ===
											8
												? "w-full rounded-xl"
												: "w-4/5 rounded-xl"
										}
										src={
											Show_Case_9
										}
									/>
								</div>,
								<div
									onClick={this.handleChangeCenterOnClick(
										9
									)}
									className="p-14"
								>
									<img
										class={
											this
												.state
												.value ===
											9
												? "w-full rounded-xl"
												: "w-4/5 rounded-xl"
										}
										src={
											Show_Case_10
										}
									/>
								</div>,
								<div
									onClick={this.handleChangeCenterOnClick(
										10
									)}
									className="p-14"
								>
									<img
										class={
											this
												.state
												.value ===
											10
												? "w-full rounded-xl"
												: "w-4/5 rounded-xl"
										}
										src={
											Show_Case_11
										}
									/>
								</div>,
							]}
							onChange={this.onchange}
							plugins={[
								"fastSwipe",
								"clickToChange",
								"centered",

								{
									resolve: slidesToShowPlugin,
									options: {
										numberOfSlides: 3,
									},
								},
							]}
							breakpoints={{
								640: {
									plugins: [
										{
											resolve: slidesToShowPlugin,
											options: {
												numberOfSlides: 1,
											},
										},
									],
								},
							}}
						/>
						<div className="mb:mb-0 mb-20 md:w-4/5 w-full sm:mx-auto overflow-hidden">
							<Dots
								value={
									this
										.state
										.value
								}
								onChange={
									this
										.onchange
								}
								number={11}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Showcase;
