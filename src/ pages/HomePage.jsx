import "../styling/HomePage.scss";

function HomePage() {
	return (
		<div className="HomePage">
			<main>
				<section className="intro-text">
					<h1 className="intro-text__heading">Hi, I am Lisa!</h1>
					<p className="intro-text__p">
						A UX-designer and frontend developer, truly passionate about user
						experience and visual design.{" "}
					</p>
					<p className="intro-text__p">
						Loving the process as much as the outcome, I take a creative,
						collaborative and strategic approach to defining and designing
						solutions.
					</p>
				</section>
			</main>
			<footer className="footer-orange"></footer>
		</div>
	);
}

export default HomePage;
