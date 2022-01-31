can= document.getElementById("mycanvas");
ctx= can.getContext("2d");
MouseEvent = "empty";
width = 3;
color= "red";
can.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    MouseEvent= "mouseLeave";
}
can.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    MouseEvent="mouseUp";
}


can.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    width=document.getElementById("widthchanger").value;
    color=document.getElementById("colorchanger").value;
    Radius=document.getElementById("radius").value;
    
    lpx=e.clientX-can.offsetLeft;
    lpy=e.clientY-can.offsetTop;
    MouseEvent="mouseDown"

}

can.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    
    if(MouseEvent=="mouseDown"){
        ctx.beginPath()
        ctx.lineWidth= width;
        ctx.strokeStyle= color;
        XPathExpression.arc(cpx,cpy,Radius,0,2*Math.PI)
        ctx.stroke()
    
    }
    lpy=cpy;
    lpx=cpx;

}
