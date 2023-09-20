
let person = prompt("Please enter your name");
 let kilogram =prompt(" please input your weight in kg");
 function mySelf(person, kilogram){
    
    if (person && kilogram != null) {
        const kg =  kilogram * 2.2;
          alert (`my name is ${person} , i weigh ${kg} pounds`);
           
     }
 }
mySelf(person,kilogram );