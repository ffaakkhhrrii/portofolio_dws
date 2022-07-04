/*1. membuat sebuah fungsi untuk melakukan submit data
2. tangkap nilai dari setiap elemen input di html
3.Tampilkan
4. validasi input tidak boleh kosong maka caranya menggunakan conditional*/

function submitData(){
    // didalam fungsi ini adalah action 

    //DOM = Document Object Modeling
 let name = document.getElementById('name').value
 let email = document.getElementById('email').value
 let phone = document.getElementById('phone').value
 let subject = document.getElementById('subject').value
 let message = document.getElementById('message').value
 
 //conditional

 if(name == ""){
    alert('Nama harus diisi')
 }else if(email == ""){
     alert('Email harus diisi')
 }else if(phone == ""){
    alert('Phone harus diisi')
}else if(subject == ""){
    alert('Subject harus diisi')
}else if(message == ""){
    alert('Message harus diisi')
}else{
   let a = document.createElement('a')
   a.href = "mailto:fakhrizain9@gmail.com?subject=" + subject + "&body=" + message
   a.click()

   let dataObject = {
       name: name,
       email: email,
       phone: phone,
       subject: subject,
       message: message
   }
   console.log(dataObject)
}

}
