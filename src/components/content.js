import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa2, fa3, fa4 } from "@fortawesome/free-solid-svg-icons";

//style
import "../assets/styles/content.scss";

//img
import graduation from "../assets/imgs/graduation.png";
import light from "../assets/imgs/light.png";
import headset from "../assets/imgs/headset.png";
import course from "../assets/imgs/course.png";

function Content() {
	return (
		<div className="contents">
			<div className="container py-5">
				<div className="content-title">
					<h4>آخرین دوره های آیلتس ایز</h4>
					<span>چرا باید آیلتس ایز را انتخاب کنم؟</span>
				</div>

				<section className="content row mt-5">
					<article className="col-md-6 col-lg-3 d-flex flex-column align-items-center">
						<img src={graduation} alt="graduation"></img>
						<FontAwesomeIcon className="icon opacity-25" icon={fa1} />
						<h5>حرفه ای شو</h5>
						<p>
							چابگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
							ابزارهای کاربردی می باشد.
						</p>
					</article>
					<article className="col-md-6 col-lg-3 d-flex flex-column align-items-center">
						<img src={light} alt="light"></img>
						<FontAwesomeIcon className="icon opacity-25" icon={fa2} />
						<h5>مهارت خود را بالا ببر</h5>
						<p>
							چابگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
							ابزارهای کاربردی می باشد.
						</p>
					</article>
					<article className="col-md-6 col-lg-3 d-flex flex-column align-items-center">
						<img src={headset} alt="headset"></img>
						<FontAwesomeIcon className="icon opacity-25" icon={fa3} />
						<h5>صرفه جویس در زمان</h5>
						<p>
							چابگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
							ابزارهای کاربردی می باشد.
						</p>
					</article>
					<article className="col-md-6 col-lg-3 d-flex flex-column align-items-center">
						<img src={course} alt="course"></img>
						<FontAwesomeIcon className="icon opacity-25" icon={fa4} />
						<h5>خود را بیازما</h5>
						<p>
							چابگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
							ابزارهای کاربردی می باشد.
						</p>
					</article>
				</section>
			</div>
		</div>
	);
}

export default Content;
