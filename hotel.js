/* The script is placed inside an immediately invoked function expression
   which helps protect the scope of variables */

//PART ONE: GENERATE A RANDOM ROOM RATE. Write a function called genRand() that has no paremeters that will return a room rate between 100 and 400. HINT: You should hit a number within this range within 10 tries.
function getRand ()
    {
        var newRandom = Math.floor(Math.random() * 301) + 100;
        return newRandom;
    }

  // PART TWO: CALCULATE AND RETURN THE EXPIRY DETAILS FOR THE OFFER. Write a function called offerExpires that has one parameter a Date object. The function should return a string in the format "OFFER EXPIRES NEXT "WeekDay" (Date Month Year)". The date should be one week from today's date
function offerExpires (date)
{
    var weekday = date.getDay();
    var weekdayName;
    
    switch(weekday)
        {
            case 0:
                weekdayName = "Sunday";
                break;
            case 1:
                weekdayName = "Monday";
                break;
            case 2:
                weekdayName = "Tuesday";
                break;
            case 3:
                weekdayName = "Wednesday";
                break;
            case 4:
                weekdayName = "Thursday";
                break;
            case 5:
                weekdayName = "Friday";
                break;
            default:
                weekdayName = "Saturday";
                break;
        }
    
    var month = date.getMonth();
    var monthName;
    
    switch(month)
        {
            case 0:
                monthName = "January";
                break;            
            case 1:
                monthName = "February";
                break;
            case 2:
                monthName = "March";
                break;
            case 3:
                monthName = "April";
                break;
            case 4:
                monthName = "May";
                break;
            case 5:
                monthName = "June";
                break;
            case 6:
                monthName = "July";
                break;
            case 7:
                monthName = "August";
                break;
            case 8:
                monthName = "September";
                break;
            case 9:
                monthName = "October";
                break;
            case 10:
                monthName = "November";
                break;
            default:
                monthName = "December";
                break;
        }
    
    return "Offer Expires Next " + weekdayName + "<br> (" + date.getDate() + " " + monthName + " " + date.getFullYear() + ")";
}
  
//PART THREE: CALL THE FUNCTIONS AND WRITE INFO TO WEBPAGE

//Call getRand() function to get random room rate and write it to the special rate section on the webpage
document.getElementById("specialRate").innerHTML = getRand();

//create a new Date object
var someDate = new Date();

//Call the function passing the date object to it and write it to the offer ends section on the webpage
document.getElementById("offerEnds").innerHTML = offerExpires(someDate);