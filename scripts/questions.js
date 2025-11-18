const Questions = document.querySelectorAll('.questions__item')

Questions.forEach(Question => {
    Question.addEventListener('click', () => {
        Question.classList.toggle('active')
    })
})



