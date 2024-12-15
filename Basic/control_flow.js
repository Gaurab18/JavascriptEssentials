let userRole = "admin";
let accessLevel ;
let isLoggedIn = "true";
let  userMessage ;


// if (userRole === "admin") {
//     accessLevel = "Full access granted";
//     console.log(accessLevel);
// } else if (userRole === "manager") {
//     accessLevel = "Limited access granted";
// } else {
//     accessLevel = "No access granted";
// }

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
        console.log("User Message:", userMessage);
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

//Switch case
let userType = "subscriber";
let userCategory;

switch(userType)
{
    case "admin":
        userCategory = "Administrator";
        console.log("User Category:", userCategory);
        break;
    case "manager":
        userCategory = "Manager";
        console.log("User Category:", userCategory);
        break;
    case "subscriber":
        userCategory = "Subscriber";
        console.log("User Category:", userCategory);
        break;
    default:
        userCategory = "Unknown";
        console.log("User Category:", userCategory);
}