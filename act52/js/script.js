


function vldchk(){
var pw = document.getElementById('password').value
var cpw = document.getElementById('Cpassword').value
var err = document.getElementById('errpwd')
var chbx = document.getElementById('cbxPolicy1')
var errplc= document.getElementById('errplc')
    if(pw!=cpw){
        err.style.display="block"
        return false;
    }
    if (chbx.checked==false) {
        errplc.style.display="block"
        return false;
    }
    alert('Done!')
   
}