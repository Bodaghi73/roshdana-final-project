//style
import "../assets/styles/buy-course.scss";

//img
import course1 from "../assets/imgs/course1.jpg";
import course2 from "../assets/imgs/course2.jpg";
import course3 from "../assets/imgs/course3.jpg";

function BuyCourse() {
	return (
		<div className="buy-courses">
			<div className="container py-5">
				<div className="buy-course-title">
					<h4>آخرین دوره های آیلتس ایز</h4>
					<span>چرا باید آیلتی ایز را انتخاب کنم؟</span>
				</div>

				<section className="course row justify-content-center mt-5">
					<article className="col-lg-4 d-flex align-items-start">
						<img src={course1} alt="course"></img>
					</article>
					<article className="col-lg-4 d-flex align-items-start">
						<img src={course2} alt="course"></img>
					</article>
					<article className="col-lg-4 d-flex align-items-start">
						<img src={course3
						} alt="course"></img>
					</article>
				</section>
			</div>
		</div>
	);
}

export default BuyCourse;
