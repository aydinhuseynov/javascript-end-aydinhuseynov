const questionElementi = document.getElementsByClassName('question-top')
console.log(questionElementi)

const questionElementImg = document.getElementsByTagName(".question-top > img")

console.log(questionElementImg)

// Array.from HTMLCollection verilen elementi Arraya cevrilir



const arrayaCevrilmishElement = Array.from(questionElementi)

// forEach filter map find reduce

// forEach - Higher Order Function (HOF)


// console.log(this)

// "use strict"

// function salamla() {
//     console.log(this)
// }
 
arrayaCevrilmishElement.forEach(function (birSual) {
    birSual.addEventListener('click', function () {
       const questionBottomDivi = this.nextElementSibling


       if(questionBottomDivi.style.maxHeight) {
        questionBottomDivi.style.maxHeight = null

       }

       else {

        // console.log(questionBottomDivi.scrollHeight)
        questionBottomDivi.style.maxHeight = questionBottomDivi.scrollHeight + "px"
       }
       
    })
})


