// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements in the html.


// Add a event listener 
$('.saveBtn').on("click", function () { 
    var timeErrand = $(this).parent().attr("id") 
    var dayErrands = $(this).siblings("textarea").val(); 
    // local storage setting setup with variable information
    localStorage.setItem(timeErrand, dayErrands)
  })

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    // TODO: Add code to display the current date in the header of the page.

     // Add event istener, user is able to click and save information 
  $('.saveBtn').on("click", function () {
    var timeErrand = $(this).parent().attr("id") 
    var dayErrands = $(this).siblings("textarea").val(); 
    // local storage setting setup with variable information
    localStorage.setItem(timeErrand, dayErrands)
  })

    // build array
    var rowTimeblock = $(".row")
    // for loop -repeat 
rowTimeblock.each(function (index, activedevelopment){
console.log(index, activedevelopment)
    // .split method with if statement for conditionals
var presentTime= dayjs().format("HH")
console.log(presentTime)
    for (let i = 0; i < rowTimeblock.length; i++) {
        console.log(rowTimeblock[i])
        if (rowTimeblock[i].id.split('-')[1] === presentTime) {
          $("#" + rowTimeblock[i].id).addClass("present")
          $("#" + rowTimeblock[i].id).removeClass("future")
          $("#" + rowTimeblock[i].id).removeClass("past")
        } 
        if (parseInt(rowTimeblock[i].id.split('-')[1]) > presentTime) {
          $("#" + rowTimeblock[i].id).addClass("future")
          $("#" + rowTimeblock[i].id).removeClass("present")
          $("#" + rowTimeblock[i].id).removeClass("past")
        } 
        if (parseInt(rowTimeblock[i].id.split('-')[1]) < presentTime) {
          $("#" + rowTimeblock[i].id).addClass("past")
          $("#" + rowTimeblock[i].id).removeClass("present")
          $("#" + rowTimeblock[i].id).removeClass("future")
        }
      }
    document.getElementById("currentDay").innerText = dayjs().format("DD-MM-YYYY HH:mm:ss")
    console.log(document.getElementById("currentDay").innerText)

    })
})
// variables:
var date = new Date()
var presentTime = date.getHours()


//localStorage: page refreshed information is still available
function refreshedInfo() {
    // loop with if statement (conditional)
    $('.time-block').each(function () {
      var presentHr = $(this).attr('id')
      var nowErrands = localStorage.getItem(presentHr)
      if (nowErrands !== null) {
        $(this).children('.description').text(nowErrands)
      }
    })
  }
  refreshedInfo()





