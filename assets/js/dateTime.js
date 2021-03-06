$(function() {

    let problems = "<ul class='collapsible expandable'>"

    // Calculate the number of difference days between two dates
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Calculate the number of difference days between two dates</h6></div>"
    + "<div class='collapsible-body codejs'>"+ numberOfDifferenceDaysBetweenTwoDates() +"</div></li>"

    // Check if a date is between two dates
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Check if a date is between two dates</h6></div>"
    + "<div class='collapsible-body codejs'>"+ if_A_dateBetweenTwoDates() +"</div></li>"

    // Check if a date is today
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Check if a date is today</h6></div>"
    + "<div class='collapsible-body codejs'>"+ if_a_DateIsToday() +"</div></li>"

    // Check if a year is leap year
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Check if a year is leap year</h6></div>"
    + "<div class='collapsible-body codejs'>"+ if_a_yearIsLeapYear() +"</div></li>"

    // Compare two dates
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Compare two dates</h6></div>"
    + "<div class='collapsible-body codejs'>"+ compareTwoDates() +"</div></li>"

    // Convert a date to yyyy mm dd format
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Convert a date to yyyy mm dd format</h6></div>"
    + "<div class='collapsible-body codejs'>"+ dateTo_yyyy_mm_dd_format() +"</div></li>"

    // Convert seconds to hh mm ss format
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Convert seconds to hh mm ss format</h6></div>"
    + "<div class='collapsible-body codejs'>"+ seconds_to_hh_mm_ss_format() +"</div></li>"

    // Extract year month day hour minute second and millisecond from a date
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Extract year month day hour minute second and millisecond from a date</h6></div>"
    + "<div class='collapsible-body codejs'>"+ dateFromData() +"</div></li>"

    // Format a date for the given locale
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Format a date for the given locale</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get the current timestamp in seconds
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Get the current timestamp in seconds</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get the day of the year from a date
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Get the day of the year from a date</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get the month name of a date
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Get the month name of a date</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get the number of days in given month
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Get the number of days in given month</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get the tomorrow date
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Get the tomorrow date</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get the weekday of a date
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Get the weekday of a date</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get the yesterday date
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Get the yesterday date</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Sort an array of dates
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Sort an array of dates</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Validate a gregorian date
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Validate a gregorian date</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    + "</ul>"

    $('#pro_dateTime').html(problems);

})

function numberOfDifferenceDaysBetweenTwoDates() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "diffDays = <span class='codejs-function'>(date, otherDate)</span> => "
    + "<span class='codejs-defMethod'>Math</span>.ceil(<span class='codejs-defMethod'>"
    + "Math</span>.abs(date - otherDate) / (1000 * 60 * 60 * 24));<br><br>"
    + "// Example<br>"
    + "diffDays(<span class='codejs-keyword'>new </span><span class='codejs-defMethod'>Date</span>('2014-12-19'),"
    + "<span class='codejs-keyword'>new </span><span class='codejs-defMethod'>Date</span>('2020-01-01'));   // 1839"
    + "</code>"
    return code
}

function if_A_dateBetweenTwoDates() {
    let code = "// `min`, `max` and `date` are `Date` instances<br><br>"
    + "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "isBetween = <span class='codejs-function'>(date, min, max)</span> => "
    + "(date.<span class='codejs-defMethod'>getTime()</span> >= min.<span class='codejs-defMethod'>"
    + "getTime()</span> && date.<span class='codejs-defMethod'>getTime()</span> "
    + "<= max.<span class='codejs-defMethod'>getTime()</span>);"
    + "</code>"
    return code;
}

function if_a_DateIsToday() {
    let code = "// `date` is a Date object<br><br>"
    + "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "isToday = <span class='codejs-function'>(date)</span> => date.<span class='codejs-defMethod'>"
    + "toISOString()</span>.slice(0, 10) === <span class='codejs-keyword'>new </span>"
    + "<span class='codejs-defMethod'>Date().toISOString()</span>.slice(0, 10);"
    + "</code>"
    return code;
}

function if_a_yearIsLeapYear() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "isLeapYear = year => <span class='codejs-other'>(((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))"
    + "</span>;<br><br>// Or<br>// Get the number of days in February<br><span class='codejs-keyword'>let </span>"
    + "isLeapYear = year => <span class='codejs-keyword'>new</span> <span class='codejs-defMethod'>"
    + "Date</span>(year, 1, 29).<span class='codejs-defMethod'>getDate</span>() === 29;"
    + "</code>"
    return code;
}

function compareTwoDates() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "compare = <span class='codejs-function'>(a, b)</span> => a.<span class='codejs-defMethod'>getTime"
    + "</span>() > b.<span class='codejs-defMethod'>getTime</span>();<br><br>// Example<br>"
    + "<span class='codejs-function'>compare</span>(<span class='codejs-keyword'>new</span> <span "
    + "class='codejs-defMethod'>Date</span>('2020-03-30'), <span class='codejs-keyword'>new</span> "
    + "<span class='codejs-defMethod'>Date</span>('2020-01-01'));    // true<br>"
    + "</code>"
    return code;
}

function dateTo_yyyy_mm_dd_format() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "formatYmd = date => date.<span class='codejs-defMethod'>toISOString</span>().<span class='codejs-"
    + "defMethod'>slice</span>(0, 10);"
    + "</code>"
    return code;
}

function seconds_to_hh_mm_ss_format() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "formatSeconds = s => <span class='codejs-other'>new</span> <span class='codejs-defMethod'>Date"
    + "</span>(s * 1000).<span class='codejs-defMethod'>toISOString</span>().<span class='codejs-defMethod'"
    + ">substr</span>(11, 8);<br><br>// Or<br><span class='codejs-keyword'>let </span>formatSeconds = s "
    + "=> (<span class='codejs-other'>new</span> <span class='codejs-defMethod'>Date</span>(s * 1000))."
    + "<span class='codejs-defMethod'>toUTCString</span>().<span class='codejs-other'>match(/(\d\d:\d\d:\d\d)/)"
    + "</span>[0];<br><br>// Or<br><span class='codejs-keyword'>let </span>formatSeconds = s => <span "
    + "class='codejs-other'>[parseInt(s / 60 / 60), parseInt(s / 60 % 60), parseInt(s % 60)]</span>.<span "
    + "class='codejs-defMethod'>join</span>(':').<span class='codejs-defMethod'>replace</span>(/\b(\d)\b/g,"
    + " '0$1');<br><br>// Examples<br>"
    + "<span class='codejs-function'>formatSeconds</span>(200); // 00:03:20<br>"
    + "<span class='codejs-function'>formatSeconds</span>(500); // 00:08:20"
    + "</code>"
    return code;
}

function dateFromData() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "extract = date => date.<span class='codejs-defMethod'>toISOString</span>().<span class='codejs-"
    + "defMethod'>split</span>(/[^0-9]/).<span class='codejs-defMethod'>slice</span>(0, -1);<br><br>"
    + "<span class='codejs-other'>`extract` is an array of [year, month, day, hour, minute, second, "
    + "millisecond]</span>"
    + "</code>"
    return code;
}