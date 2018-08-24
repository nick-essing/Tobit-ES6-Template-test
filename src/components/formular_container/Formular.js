import htmlToElement from 'html-to-element';

export default class Formular {
    constructor(){}
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
            return form;
        }
    }
