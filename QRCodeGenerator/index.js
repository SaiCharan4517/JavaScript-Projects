function generateQRCode(){
    var website=document.getElementById('website').value 
    if(website){
        let qrcodecontainer=document.getElementById('qrcode')
        qrcodecontainer.innerhtml=""
        new QRCode(qrcodecontainer,website)
        document.getElementById('qrcode-container').style.display="block"
    }
    else{
        alert("please enter the valid url")
    }
}