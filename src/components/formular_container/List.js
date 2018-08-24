
import htmlToElement from 'html-to-element';

export default class List {
    constructor(){} 
    createList = () => {
        const list = htmlToElement(`
            <div class="accordion accordion--fixed accordion--open" style="overflow: hidden; margin-top: 30px;">
            <div class="accordion__head"style="
            padding: 4px 9px 3px 3px;
            position: relative;
            ">
                <div class="accordion--trigger accordion__head--search--wrapper" style="overflow: hidden;display: inline-table;">
                <div class="accordion--trigger accordion__head--search" style="max-width: 80%;text-overflow: ellipsis;">
                    MyFavoriteSites
                </div>
            </div>
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
            </div>
            </div>
            <div class="accordion__body" id="list">
            </div>
            <div class='right' style='text-align: right;margin: 10px 10px 5px 0;'>
            <a href='#' id='right'>Mehr anzeigen</a>             
            </div>
            </div>`);
            return list;
    }
}
