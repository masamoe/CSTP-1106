function quad(a,b,c){
    a=Number($("#a").val())
    b=Number($("#b").val())
    c=Number($("#c").val())
    d=((b**2)-4*a*c)
    x1=(-b+Math.sqrt(d))/(2*a)
    x2=(-b-Math.sqrt(d))/(2*a)

    if(a==0){
        console.log("Not Quadratic")
        if(b==0){
            console.log("a=0")
            console.log("b=0")
            console.log("Bye!")
        }
        else{
            x1=(-c/b)
            console.log("Answer:", x1)
        }
    }
    else{
        if(d<0){
        console.log("No Real Answer. Failed to take square root of negative value.")
        }
        else{
            console.log("x1:", x1, "x2:", x2)
        }
    }
}
a=0
b=0
c=0
quad(a,b,c)

function solve (){
    $("#submit").click(quad)
}

$(document).ready(solve)