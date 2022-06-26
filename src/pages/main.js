//pages & components
import BackgroundMenu from "../components/background-menu";
import ArticleRow from "../components/article-row";
import Course from "../components/course";
import BuyCourse from "../components/buy-course";
import Content from "../components/content";
import Partners from "../components/partners";
import Blog from "../components/blog";

function Main() {
	return (
		<div>
			<BackgroundMenu></BackgroundMenu>
			<ArticleRow></ArticleRow>
			<Course></Course>
			<BuyCourse></BuyCourse>
			<Content></Content>
			<Partners></Partners>
			<Blog></Blog>
		</div>
	);
}

export default Main;
