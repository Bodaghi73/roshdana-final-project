import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

//style
import "../assets/styles/blog.scss";

//img
import graduatedCuple from "../assets/imgs/Graduated cuple.jpg";
import computre from "../assets/imgs/computre.jpeg";
import p2 from "../assets/imgs/p2.webp";
import developer from "../assets/imgs/developer.jfif";

function Blog() {
	return (
		<div className="blog">
			<div className="container py-5">
				<div className="blog-title">
					<h4>آخرین دوره های آیلتس ایز</h4>
					<span>چرا باید آیلتس ایز را انتخاب کنم؟</span>
				</div>
				<section className="blog-content mt-5">
					<div className="more-button d-flex justify-content-end mb-3">
						<button>نمایش همه مطالب</button>
					</div>
					<div className="blog-items row">
						<article className="col-md-6 col-lg-3 d-flex flex-column align-items-start">
							<div className="blog-post">
								<img src={graduatedCuple} alt="graduatedCuple"></img>
								<div className="blog-detail">
									<span>آکادمی ها</span>
									<p>زن و شوهر از دانشجویان دانشگاه هپی فارغ التحصیل شد</p>
									<div className="data d-flex align-items-center">
										<FontAwesomeIcon className="clock" icon={faClock} />
										<span>23 خرداد 1397</span>
									</div>
								</div>
							</div>
						</article>
						<article className="col-md-6 col-lg-3 d-flex flex-column align-items-start">
							<div className="blog-post">
								<img src={computre} alt="computre"></img>
								<div className="blog-detail">
									<span>دولت</span>
									<p>نکات مفید برای ایجاد یک بحث باکیفیت</p>
									<div className="data d-flex align-items-center">
										<FontAwesomeIcon className="clock" icon={faClock} />
										<span>23 خرداد 1397</span>
									</div>
								</div>
							</div>
						</article>
						<article className="col-md-6 col-lg-3 d-flex flex-column align-items-start">
							<div className="blog-post">
								<img src={p2} alt="p2"></img>
								<div className="blog-detail">
									<span>طراحی</span>
									<p>بازتاب فصل فجر</p>
									<div className="data d-flex align-items-center">
										<FontAwesomeIcon className="clock" icon={faClock} />
										<span>23 خرداد 1397</span>
									</div>
								</div>
							</div>
						</article>
						<article className="col-md-6 col-lg-3 d-flex flex-column align-items-start">
							<div className="blog-post">
								<img src={developer} alt="developer"></img>
								<div className="blog-detail">
									<span>طراحی</span>
									<p>شگفت انگیز است که دوستی هایی را که توسعه میابند ببینند</p>
									<div className="data d-flex align-items-center">
										<FontAwesomeIcon className="clock" icon={faClock} />
										<span>23 خرداد 1397</span>
									</div>
								</div>
							</div>
						</article>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Blog;
