export default intercomData (name,url,facebook,adress,place) => {
    if(name !== ''&& url !== ''){
        chayns.intercom.sendMessageToPage({ 
            text:"Neue Site "+ name +", "+ url +", "+ facebook +", "+ adress +", "+ place
        });
        document.querySelector('#MyName').value = "",
        document.querySelector('#MyUrl').value = "",
        document.querySelector('#MyFacebook').value = "",
        document.querySelector('#MyAdress').value = "",
        document.querySelector('#MyLocation').value = ""
    }else {
        chayns.dialog.alert('Fehler', 'Bitte fülle die Plichtfelder aus.');
    }
}