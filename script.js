const draw_btn = document.querySelector('#draw_btn');
const image_input = document.querySelector('#image_input');
var uploaded_image = '';

image_input.addEventListener('change', function () {
	const reader = new FileReader();
	reader.addEventListener('load', () => {
		uploaded_image = reader.result;
		document.querySelector(
			'#display_image'
		).style.backgroundImage = `url(${uploaded_image})`;
	});
	reader.readAsDataURL(this.files[0]);
});

draw_btn.addEventListener('click', function () {
	const text_fill = document.querySelector('#text_fill').value;

	document.querySelector('#display_image').textContent = `${text_fill}`;
});
