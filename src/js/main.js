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