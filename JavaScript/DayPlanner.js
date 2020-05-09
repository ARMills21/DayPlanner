$(document).ready(function() {
    

    let currentDate= dateTime();
    
    // The current day/timw is displayed at the top of the calendar.
       
    function dateTime() {
        $("#dateTime").text(moment().format('MMMM Do YYYY, h:mm a'));
    };
    
    
    // The application displays timeblocks for standard business hours (9 a.m. to 5 p.m.).
    const now = moment();
    const currentHour = moment().format('h a');
    const nowHour = now.get('hour');
    const currentTime = moment().hours();
        // console.log("Time test" + timeTest);
    console.log(currentTime); //military time
    console.log(now); //full moment time
    console.log(currentHour); //not military time
    console.log(nowHour); //military time
    
    // Each timeblock is color coded to indicate whether it is in a past, present, or future hour.
    
    function rowColor () {          
        $(".text").each(function () {
            var addHour = parseInt($(this).attr("id"));
            console.log(addHour)
    
            if (nowHour > addHour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
             else if (nowHour < addHour) {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            } 
            else if (nowHour === addHour) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }
        });
    }
    
    rowColor();
    
    
    // Each timeblock contains an input field and save button.
    $(".saveBtn").click(function() {
        textInput = $(this).siblings(".text").val();
        // event.preventDefault();
        timeInfo = $(this).siblings(".time").text();
        localStorage.setItem(timeInfo, JSON.stringify(textInput));   
    
        console.log(timeInfo);
        console.log(localStorage)
    
    });
    
    // Clicking a timeblock's "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed.
    
    let userInput9 = JSON.parse(localStorage.getItem(" 9:00 AM"));
    $('#9').text(userInput9);
    
    let userInput10 = JSON.parse(localStorage.getItem("10:00 AM"));
    $('#10').text(userInput10);
    
    let userInput11 = JSON.parse(localStorage.getItem("11:00 AM"));
    $('#11').text(userInput11);
    
    let userInput12 = JSON.parse(localStorage.getItem("12:00 PM"));
    $('#12').text(userInput12);
    
    let userInput13 = JSON.parse(localStorage.getItem(" 1:00 PM"));
    $('#13').text(userInput13);
    
    let userInput14 = JSON.parse(localStorage.getItem(" 2:00 PM"));
    $('#14').text(userInput14);
    
    let userInput15 = JSON.parse(localStorage.getItem(" 3:00 PM"));
    $('#15').text(userInput15);
    
    let userInput16 = JSON.parse(localStorage.getItem(" 4:00 PM"));
    $('#16').text(userInput16);
    
    let textInput17 = JSON.parse(localStorage.getItem(" 5:00 PM"));
    $('#17').text(textInput17);
    
    
    // clear button
    $(".clearButton").click(function(){
        $("#9, #10, #11, #12, #13, #14, #15, #16, #17").val("");
        localStorage.clear();
    });
    
    
    
    });  // closes the ready function at the top of the page