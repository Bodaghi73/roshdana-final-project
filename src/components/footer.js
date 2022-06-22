import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter, faFacebookSquare, faPinterest, faLinkedin } from "@fortawesome/free-brands-svg-icons";

//style
import "../assets/styles/footer.scss";

function Footer() {
	return (
		<footer>
			<div className="container d-flex flex-column pt-5">
				<div className="row justify-content-between">
					<div className="contact-us col-md-6 col-lg-3">
						<label>تماس با ما</label>
						<div className="address d-flex flex-column">
							<span>شهر زنجان</span>

							<span>
								<FontAwesomeIcon icon={faLocationDot} /> خیابان شهرداری ساختمان 7
							</span>
						</div>
						<div className="address d-flex flex-column">
							<span>شهر تهران</span>

							<span>
								<FontAwesomeIcon icon={faLocationDot} /> خیابان شهرداری ساختمان 7
							</span>
						</div>
						<a href="tel:+98123456789">(+98) 123456789</a>
					</div>
					<div className="source col-md-6 col-lg-3 d-flex flex-column">
						<label>منابع مهم ما ما</label>
						<a href="/">میدان فروش کالا</a>
						<a href="/">مستندات</a>
						<a href="/">مشتریان</a>
						<a href="/">فرصت های شغلی</a>
					</div>
					<div className="links col-md-6 col-lg-3 d-flex flex-column">
						<label>لینک های میانبر</label>
						<a href="/">درباره ما</a>
						<a href="/">خدمات ما</a>
						<a href="/">دریافت نقل قول</a>
						<a href="/">محصولات</a>
					</div>
					<div className="news col-md-6 col-lg-3 d-flex flex-column">
						<label>خبرنامه</label>
						<span>ثبت نام برای دریافت پیشنهادات ویژه آموزش، اخبار و به روزرسانی ها</span>
						<div className="d-flex">
							<input placeholder="ایمیل شما"></input>
							<button className="rounded-circle d-flex">
								<FontAwesomeIcon icon={faAngleLeft} />
							</button>
						</div>
						<div className="social-media">
							<FontAwesomeIcon icon={faTwitter} className="mx-2" />
							<FontAwesomeIcon icon={faFacebookSquare} className="mx-2" />
							<FontAwesomeIcon icon={faPinterest} className="mx-2" />
							<FontAwesomeIcon icon={faLinkedin} className="mx-2" />
							<FontAwesomeIcon icon={faInstagram} className="mx-2" />
						</div>
					</div>
				</div>
			</div>
			<div className="ielts-ease">
				<div className="container d-flex justify-content-between mt-5">
					<span>کلیه حقوق متعلق به آیلتس ایز است. طراحی توسط زهره بداغی | 1401</span>
					<span>IELTSEASE</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
