var Message = prompt("compose your message.");
var mLength = Message.length;
var Remaining = 180 - mLength;
alert(Message);
 alert("You have used " + mLength + " characters. You have " + Remaining + " characters left");

/* alert("You have used " + Message.length + " characters. You have " + (180 - Message.length) + "characters left");
will also work */
