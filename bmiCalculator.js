const height = process.argv[2];
const weight = process.argv[3];
const bmi = weight / (height*height);
console.log(bmi);

if(bmi < 18.5){
    console.log("You are less weighted");
}
else if(bmi <= 24.9){
    console.log('You are properly fit ');
}
else if(bmi <= 29.9){
    console.log('You are overweight ');
}
else{
    console.log('You are Obesity ');
}