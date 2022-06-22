//pages & components
import Menu from "../components/menu";
import Article from "../components/article";
import Course from "../components/course";
import BuyCourse from "../components/buy-course";
import Content from "../components/content";
import Partners from "../components/partners";
import Blog from "../components/blog";

function Main() {
	return (
		<div>
			<Menu></Menu>
			<Article></Article>
			<Course></Course>
			<BuyCourse></BuyCourse>
			<Content></Content>
			<Partners></Partners>
			<Blog></Blog>
		</div>
	);
}

export default Main;
