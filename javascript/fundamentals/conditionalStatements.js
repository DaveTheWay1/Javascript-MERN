// * if, else if, and else syntax

if(myAge >= 18){
    console.log('You are old enough. Welcome in to the club');
}
else{
    console.log('Sorry, you must be 18 or older to enter the club')
}
// --------------------------------------------------------------------
const highSchoolGrad = true;

if(highSchoolGrad){
    console.log('You can enroll in this bootcamp');
}
else{
    console.log('Sorry, you must graduate high school or recieve your GED first');
}

// ? what if you wanted the above to say if not true?
// * you add the ! to the beginning to signify that
if(!highSchoolGrad){
    console.log('You can enroll in this bootcamp');
}
else{
    console.log('Sorry, you must graduate high school or recieve your GED first');
}
// --------------------------------------------------------------------
let weekday = "Friday"

if (weekday == "Friday"){
    console.log("Woohoo its the weekend!");
}else if(weekday == "Saturday"){
    console.log('One more day to relax!');
}else{
    console.log('Time to work!')
}