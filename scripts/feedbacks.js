const ReadFeedbackBtns = document.querySelectorAll('.feedback__read')
const allFeedbacks = document.querySelector('.all__feedbacks')

ReadFeedbackBtns.forEach(ReadFeedbackBtn => {
    const Feedback = ReadFeedbackBtn.closest('.feedbacks__cards__item').querySelector('.one__feedback')
    const FeedbackBG = Feedback.querySelector('.one__feedback__bg')
    const FeedbackCross = Feedback.querySelector('.one__feedback__cross')

    ReadFeedbackBtn.addEventListener('click', () => {
        Feedback.classList.add('active__block')
        document.body.style.overflow = 'hidden'
        // allFeedbacks.style.display = 'none'
        allFeedbacks.classList.add('hidden')
    })

    FeedbackCross.addEventListener('click', () => {
        Feedback.classList.remove('active__block')
        document.body.style.overflow = ''
        // allFeedbacks.style.display = 'flex'
        allFeedbacks.classList.remove('hidden')
    })

    FeedbackBG.addEventListener('click', () => {
        Feedback.classList.remove('active__block')
        document.body.style.overflow = ''
        // allFeedbacks.style.display = 'flex'
        allFeedbacks.classList.remove('hidden')
    })
    
    
})


