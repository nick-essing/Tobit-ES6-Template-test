import htmlToElement from 'html-to-element';
import Searchbar from './searchbar';
import moreBtn from './moreBtn';
import temp_List from './tempList-container/tempList';


export default class List {
    constructor(element) {
        document.querySelector(element).appendChild(this.createList());
        const tmp = new temp_List('love');
        new Searchbar('#searchBar',tmp);
        new moreBtn('#moreBtn',tmp);
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
            <div id="searchBar"></div>
            </div>
            <div class="accordion__body" id="list1">
            </div>
            <div id="moreBtn">
            </div>`);
            return list;
    }
}
