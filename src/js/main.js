/*Main*/

//Square
function areaOfSquare(side){
    return side**2;
};

function perimeterOfSquare(side){
    return side*4;
}

//Triangle
function areaOfTriangle(base,height){
    return (base * height)/2;
}

function perimeterOfTriangle(side1,side2,base){
    return side1+side2+base;
}

//Triangle isosceles
function heightOfTriangleIsosceles(side, base){
    const arguments = side**2 - (base**2/4);
    return Math.sqrt(arguments);
}

//Circle 
const PI = Math.PI;
function diameterOfCircle(radio){
    return radio*2;
}
function perimeterOfCircle(radio){
    const diameter = diameterOfCircle(radio);
    return diameter*PI
}
function areaOfCircle(radio){
    return (radio**2)*PI
}

function squareAreaCalc(){
    const side = document.getElementById("InputSquare").value;
    const area = areaOfSquare(side);
    alert(`The area is: ${area}cm^2`);
}

function squarePerimeterCalc(){
    const side = document.getElementById("InputSquare").value;
    const perimeter = perimeterOfSquare(side);
    alert(`The perimeter is: ${perimeter}cm`)
}

function triangleAreaCalc(){
    const base = document.getElementById("InputBase").value;
    const height = document.getElementById("InputHeight").value;
    const area = areaOfTriangle(base,height);
    alert(`The area is: ${area}cm^2`);
}

function trianglePerimeterCalc(){
    const base = document.getElementById("InputBase2").value;
    const side1 = document.getElementById("InputSide1").value;
    const side2 = document.getElementById("InputSide2").value;

    if (side1 == side2) {
        const isosceles = heightOfTriangleIsosceles(side1,base);
        console.log(isosceles);
        alert(`Its triangle is isosceles, for which its height will be calculated: ${isosceles}`)
    }else{
        const perimeter = perimeterOfTriangle(side1,side2,base);
        alert(`The perimeter is: ${perimeter}cm`);
    }
}

function areaCircleCalc(){
    const radio = document.getElementById("InputRadio").value;
    const area = areaOfCircle(radio);
    alert(`The area is: ${area}cm^2`);
}

function perimeterCircleCalc(){
    const radio = document.getElementById("InputRadio").value;
    const perimeter = perimeterOfCircle(radio);
    alert(`The perimeter is: ${perimeter}cm`);
}