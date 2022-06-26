//style
import "../assets/styles/article.scss";

function Article() {
	return (
		<div className="article col-md-6">
			<div className="container col-8 d-flex justify-content-center py-5">
				<article>
					<h5>این همان عنوان مطلب است</h5>
					<p className="my-4">
						این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری
						ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد.{" "}
					</p>
					<button>بیشتر بدانید</button>
				</article>
			</div>
		</div>
	);
}

export default Article;
