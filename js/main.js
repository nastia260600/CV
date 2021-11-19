$('.wrapper').addClass('loaded');

const scrollBtn = document.querySelector('.showBtn');
window.onscroll = () => {
	if (window.scrollY > 150) {
		scrollBtn.classList.remove('showBtn__hide');
	} else if (window.scrollY < 150) {
		scrollBtn.classList.add('showBtn__hide');
	}
};
var t;
function up() {
	var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
	if (top > 0) {
		window.scrollBy(0, -1500);
		t = setTimeout('up()', 500);
	} else clearTimeout(t);
	return false;
}