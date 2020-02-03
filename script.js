// set variable to track time of day
const timeoday = moment();
// functionn to diplay time 
function plannertime() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    $(".time").each(function () {
        var idtime = $(this).attr("id");
        var schedtime = localStorage.getItem(idtime);
        if (schedtime !== null) {
            $(this).children(".schedule").val(schedtime);
        }
    });
}
// execute function
plannertime();
// make save button functional
var savebutton = $(".saveBtn");
savebutton.on("click", function () {
    var timeoday = $(this).parent().attr("id");
    var sched = $(this).siblings(".schedule").val();
    // save text to local storage
    localStorage.setItem(timeoday, sched);
});
// functiont to change time colors based on time of day
function colortime() {
    hour = timeoday.hours();
    $(".time").each(function () {
        var crntHour = parseInt($(this).attr("id"));
    // if statement for past present future colors
        if (crntHour > hour) {
            $(this).addClass("future")
        }
        else if (crntHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}
// execute function
colortime();