function loginCheck(){
    var userVar = document.getElementById('usernameInput');
    var passVar = document.getElementById('passwordInput');

    switch (userVar.value == "ILoveMaamPasco"){
        case true : 
            if (passVar.value == 12345){
                window.alert("Welcome, ILoveMaamPasco!");
            }
            else if (passVar.value !== 12345){
                window.alert("Wrong password!");
            }
            break;
        case false:
            if (passVar.value == 12345){
                window.alert("Wrong username!")
            }
            else if (passVar !== 12345){
                window.alert("Wrong username and password!")
            }
            break;
    }
    


}