
function makeFriendlyDates(arr) {
  var startYear = parseInt(arr[0].split("-")[0]),
      startMonth = parseInt(arr[0].split("-")[1]),
      startDay = parseInt(arr[0].split("-")[2]),
      endYear = parseInt(arr[1].split("-")[0]),
      endMonth = parseInt(arr[1].split("-")[1]),
      endDay = parseInt(arr[1].split("-")[2]),
      retArr = [];

// Date Formatting:
  function friendlyDate (year, month, day) {
    var months = ["", "January ", "February ", "March ", "April ", "May ", "June ", "July ", "August ", "September ", "October ", "November ", "December "];

    switch (day) {
      case 0:
        day = "";
        break;
      case 1:
        day = "1st";
        break;
      case 2:
        day = "2nd";
        break;
      case 3:
        day = "3rd";
        break;
      default:
        day = String(day) + "th";
    }

    if (year) {
      year = ", " + year;
    }

    // Month hidden with value 0; Year hidden with value "":
    return months[month] + day + year;
  }

// Remove Redundancies:
  if (endYear === startYear) {
    endYear = "";
    if (endMonth === startMonth) {
      endMonth = 0;
    }
  } else if (endYear === startYear + 1) {
    if (endMonth < startMonth) {
      endYear = "";
    } else if (endMonth === startMonth && endDay < startDay) {
      endYear = "";
    }
  }
  
  if (startYear === new Date().getFullYear() && !endYear) {
    startYear = "";
  }

  if (!endYear && !endMonth && endDay === startDay) {
    endDay = 0;
  }

// Push Friendly Dates and Return!!
  retArr = [friendlyDate(startYear, startMonth, startDay), friendlyDate(endYear, endMonth, endDay)];

  if (retArr[1] === "") { // If both dates where the same
    retArr.pop();
  }

  return retArr;

}

// ---------------- TESTERS ---------------- //
makeFriendlyDates(['2016-07-01', '2016-07-04']);
makeFriendlyDates(["2016-12-01", "2017-02-03"]);
makeFriendlyDates(["2022-09-05", "2023-09-04"]);
makeFriendlyDates(["2016-12-01", "2018-02-03"]);
makeFriendlyDates(["2018-01-13", "2018-01-13"]);
makeFriendlyDates(["2022-09-05", "2023-09-05"]);




/*

--------------- OLD VERSION 2 (Almost The Same!!)

function makeFriendlyDates(arr) {
  var months = ["", "January ", "February ", "March ", "April ", "May ", "June ", "July ", "August ", "September ", "October ", "November ", "December "],
      startYear = parseInt(arr[0].split("-")[0]),
      startMonth = parseInt(arr[0].split("-")[1]),
      startDay = parseInt(arr[0].split("-")[2]),
      endYear = parseInt(arr[1].split("-")[0]),
      endMonth = parseInt(arr[1].split("-")[1]),
      endDay = parseInt(arr[1].split("-")[2]),
      retArr = [];

// Date Formatting:
  function friendlyDate (year, month, day) {
    var 
    switch (day) {
      case 0:
        day = "";
        break;
      case 1:
        day = "1st";
        break;
      case 2:
        day = "2nd";
        break;
      case 3:
        day = "3rd";
        break;
      default:
        day = String(day) + "th";
    }

    if (year) {
      year = ", " + year;
    } else {
      year = "";
    }

    // Month hidden with value 0; Year hidden with value null:
    return months[month] + day + year;
  }

// Remove Redundancies:
  if (endYear === startYear) {
    endYear = null;
    if (endMonth === startMonth) {
      endMonth = 0;
    }
  } else if (endYear === startYear + 1) {
    if (endMonth < startMonth) {
      endYear = null;
    } else if (endMonth === startMonth && endDay < startDay) {
      endYear = null;
    }
  }
  
  if (startYear === new Date().getFullYear() && !endYear) {
    startYear = null;
  }

  if (!endYear && !endMonth && endDay === startDay) {
    endDay = 0;
  }
// Here You Go!!
  retArr = [friendlyDate(startYear, startMonth, startDay), friendlyDate(endYear, endMonth, endDay)];

  if (retArr[1] === "") {
    retArr.pop();
  }

  return retArr;

}


--------------- OLD VERSION 1

  return arr.map(function(dateElem) {
    var retDay = parseInt(dateElem.split("-")[2]),
        retMonth = months[parseInt(dateElem.split("-")[1])-1] === lastMonth && retDay > lastDay ? "" : months[parseInt(dateElem.split("-")[1])-1],
        retYear = parseInt(dateElem.split("-")[0]) === 2016 || String(", " + (parseInt(dateElem.split("-")[0])-1)) === lastYear ? "" : (", " + dateElem.split("-")[0]);

    lastDay = retDay;
    lastMonth = retMonth;
    lastYear = retYear;

    switch (retDay) {
      case 1:
        retDay = "1st";
        break;
      case 2:
        retDay = "2nd";
        break;
      case 3:
        retDay = "3rd";
        break;
      default:
        retDay = String(retDay + "th");
    }
    
    if (retMonth !== "") {
      retMonth += " ";
    }
    
    return String(retMonth + retDay + retYear);
  });


*/
