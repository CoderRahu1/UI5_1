function addNew() {

    var newElement = document.createElement("h1");

    var oTextNode = document.createTextNode(document.getElementById("Rahul").value);
    newElement.appendChild(oTextNode);

    var oAlreadyExisting = document.getElementById("m1");
    oAlreadyExisting.appendChild(newElement);

}



function rahulFunction() {
    var username = document.getElementById("Rahul").value;
    var password = document.getElementById("password").value;
    //alert("Username: " + username + " Password: " + password);
    if (username === "Rahul" && password === "123") {
        alert("Logon successful! Welcome, Rahul!");
        document.write("<h2>Welcome, Rahul!</h2>");

    }
    else {
        document.getElementById("message").innerText = "<div style='border:1px solid blue'> Invalid username or password</div>";
    }
}

// function jHide() {
//     document.getElementById("Rahul").value = ""; 
//     document.getElementById("password").value = ""; 
//     document.getElementById("message").innerText = "";
// }

function jMagic(status) {

    if (status === true)
    {
            // This function will hide the message and clear the input fields
    $("#myBox").animate(
        { 
            width: "+=50px",
            height: "+=50px"
        }
    );
        
    }

    else {
        $("#myBox").animate(
            { 
                width: "-=50px",
                height: "-=50px"
            }
        );
    }

}

function applyEffect() {
    $("#myBox").on("mouseenter", function() {
        // alert("Mouse enter");
        jMagic(true);
    });

    $("#myBox").on("mouseleave", function() {
        // alert("Mouse leave");
        jMagic(false);
    });
}
