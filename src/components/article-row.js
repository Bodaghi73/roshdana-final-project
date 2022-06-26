//component
import Article from "./article";
import Logo from "./logo";

function ArticleRow() {
	return (
		<div className="row m-0">
			<div className="col-md-6 p-0">
				<Article></Article>
			</div>
			<div className="col-md-6 p-0">
				<Logo></Logo>
			</div>
		</div>
	);
}

export default ArticleRow;
