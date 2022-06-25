import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

//style
import "../assets/styles/menu.scss";

//img
import logo from "../assets/imgs/logo.png";

function Menu() {
	return (
		<div className="bord w-100">
			<div className="container d-flex flex-column justify-content-between h-100">
				<div className="top-section d-flex justify-content-between align-items-start">
					<div className="logo mt-3">
						<img src={logo} alt="logo"></img>
					</div>
					<nav className="navbar navbar-expand-lg">
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
						<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
							<ul className="navbar-nav">
								<li className="nav-item">
									<a className="nav-link" href="/">
										صفحه اصلی
									</a>
								</li>
								<li className="nav-item dropdown">
									<a
										className="nav-link"
										href="/archive"
									>
										آرشیو
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link dropdown-toggle"
										href="/"
										id="navbarDropdownMenuLink"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										نمونه کار ها
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/">
										فروشگاه
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/">
										وبلاگ
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link ps-0" href="/">
										<FontAwesomeIcon icon={faMagnifyingGlass} />
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				<div className="start mb-5">
					<button>شروع کنید</button>
				</div>
			</div>
		</div>
	);
}

export default Menu;
