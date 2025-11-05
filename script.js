function isSameType(value1, value2) {
  //your js code here
	if(isSameType (value1 === value2)){
		console.log(typeof value1)
	}else{
		console.log("not same type")
	}
}

// do not change the code below
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
