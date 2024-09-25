

let userRole = "admin";
let accessLevel;


if (userRole == "admin") {
    accessLevel = "Full access granted";
} else if(accessLevel == "manager"){
    accessLevel = "Limited access granted";
}else{
    accessLevel = "No access granted";
}



console.log("Access level: ", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome admin!"
    } else {
        userMessage = "Welcome, User!";
        
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log(userMessage);


let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;

    default:
        userCategory = "Unknown";
        break;
}

console.log("User Category:", userCategory);



let isAuthentificated = true;

let authentificationStatus = isAuthentificated ? "Authenticated" : "Not authenticated";

console.log("Authentification status: ",authentificationStatus);

