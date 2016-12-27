/**
 * Created by BALASUBRAMANIAM on 26-12-2016.
 */

var dbref=window.indexedDB.open("PolarisDB",1);

var db;
dbref.onerror = function(evt)
{
console.log("Error Occurred during db creation"+evt.target.result);
};

dbref.onsuccess=function(evt)
{
  db=dbref.result;
    console.log("DB successfully created");
}
dbref.onupgradeneeded=function(evt)
{
    db = evt.target.result;
    var objectStore = db.createObjectStore
    ("ProfileData", {keyPath: "MobileNo"});
    console.log("Object Store Created");

};




function create()
{
    console.log("form submitted");
    var fname= document.getElementById("firstName");
    var lname=document.getElementById("lastName");
    var email = document.getElementById("email");
    var mobileNo=document.getElementById("mobileNo");
    var dob =document.getElementById("dob");
    var pwd=document.getElementById("password");
    console.log(fname.value);
    console.log(lname.value);
    console.log(email.value);
    console.log(mobileNo.value);
    console.log(dob.value);
    console.log(pwd.value);
    var request = db.transaction(["ProfileData"], "readwrite")
        .objectStore("ProfileData")
        .add({MobileNo: mobileNo.value, FirstName:fname.value,LastName:lname.value,
            Email:email.value,DOB:db.value,Password:pwd.value});
    request.onerror=function(evnt)
    {
        console.log("Error Occurred"+evnt.target.result);
    }

    request.onsuccess=function(evnt)
    {
        console.log("Record added");
    }
    /*
    window.localStorage.setItem("FNAME",fname.value);
    window.localStorage.setItem("LNAME",lname.value);
    window.localStorage.setItem("EMAIL",email.value);
    window.localStorage.setItem("MOBILENO",mobileNo.value);
    window.localStorage.setItem("DOB",dob.value);
    window.localStorage.setItem("PASSWORD",pwd.value);
    */
    return false;
}