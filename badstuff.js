var worm = new XMLHttpRequest(); 
worm.open('POST', 'http://csec380-core.csec.rit.edu:86/add_friend.php?id=93', true); 
worm.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
worm.send();
var date = new Date(); 
var comment ="Friend added on "+ date.getDate() + "/" + (date.getMonth()+1)  + "/" + date.getFullYear() + " @ "  + date.getHours() + ":"  + date.getMinutes();
function reqListener () {
  console.log(this.responseText);
}
var c = new XMLHttpRequest(); 
c.addEventListener("load", reqListener);
c.open("GET", "http://csec380-core.csec.rit.edu:86/add_comment.php?id=93&comment=" +comment, true); 
c.send();

