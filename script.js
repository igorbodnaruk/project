const button = document.querySelector('#button')
const button_scills = document.querySelector('#button_scills')
const button_languages = document.querySelector('#button_languages')
const blok = document.querySelector('#blok')
const scills = document.querySelector('#scills')
const languages = document.querySelector('#languages')
const accordion = document.querySelectorAll('[data-name="accordion"]')

button.addEventListener('click', function () {
	blok.classList.toggle('contacts_hiden')
	if (blok.classList.contains('contacts_hiden')) {
		button.textContent = 'OPEN BLOK'
	} else {
		button.textContent = 'CLOSE BLOK'
	}
})

button_scills.addEventListener('click', function () {
	scills.classList.toggle('scills_hiden')
	if (scills.classList.contains('scills_hiden')) {
		button_scills.textContent = 'OPEN BLOK'
	} else {
		button_scills.textContent = 'CLOSE BLOK'
	}
})

button_languages.addEventListener('click', function () {
	languages.classList.toggle('languages_hiden')
	if (languages.classList.contains('languages_hiden')) {
		button_languages.textContent = 'OPEN BLOK'
	} else {
		button_languages.textContent = 'CLOSE BLOK'
	}
})

accordion.forEach(function (item) {
	item.addEventListener('click', function () {
		// console.log(this.nextElementSibling)
		this.nextElementSibling.classList.toggle('hiden')
	})
})