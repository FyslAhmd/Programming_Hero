const salary = 26000;
const isBCS = true;
const height = 60;
if(salary > 20000 && height > 65) {
    console.log("Valo Patro");
}
else {
    console.log("Onno patro khujo");
}


if(salary > 25000 || isBCS== true || height > 60) {
    console.log("Valo Patro");
}
else {
    console.log("Onno patro khujo");
}



if((salary > 25000 && isBCS== true) || height > 60) {
    console.log("Valo Patro");
}
else {
    console.log("Onno patro khujo");
}