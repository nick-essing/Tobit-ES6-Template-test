import Formular from './components/formular';
import temp_List from './components/listContainer/tempList-container/tempList';
import ListContainer from './components/listContainer/ListContainer';
import Searchbar from './components/listContainer/Searchbar';

const init = async () => {
    await chayns.ready;
    new ListContainer('#list');
    new Formular('#formular'); 
};

init();

/*
    onSearchBtnChange = (SearchString) => {
        this.tempList.refreshList("https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString="+ SearchString +"&Skip="+ "0" +"&Take="+ "10");
    }
    onMoreBtnChange = (SearchString) => {
        this.tempList.appendList(SearchString);
    }
*/