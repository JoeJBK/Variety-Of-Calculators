function secondLaw(mass, acc) {

    mass = document.getElementById("mass").value;
    acc = document.getElementById("acc").value;

    var force = (mass * acc);

    if (isNaN(mass) || isNaN(acc)) {
        alert("Invalid Input");
    }
    else {

        document.getElementById("secondLawOut").innerHTML = "Force = " + force.toFixed(2);
    }
}

function displacement(initVel, time, acc) {

    initVel = document.getElementById("initVel").value;
    time = document.getElementById("time").value;
    acc = document.getElementById("acc").value;

    //vi*t – (1/2) a*t^2
    var displacement = (initVel * time) + (1 / 2 * acc * Math.pow(time, 2));

    if (isNaN(initVel) || isNaN(acc) || isNaN(time)) {
        alert("Invalid Input");
    }
    else {

        document.getElementById("displacementOut").innerHTML = "Displacement = " + displacement.toFixed(2);
    }
}

function quadratic(a, b, c) {

    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;

    //(-b +/- sqrt(-b^2 – 4ac) / (2a)
    var quadraticPos = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    var quadraticNeg = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Invalid Input");
    }
    else {

        document.getElementById("quadraticOut").innerHTML = "Quadratic Equation = (+)" + quadraticPos.toFixed(2) + ", (-)" + quadraticNeg.toFixed(2);
    }
}

function presentVal(pmt, interest, periodNum) {

    pmt = document.getElementById("pmt").value;
    interest = document.getElementById("interest").value;
    periodNum = document.getElementById("periodNum").value;

    interest = interest / 100;

    var presentVal = pmt * (1 -(1 / (Math.pow(1 + interest, periodNum)))) / interest;

    if (isNaN(pmt) || isNaN(interest) || isNaN(periodNum)) {
        alert("Invalid Input");
    }
    else {

        document.getElementById("presentValOut").innerHTML = "Present Value = " + presentVal.toFixed(2);
    }
}


