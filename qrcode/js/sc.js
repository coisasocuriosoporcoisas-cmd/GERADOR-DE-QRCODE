const input= document.getElementById("ip");
const but = document.getElementById("bt");
const qr = document.getElementById("qrc");


but.addEventListener('click', gera_qrcode);

function gera_qrcode(){
    const cad = document.getElementById("card");
    qr.innerHTML= '';
    if(input.value.trim() !== ''){
        new QRCode(qr, input.value);
        cad.style.display = "flex"
    }
    else {
        alert("informe um link válido!");
        cad.style.display = "none";
    }
    
}