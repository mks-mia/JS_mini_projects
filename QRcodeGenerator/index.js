const qrname = document.getElementById('qrname');
const img = document.getElementById('img');
const qr = document.getElementById('qr');
const button = document.getElementById('button');

function generate(){
    if(button.innerHTML === 'Reset'){
        // Reset functionality
        qrname.value = '';
        qr.src = "";
        button.innerHTML = "Generate";
    }
    else if(qrname.value.length>0){
        qr.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrname.value; 
        img.classList.add('imgbox');
        button.innerHTML = "Reset";
    }
    else{
        qrname.classList.add('error');
        setTimeout(()=>{
            qrname.classList.remove('error');
        },1000);
    }
}