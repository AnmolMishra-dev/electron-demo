let $ = require('jquery')
let fs = require('fs')
let filename = 'contacts'
let sno = 0
var list=[];
let text = "";
let i
let name;
let email;
$('#add-to-list').on('click', () => {
  name = $('#Name').val()
  email = $('#Email').val()

    
   let obj = {
      name:name,
      email:email
   }
   list.push(obj);
// localStorage.data = JSON.stringify(list);
localStorage.setItem(localStorage.data, JSON.stringify(list));
list = localStorage.getItem(localStorage.data);
list = JSON.parse(list);



for ( i = 0; i < list.length; i++) {
 
   console.log(list[i]["name"]);
   console.log(list[i]["email"]);
   email=list[i]["email"];
 name=list[i]["name"];

 }

  
   

   addEntry();
})

$('#delete-to-list').on('click', () => {
   // let name = $('#Name').val()
   // let email = $('#Email').val()

   deleteEntry();
})





function addEntry() {
   if(email && name) {
      
      let updateString = '<tr><td>'+ i + '</td><td>'+ email +'</td><td>' 
         + name +'</td></tr>'
        
         sno++
       $('#contact-table').append(updateString)

alert('Data Successfully Saved ');


  list.push()
       
   }
}

function deleteEntry() {


   $("#contact-table tr").remove(); 
   localStorage.clear();
}


function loadAndDisplayContacts() {  
   
   //Check if file exists
   if(fs.existsSync(list)) {
      let data = fs.readFileSync(filename, 'utf8').split('\n')
      
      data.forEach((contact, index) => {
         let [ name, email ] = contact.split(',')
         addEntry(name, email)
         
      })
   
   } else {
      console.log("File Doesn\'t Exist. Creating new file.")
      fs.writeFile(filename, '', (err) => {
         if(err)
            console.log(err)
      })
   }
}

loadAndDisplayContacts()
