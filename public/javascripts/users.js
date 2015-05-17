function userData(){
    $.ajax({
        url: '/users/list',
        data: {},
        method: 'get',
        dataType: 'json',
        success: function(data, textStatus, jqXHR){
            clearData();
            appendData(data);
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log(textStatus,errorThrown);
        },
        complete: function(jqXHR, textStatus){
            console.log("userData() Complete:", textStatus);
        }
    });
}

function clearData(){
    $('.displayUsers').empty();
}

function appendData(data){
    for (var i=0; i<data.length; i++) {
        var username, firstName, lastName, email;
        var userInfo = "";
        if (data[i].username)
            username = data[i].username;
            userInfo += ("<strong>User Name: </strong>" + username + " ");
        if (data[i].firstName)
            firstName = data[i].firstName;
            userInfo += ("<strong>Name: </strong>" + firstName + " ");
        if (data[i].lastName)
            lastName = data[i].lastName;
            userInfo += (lastName + ", ");
        if (data[i].email)
            email = data[i].email;
            userInfo += ("<strong>Email: </strong>" + email);
        $('.displayUsers').append("<li>"+userInfo+"</li>");
    }
}


$(document).ready(function(){
    userData();
});
