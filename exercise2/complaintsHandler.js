 
 export {handleComplaints}

function handleComplaints(complaints){
if(complaints.type === "finance"){
console.log("Money doesn’t grow on trees, you know.\n")
}
else if(complaints.type === "emotions"){
console.log("It'll pass, as all things do, with time.\n")

}
else if(complaints.type === "weather"){
console.log("It is the way of nature. Not much to be done.")
}

// module.exports.handleComplaints = handleComplaints
}