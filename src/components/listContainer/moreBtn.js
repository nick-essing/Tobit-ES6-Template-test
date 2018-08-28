import htmlToElement from 'html-to-element';

export default class List {
    constructor(id,tmp) {
        document.querySelector(id).appendChild(this.createBtn());
        this.addMoreListener(tmp);
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
    addMoreListener = (tmp) => {
        this.currElement.querySelector('#right').addEventListener('click', () => {  
            console.log(this.parentNode);
            if (document.querySelector('#search').value === ""){
                tmp.appendList('love');
            }else{
                tmp.appendList(document.querySelector('#search').value);
            }
        });
    }  
}