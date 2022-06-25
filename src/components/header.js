import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

//styles
import "../assets/styles/header.scss";

function Header() {
	return (
		<header className="header py-2">
			<div className="container">
				<div className="header-content d-flex justify-content-between align-items-center">
					<div className="phone-number d-flex align-items-center">
						<FontAwesomeIcon icon={faPhoneFlip} />
						<label className="mx-3">تلفن:</label>
						<a href="tel:+989153085282">09153085282</a>
					</div>
					<div className="header-links d-flex justify-content-revert align-items-center">
						<nav className="navbar navbar-expand-lg order-2 order-lg-1">
							<button
								class="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarNav"
								aria-controls="navbarNav"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span class="navbar-toggler-icon"></span>
							</button>
							<div className="header-menu collapse navbar-collapse" id="navbarNavAltMarkup">
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
						</nav>
						<div className="social-media order-1 order-lg-2">
							<FontAwesomeIcon icon={faInstagram} className="ps-2" />
							<FontAwesomeIcon icon={faTwitter} className="ps-2" />
							<FontAwesomeIcon icon={faFacebookSquare} className="ps-2" />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
export default Header;
