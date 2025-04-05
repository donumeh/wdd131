const getCounter = () => {
    const storageReviewCounter = window.localStorage;
    const htmlReviewCounter = document.querySelector('#reviewCounter');


    let counter = storageReviewCounter.getItem('reviewCounter');

    if (counter != null) {
        counter = parseInt(counter);
        counter += 1;
    } else {
        counter = 1;
    }

    storageReviewCounter.setItem('reviewCounter', counter);
    htmlReviewCounter.textContent = counter;
}

getCounter();

// Footer script
document.getElementById("currentyear").
    textContent = new Date().getFullYear();

document.getElementById("lastModified").
    textContent = document.lastModified;