function toEnter(){

    var area = document.getElementById('area');
    var tex = prompt('Type your name');
    
    if(tex == '' || tex == null){
        alert('please, type your name again');
        area.innerHTML = 'Welcome... ';
    } else {
        area.innerHTML = 'Welcome master ' + tex;
    }

}
function toEnter2(name, age) {

    var area = document.getElementById('area2');
    var tex = prompt('Type your lastName');
    area.innerHTML = "Welcome " + name + " " + tex + " you are " + age + " years old.";


}

