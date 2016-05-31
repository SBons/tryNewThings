 var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function getAgo(updateDate) {
	if(!updateDate)return "";
	updateDate = new Date(updateDate);
	var fromDate = updateDate.getTime();
	var nowDate = new Date().getTime();
	var difTime = nowDate - fromDate;
	var day = hrs * 24 * 60 * 60 * 1000;
	var yesDay = day * 2;
	var res = '';
	if (difTime <= day) {
		res = "Today, ";
	} else if (difTime <= yesDay) {
		res = "Yesterday, ";
	} else {
		res = updateDate.getDate() + " " + months[updateDate.getMonth()];
	}
	var min = updateDate.getMinutes();
	var hrs = updateDate.getHours();
	if (min < 10)
		min = "0" + min;
	if (hrs < 10)
		hrs = "0" + hrs;
	res += hrs + ':' + min;
	return res;
}