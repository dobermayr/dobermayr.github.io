//Wait to run your initialization code until the DOM is fully loaded. This is needed
// when wanting to access elements that are later in the HTML than the <script>.
if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', afterLoaded);
} else {
    //The DOMContentLoaded event has already fired. Just run the code.
    afterLoaded();
}

function afterLoaded() {
    let year = document.getElementById("year");
    let newYear = randomIntFromInterval(1820, 1980);
    year.innerHTML = year.innerHTML.replace('1837', newYear);

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
      };
};