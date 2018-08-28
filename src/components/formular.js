import htmlToElement from 'html-to-element';

export default class Formular {
    constructor(element) {
        document.querySelector(element).appendChild(this.createFormular());   
        this.currElement
        this.addListener();
    }
    baseForm = null;
    createFormular = () => {
        const form = htmlToElement(`
                <div class= "content__card" style= "margin-top: 15px">
                <h2>Du willst eine Site für deine Firma hinzufügen ?</h2>
                <p>geb hier die Daten deiner Site und deines Unternehmens an</p>
                <div class="input-group">
                    <input class="input" id= "myName" type="text" required>
                    <label id="name">Name *</label>
                </div>
                <div class="input-group">
                    <input class="input" id="myUrl"type="text" required>
                    <label id="url">Url *</label>
                </div>
                <div class="input-group">
                    <input class="input" id="myFacebook" type="text" required>
                    <label id="facebooksite">Facebookseite</label>
                </div>
                <div class="input-group">
                    <input class="input" id="myAdress" type="text" required>
                    <label id="street">Straße/Hr.</label>
                </div>
                <div class="input-group">
                    <input class="input" id="myLocation" type="text" required>
                    <label id="city">PLZ/Ort</label>
                </div>
                <div style="text-align: center; margin-top: 10px">
                    <button class="button" id= "sendNow">Site hinzufügen</button>
                </div>
                </div>`);
            return this.currElement = form;
        }
    addListener = () => {
        document.querySelector('#sendNow').addEventListener('click', () => {                
            let name = this.currElement.querySelector('#myName').value;
            let url = this.currElement.querySelector('#myUrl').value;
            let facebook = this.currElement.querySelector('#myFacebook').value;
            let adress = this.currElement.querySelector('#myAdress').value;
            let place = this.currElement.querySelector('#myLocation').value;
            if (name !== '' && url !== '') {
                chayns.intercom.sendMessageToPage({  
                    text:"Neue Site : "+ name +", "+ url +", "+ facebook +", "+ adress +", "+ place
                });
                this.currElement.querySelector('#myName').value = '',
                this.currElement.querySelector('#myUrl').value = '',
                this.currElement.querySelector('#myFacebook').value = '',
                this.currElement.querySelector('#myAdress').value = '',
                this.currElement.querySelector('#myLocation').value = '' 
            } else {
                chayns.dialog.alert('Fehler', 'Bitte fülle die Plichtfelder aus.');
            } 
        });
    }
}


