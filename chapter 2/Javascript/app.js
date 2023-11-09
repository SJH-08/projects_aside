var totalPrice = 19;
var shippingCost;

if (totalPrice > 20) {
    shippingCost = 0
} else {
    shippingCost = 5
}

if (totalPrice <= 20) {
    shippingCost = 5

} else {
    shippingCost = 0
}

if (totalPrice <=10) {
    shippingCost = 5
} else if (totalPrice<= 20) {
    shippingCost = 3
} else {
    shippingCost = 0
}

if (userMembership !== 'premium') {
    // show user non-premium contents 
    // recommend premium upgrades
} else {
    // show premium contents 
}

if (todayDate === birthdayDate && birthdayDisplayed === true) {
    // show notification
} else {
    // do nothing
}

if (!(totalPrice > 20 || amazonPrime === true)) {
    // give a free shipment
} else {
    // do nothing 
}

var facebookUser = {userName: "Nana", password: "somesecretpwd", email: "nn@example.com", profileImage: "reference-image"}
undefined
facebookUser.email
'nn@example.com'
facebookUser.password
'somesecretpwd'
facebookUser.password = "newpwd"
'newpwd'
facebookUser.password
'newpwd'



var post1 = {
    content: "This is my super post", 
    likes: 300, 
    shares: 20
}

var post2 = {
    content: "This is my boring post", 
    likes: 10, 
    shares: 0
}

var post3 = {
    content: "This is Mikes post", 
    likes: 250, 
    shares: 30
}

var facebookUserOne = {
    userName: "Nana",
    password: "newpwd",
    email: "nn@example.com",
    profileImage: "reference-image", 
    friends: ["Mike", "Anna", "Jenny"],
    posts: [post1, post2], 
    birthDate: "1996/08/18"
}

var facebookUserTwo = {
    userName: "Mike",
    password: "mikessecretpass",
    email: "mike@example.com",
    profileImage: "reference-image", 
    friends: ["Steve", "Nana", "Julia"],
    posts: [post3],
    birthDate: "2003/03/21" 
} 

function getAge(birthDateString) {
    var today = new Date()
    var birthDate= new Date(birthDateString)
    
    var age = today.getFullYear() - birthDate.getFullYear()
    var birthdayMonthInFuture = today.getMonth() < birthDate.getMonth()
    var sameMonthDateInFuture = today.getMonth() === birthDate.getMonth() 
        && today.getDate() < birthDate.getDate()
    
        if (birthdayMonthInFuture || sameMonthDateInFuture) {
            age--
        }

    return age 

}

var users = [facebookUserOne, facebookUserTwo]
for (user of users) {
    user.age = getAge(user.birthDate)
}

console.log(users)
