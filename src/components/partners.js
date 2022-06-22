//style
import "../assets/styles/partners.scss";

//img
import consult from "../assets/imgs/consult.png";
import media from "../assets/imgs/media.png";
import html from "../assets/imgs/html.png";
import travel from "../assets/imgs/travel.png";

function Partners() {
	return (
		<div className="partners">
			<div className="container py-5">
				<div className="partners-title">
					<h4>همکاران ما</h4>
					<span>بهترین کادر آموزشی برای فرزندان شما</span>
				</div>
				<section className="row mt-5">
					<div className="col-sm-6 col-md-3 col-lg-2 d-flex justify-content-center">
						<div className="shadow-box">
							<img src={consult} alt="consult"></img>
						</div>
					</div>
					<div className="col-sm-6 col-md-3 col-lg-2 d-flex justify-content-center">
						<div className="shadow-box">
							<img src={media} alt="media"></img>
						</div>
					</div>
					<div className="col-sm-6 col-md-3 col-lg-2 d-flex justify-content-center">
						<div className="shadow-box">
							<img src={html} alt="html"></img>
						</div>
					</div>
					<div className="col-sm-6 col-md-3 col-lg-2 d-flex justify-content-center">
						<div className="shadow-box">
							<img src={travel} alt="travel"></img>
						</div>
					</div>
					<div className="col-sm-6 col-md-3 col-lg-2 d-flex justify-content-center">
						<div className="shadow-box">
							<img src={consult} alt="consult"></img>
						</div>
					</div>
					<div className="col-sm-6 col-md-3 col-lg-2 d-flex justify-content-center">
						<div className="shadow-box">
							<img src={media} alt="media"></img>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Partners;
