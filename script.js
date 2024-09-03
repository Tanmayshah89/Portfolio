const menuIcon=documnet.queryselector('#menu-icon');
const navbar=documnet.queryselector('.navbar');

menuIcon.onclick=()=>{
 menuIcon.classlist.toggle('bx-x');
 navbar.classlist.toggle('active');
}