import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

//styles
import "../assets/styles/header.scss";

function Header() {
	return (
		<div className="header py-2">
			<header className="container">
				<div className="header-content d-flex justify-content-between align-items-center">
					<div className="phone-number d-flex align-items-center">
						<FontAwesomeIcon icon={faPhoneFlip} />
						<label className="mx-3">تلفن:</label>
						<a href="tel:+989153085282">09153085282</a>
					</div>
					<div className="header-links d-flex align-items-center">
						<div className="header-menu">
							<ul className="nav">
								<li className="nav-item">
									<a className="nav-link" href="/">
										میز راهنما
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/">
										منابع ما
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/">
										ثبت نام
									</a>
								</li>
							</ul>
						</div>
						<div className="social-media">
							<FontAwesomeIcon icon={faInstagram} />
							<FontAwesomeIcon icon={faTwitter} className="mx-2" />
							<FontAwesomeIcon icon={faFacebookSquare} />
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}
export default Header;
