import htmlToElement from 'html-to-element';

export default class Searchbar {
    constructor(id,tmp) {
        document.querySelector(id).appendChild(this.createSearchBar());
        this.currElement;
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
        return this.currElement = searchbar;
    }
    addSearchListener = (callback) => {
        let timeout = 0;
        this.currElement.querySelector('#search').addEventListener('keyup', () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                if (document.querySelector('#search').value === "")
                    callback("https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString="+ 'love' +"&Skip="+ "0" +"&Take="+ "10");
                else
                    callback("https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString="+ this.currElement.querySelector('#search').value +"&Skip="+ "0" +"&Take="+ "10");
            }, 300);
        });
    } 
}