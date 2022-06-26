//style
import "../assets/styles/logo.scss";

//img
import logo from "../assets/imgs/logo-white.png";

function Logo() {
	return (
		<div className="article-logo py-5">
			<article className="d-flex justify-content-center">
				<img src={logo} alt="logo"></img>
			</article>
		</div>
	);
}

export default Logo;
