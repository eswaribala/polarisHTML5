/**
 * Created by BALASUBRAMANIAM on 26-12-2016.
 */
window.onload=init;

function init()
{
    sectionref=document.getElementById("result");
    if(window.localStorage.getItem("FNAME")!=undefined)
    {
        //console.log(window.localStorage.getItem("FNAME"));
        var para= document.createElement("p");
        var text = document.createTextNode
        (window.localStorage.getItem("FNAME"));
        para.appendChild(text);
        sectionref.appendChild(para);
    }
    if(window.localStorage.getItem("LNAME")!=undefined)
    {
        var para= document.createElement("p");
        var text = document.createTextNode(window.localStorage.getItem("LNAME"));
        para.appendChild(text);
        sectionref.appendChild(para);
    }
}