// var weekdays = [
//     "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];



// var date = new Date();
// var day = date.getDate();
// // var weekday = weekdays[date.getDay()];
// // var month =  months[date.getMonth()];



// document.getElementById("date").innerHTML = date

function scrollJS(){
    document.getElementById('scrollJS').scrollIntoView({behavior: "smooth"});
    console.log("scrolled to JS");
}

function scrollPHP(){
    document.getElementById('scrollPHP').scrollIntoView({behavior: "smooth"});
    console.log("scrolled to PHP");
}

function scrollFullStack(){
    document.getElementById('scrollFullStack').scrollIntoView({behavior: "smooth"});
    console.log("scrolled to FullStack");
}