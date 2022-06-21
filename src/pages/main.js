//pages & components
import Menu from "../components/menu";
import Article from "../components/article";
import Course from "../components/course";
import BuyCourse from "../components/buy-course";

function Main() {
	return (
		<div>
			<Menu></Menu>
			<Article></Article>
			<Course></Course>
			<BuyCourse></BuyCourse>
		</div>
	);
}

export default Main;
