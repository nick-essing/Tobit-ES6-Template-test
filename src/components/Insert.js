import Formular from './formular_container/Formular';
import tempList1 from './tempList-container/tempList';
import ListContainer from './formular_container/ListContainer';
import Searchbar from './formular_container/Searchbar';

export default class Insert {
    
    constructor() {
        this.tempList = new tempList1();
        new ListContainer('#list',this);
        new Searchbar('#searchbar',this);
        new Formular('#formular'); 
        this.tempList.refreshList("https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString="+ "love" +"&Skip="+ "0" +"&Take="+ "10");
    }

    onSearchBtnChange = (SearchString) => {
        this.tempList.refreshList("https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString="+ SearchString +"&Skip="+ "0" +"&Take="+ "10");
    }
    onMoreBtnChange = (SearchString) => {
        this.tempList.appendList(SearchString);
    }
}