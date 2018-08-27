import htmlToElement from 'html-to-element';

export default class Searchbar {
    constructor(element) {
        document.querySelector(element).appendChild(this.createSearchBar());
        this.addSearchListener();
    }
    createSearchBar = () => {
        const searchbar = htmlToElement(`
            <div class="Suche Suche--accordion" style="
            position: absolute;
            top: 4px;
            right: 9px;
            width: 40%;
            float: right;
            font-size: 14px!important;  
            ">
                <input id= "search" type="text" placeholder="Suche" value="" style="  
                width: 100%;
                background-color: transparent;
                border-width: 0 0 1px;
                border-color: #b8c6e3;
                padding: 4px 8px;
                border-radius: 0!important;
                ">
                <label style="
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                max-height: 28px;
                opacity: .6;
                display: flex;
                align-items: center;
                ">
                    <i class="fa fa-search"></i>
                </label>
            </div>`);
            return searchbar;
    }
    addSearchListener = () => {
        document.querySelector('#search').addEventListener('input', () => {  
            let timeout = null;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                /*return new Promise((resolve, reject) => {
                    try{
                        if (document.querySelector('#search').value === ""){
                            resolve('love');
                        }else{
                            resolve(document.querySelector('#search').value);
                        }
                    }catch(e){
                        reject();
                    }
                }) */              
            },300); 
        });
    }
}