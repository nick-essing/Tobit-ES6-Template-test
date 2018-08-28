import htmlToElement from 'html-to-element';

export default class List {
    constructor(element,object) {
        document.querySelector(element).appendChild(this.createList());
        this.addMoreListener(object);
    }

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
            <div id="searchbar"></div>
            </div>
            <div class="accordion__body" id="list1">
            </div>
            <div class='right' style='text-align: right;margin: 10px 10px 5px 0;'>
            <a href='#' id='right'>Mehr anzeigen</a>             
            </div>
            </div>`);
            return list;
    }
    addMoreListener = (object) => {
        document.querySelector('#right').addEventListener('click', () => {  
        if (document.querySelector('#search').value === "")
            object.onMoreBtnChange('love');
        else
            object.onMoreBtnChange(document.querySelector('#search').value);
        });
    }  
}
