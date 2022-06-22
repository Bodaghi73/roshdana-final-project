//style
import "../assets/styles/article.scss";

//img
import logo from "../assets/imgs/logo-white.png";

function Article() {
	return (
		<div className="article">
			<section className="row">
				<div className="col-md-6 d-flex justify-content-center align-items-center py-5">
					<article className="col-7">
						<h5>این همان عنوان مطلب است</h5>
						<p className="my-4">
							این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری
							ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد.{" "}
						</p>
						<button>بیشتر بدانید</button>
					</article>
				</div>
				<div className="col-md-6 d-flex justify-content-center align-items-center py-5">
					<article className="col-7 d-flex justify-content-center">
						<img src={logo} alt="logo"></img>
					</article>
				</div>
			</section>
		</div>
	);
}

export default Article;
