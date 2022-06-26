//style
import "../assets/styles/logo.scss";

//img
import logo from "../assets/imgs/logo-white.png";

function Article() {
	return (
		<div className="article-logo col-md-6">
			<div className="container py-5">
				<article className="d-flex justify-content-center">
					<img src={logo} alt="logo"></img>
				</article>
			</div>
		</div>
	);
}

export default Article;
