var u=document.getElementById("usr");
var p=document.getElementById("pwd");
function validate(){
    if(u.value=="admin"&&p.value==12345)
    {
        alert("Login Successfully");
        return true;
    }
    else if(u.value==""||p.value==""){
        alert("Fields Cannot Be Empty");
        return false;
    }
    else{
        alert("Incorrect Username Or Password");
        return false;
    }
}