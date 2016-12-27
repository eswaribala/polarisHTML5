/**
 * Created by BALASUBRAMANIAM on 27-12-2016.
 */

function getData()
{
    loginName=document.getElementById("loginName");
    pwd = document.getElementById("password");
    console.log(loginName.value);
    console.log(pwd.value);
    window.sessionStorage.setItem("loginId",loginName.value);
    window.sessionStorage.setItem("password",pwd.value);
    return false;
}