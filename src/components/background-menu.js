import Menu from "./menu";

//style
import "../assets/styles/background-menu.scss";

//img
import logo from "../assets/imgs/logo.png";

function BackgroundMenu() {
	return (
		<div className="background-menu">
			<div className="container d-flex justify-content-between h-100">
				<div className="d-flex flex-column justify-content-between py-4">
					<div className="logo">
						<img src={logo} alt="logo"></img>
					</div>
					<div className="text-background">
						<p>ما برای پیدا کردن نیازهای خود همکاری میکنیم.</p>
						<h1>
							ما مردم را با یکدیگر <span>متحد میکنیم.</span>
						</h1>
						<p>مفهوم یک شرکت مشاوره مدیریت در نیویورک است که متخصص در ساخت مدل سازی اطلاعات است.</p>
					</div>
					<div className="start">
						<button>شروع کنید</button>
					</div>
				</div>
				<Menu></Menu>
			</div>
		</div>
	);
}

export default BackgroundMenu;
