const form = document.getElementById("form-registrasi");
const btnSubmit = document.getElementById("btn-submit");

form.addEventListener('submit',function(e){
    e.preventDefault();
    let namaResto = document.getElementById("nama").value;
    swal({
        title: "Informasi",
        text: "Selamat "+namaResto+" sudah terdaftar!!",
        icon: "success",
        button: "Tutup",
      });
    
    form.reset();
});