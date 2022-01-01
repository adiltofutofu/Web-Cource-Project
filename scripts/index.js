let storedUsers = JSON.parse(localStorage.getItem("users"));
function showModal(e){
    e.preventDefault();
    $('.modal').css("display" , "flex");
}
function closeBtn(){
    $('.modal').css("display" , "none");
}
function signIn(e){
    e.preventDefault();
    let admin = {
        email: 'admin@admin.com',
        pass: 'admin'
    }
    let index;
    storedUsers = JSON.parse(localStorage.getItem("users"));
    let enterEmail = $('#sign_email').val();
    let enterPassword = $('#sign-password').val()
    let have = 0;
    if(enterEmail === admin.email){
        if(enterPassword === admin.pass){
            $('#profile').css('display' , 'inline')
        }
    }else{
        for(let i = 1; i < storedUsers.length; i++){
            if(storedUsers[i].email == enterEmail && storedUsers[i].status == 'e'){
                have = 1;
                index = i
            }
        } 
        if(have == 1){
            if(storedUsers[index].pass === enterPassword){
                console.log($('#profile'))
                
                $('#inMes').html('Welcome')
            }else{
                $('#inMes').html('Wrong password')
            }
        }else{
            $('#inMes').html('Such user does not exist')
        }
    }
    
}
let allUser = []
let upUser = {}
function regis(e) {
    e.preventDefault()
    allUser.push(JSON.parse(localStorage.getItem("users")));
    let check = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if($('#upPass').val() === $('#repPass').val() && ($('#upPass').val().match(check))){
        upUser = {
            'firstname': $('#upName').val(),
            'lastname' : $('#upLastname').val(),
            'email' : $('#upEmail').val(),
            'pass' : $('#upPass').val(),
            'status' : 'no'
        }
        allUser.push(upUser)
        localStorage.setItem("users", JSON.stringify(allUser));
        location.replace('file:///Users/tmrbk/Downloads/web_project/home.html')
    }else if($('#upPass').val() !== $('#repPass').val()){
        alert('Password mismatch')
    }else{
        alert('Choose a harder password')
    }
}

let output = ''
showAllUsers()
function showAllUsers(){
    storedUsers = JSON.parse(localStorage.getItem("users"));
    for(let i = 1; i < storedUsers.length; i++){
        output = `
            <tr>
                <td class="center-align">${i}</td>
                <td>${storedUsers[i].firstname} ${storedUsers[i].lastname}</td>
                <td>${storedUsers[i].email}</td>
                <td class="center-align">${storedUsers[i].status}</td>
            </tr>`
    }
    $('.users').append(output)

    
}
function addUser(){
    output = `
        <tr>
            <td class="center-align"><input id="addFirstname" style="width: 90%;" type="text" placeholder="Firstname"></td>
            <td class="center-align"><input id="addLastname"  style="width: 90%;" type="text" placeholder="Lastname"></td>
            <td class="center-align"><input id="addEmail" style="width: 90%;" type="email" placeholder="Email"></td>
            <td class="center-align"><input id="addPass" style="width: 90%;" type="password"></td>
            <td class="center-align"><input id="addStatus" style="width: 90%;" type="text"></td>
            <td class="center-align"><button onclick=(addNewUser())>Save</button></td>
        </tr>`
    $('.addUs').append(output)
}
function addNewUser(){
    allUser.push(JSON.parse(localStorage.getItem("users")));
        newUser = {
            'firstname': $('#addFirstname').val(),
            'lastname' : $('#addLastname').val(),
            'email' : $('#addEmail').val(),
            'pass' : $('#addPass').val(),
            'status' : $('#addStatus').val()
        }
        allUser.push(newUser)
        localStorage.setItem("users", JSON.stringify(allUser));
}