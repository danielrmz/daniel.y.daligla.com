var FECHA_DE_AMOR = new Date(2010, 9, 10, 23, 57, 0, 0);

function DateDiff(fromDate, toDate, interval) {                 
			var second = 1000, 
					minute = second*60, 
					hour   = minute*60, 
					day    = hour*24, 
					week   = day*7;
					 
			fromDate = new Date(fromDate); 
			toDate   = new Date(toDate); 
			
			var timediff = toDate - fromDate; 
			
			if (isNaN(timediff)) { 
				return NaN; 
			}
			
			switch (interval) { 
				case "years": return toDate.getFullYear() - fromDate.getFullYear(); 
				case "months": 
							var months2 = ( toDate.getFullYear() * 12 + toDate.getMonth() );
							var months1 = ( fromDate.getFullYear() * 12 + fromDate.getMonth() );
							return (months2 - months1);
							 
				case "weeks"  : return Math.floor(timediff / week); 
				case "days"   : return Math.floor(timediff / day);  
				case "hours"  : return Math.floor(timediff / hour);  
				case "minutes": return Math.floor(timediff / minute); 
				case "seconds": return Math.floor(timediff / second); 
				default: return undefined; 
			} 
}

DateDiff.YEAR   = "years";
DateDiff.MONTH  = "months";
DateDiff.WEEK   = "weeks";
DateDiff.DAY    = "days";
DateDiff.HOUR   = "hours";
DateDiff.MINUTE = "minutes";
DateDiff.SECOND = "seconds";

function UpdateDates() {
	var TODAY = new Date();
	
	var years  = DateDiff(FECHA_DE_AMOR, TODAY, DateDiff.YEAR);
	var months  = DateDiff(FECHA_DE_AMOR, TODAY, DateDiff.MONTH);
	var days    = DateDiff(FECHA_DE_AMOR, TODAY, DateDiff.DAY);
	var hours   = DateDiff(FECHA_DE_AMOR, TODAY, DateDiff.HOUR);
	var minutes = DateDiff(FECHA_DE_AMOR, TODAY, DateDiff.MINUTE);
	var seconds = DateDiff(FECHA_DE_AMOR, TODAY, DateDiff.SECOND);
	
	$("#headDays .interval").text(days);
	$("#headMonths .interval").text(months);
	$("#headHours .interval").text(hours);
	$("#headMinutes .interval").text(minutes);
	$("#headSeconds .interval").text(seconds); }

function Init() {
	UpdateDates();
	window._interval = setInterval(UpdateDates, 1000);
}