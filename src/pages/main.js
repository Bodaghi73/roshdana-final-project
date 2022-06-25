//pages & components
import BackgroundMenu from "../components/background-menu";
import Article from "../components/article";
import Course from "../components/course";
import BuyCourse from "../components/buy-course";
import Content from "../components/content";
import Partners from "../components/partners";
import Blog from "../components/blog";

function Main() {
	return (
		<div>
			
			<BackgroundMenu></BackgroundMenu>
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
