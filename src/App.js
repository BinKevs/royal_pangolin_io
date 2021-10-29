import logo from "./logo.svg";
import Landing from "./component/Landing";
import Intro from "./component/Intro";
import Charity from "./component/Charity";
import Showcase from "./component/Showcase";
import Roadmap from "./component/Roadmap";
import FAQ from "./component/FAQ";
import Team from "./component/Team";
import Footer from "./component/Footer";
import "./index.css";
function App() {
	return (
		<>
			<div className="app">
				<Landing />
				<Intro />
				<Charity />
				<Showcase />
				<Roadmap />
				<FAQ />
				<Team />
				<Footer />
			</div>
		</>
	);
}

export default App;
