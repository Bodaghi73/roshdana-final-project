//style
import "../assets/styles/archive-title.scss";

//img
import logo from "../assets/imgs/logo.png";

function ArchiveTitle() {
	return (
		<div className="background">
			<div className="container d-flex justify-content-between py-4">
				<div className="archive-title d-flex flex-column justify-content-center">
					<h2>عنوان این مطلب در این بالا قرار میگیره و می تونه دراز باشه</h2>
					<span>دسته بندی: مطالب آیلتس / 28 اذر 1398</span>
				</div>
				<div className="logo">
					<img src={logo} alt="logo"></img>
				</div>
			</div>
		</div>
	);
}

export default ArchiveTitle; //style
