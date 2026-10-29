// like 14.83 doing the actual work in dev tools. this is just the code i came up with.
var Message = prompt("compose your message.");
var messageRemain = Message.slice(0, 25)

 alert("message pre slice: " + Message + " Message after sliced after 25 characters: " + messageRemain);