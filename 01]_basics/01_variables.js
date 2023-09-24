const accountId = 1234456
let accountEmail ="vishal@xyz.com"
var accountPassword = "12345"

accountCity ="pune"
let accountState;

// accountId =2 // Can niether be updated nor be re-declared

accountEmail ="vishal@abc.com"
accountPassword ="6546743"
accountCity ="mumbai"


console.log(accountId);

/*
prefer not to use var because of issue in block scope and functional scope 
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);