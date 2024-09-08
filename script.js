let users = [];
let mainbox = document.getElementById('main-box');
let alertof = document.getElementById('alert')

function display(){
    mainbox.innerHTML = "";
       
  users.forEach((pass,index)=>{
    

        let innerbox = document.createElement('div')
        let namebox = document.createElement('p')
        let emailbox = document.createElement('p')
        let trashbox = document.createElement('i')

      
        
        innerbox.classList.add("inner-box");
        trashbox.classList.add( "bi", "bi-trash3"); 

        namebox.innerText= pass.name;
        emailbox.innerText= pass.email;
        
        mainbox.appendChild(innerbox);
         
        innerbox.appendChild(namebox);
        innerbox.appendChild(emailbox);
        innerbox.appendChild(trashbox);

       
        trashbox.addEventListener('click', function(e){
        users.splice(index,1)
        display()

        })
    })

     

   

}

function doesEmailExist(email){
    let emailof = users.filter((emailof)=>{
        return emailof.email == email;
    })

    console.log(emailof);
    

    return emailof.length > 0 ? true : false
}


function addUser(){
      let name = document.getElementById('name');
      let email = document.getElementById('email');

      let user = {
        name:name.value,
        email:email.value,
      }
      let UserExist = doesEmailExist(email.value);
      
      if(UserExist == false){
        users.push(user)
        alertof.classList.add("sucess")
        alertof.innerText = "Email Added Sucessfully!";
        setTimeout(()=>{
            alertof.classList.remove("sucess")
        }, 2000)
      }
      else{
        alertof.classList.add("danger")
        alertof.innerText = "Email Already exist!!"

        setTimeout(()=>{
            alertof.classList.remove("danger")
        }, 2000)
      }

      display()
      
 



}