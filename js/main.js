


$(document).ready(function () {
	$('.icon-menu').click(function (event) {
		$('.icon-menu,.mobile-menu__body, .burger').toggleClass('active');
		$('body, .wrapper').toggleClass('lock');
	});
});
// //===============================================================================================================================================================
// убираем placeholder
$('input').focus(function (e) {
	var $self = $(this);
	$self.data('data-value', $self.attr('placeholder'));
	$self.attr('placeholder', '');
});
$('input').blur(function (e) {
	var $self = $(this);

	$self.attr('placeholder', $self.data('data-value'));
});
// //===============================================================================================================================================================

function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();



let tab = function () {
	let tabNav = document.querySelectorAll('.tabs__item'),
		tabContent = document.querySelectorAll('.tabs__content'),
		tabName;
	tabNav.forEach(function (item) {
		item.addEventListener('click', selectTabNav)
	});
	function selectTabNav() {
		tabNav.forEach(function (item) {
			item.classList.remove('active');
		});
		this.classList.add('active');
		tabName = this.getAttribute('data-tab-name');
		sectTabContent(tabName);
	}
	function sectTabContent(tabName) {
		tabContent.forEach(function (item) {
			item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
		})
	}
}

tab();


let select = function () {
	let selectHeader = document.querySelectorAll('.select__header');
	let selectItem = document.querySelectorAll('.select__item');


	selectHeader.forEach(function (item) {
		item.addEventListener('click', selectToggle)
	});
	selectItem.forEach(function (item) {
		item.addEventListener('click', selectChoose);
	});

	function selectToggle() {
		this.parentElement.classList.toggle('active');
	}
	function selectChoose() {
		let text = this.innerText,
			select = this.closest('.select'),
			selectText = select.querySelector('.select__current');
		selectText.innerText = text;
		select.classList.remove('active');
	}
}

select();