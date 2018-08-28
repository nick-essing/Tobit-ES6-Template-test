import htmlToElement from 'html-to-element';

export default class List {
    constructor(id) {
        document.querySelector(id).appendChild(this.createBtn());
        this.currElement;
    }

    createBtn = () => {
        const btn = htmlToElement(`
            <div class='right' style='text-align: right;margin: 10px 10px 5px 0;'>
            <a href='#' id='right'>Mehr anzeigen</a>             
            </div>
            </div>`);
            return this.currElement = btn;
    }
    addMoreListener = (callback) => {
        this.currElement.querySelector('#right').addEventListener('click', () => {  
            if (document.querySelector('#search').value === ""){
                callback('love');
            }else{
                callback(document.querySelector('#search').value);
            }
        });
    }  
}