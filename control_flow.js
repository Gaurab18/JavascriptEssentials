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