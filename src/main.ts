const a: String = "1";  //defining type
let b : Number = 23;
b = 24;

const getFullName = (Name : String , Last : String):String=>{          //defining type for parameters
    return Name + " " + Last;
}

console.log(getFullName("Ayush","Gupta"));

interface User{         //interface is used to define the type
    name : String,
    age : Number
}

const user1 : User ={   //HERE user interface is used to define type of user1 object
    name : "Samuu",
    age : 23
}