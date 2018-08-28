import Formular from './components/formular_container/Formular';
import tempList1 from './components/tempList-container/tempList';
import ListContainer from './components/formular_container/ListContainer';
import Searchbar from './components/formular_container/Searchbar';

const init = async () => {
    await chayns.ready;
    this.tempList = new tempList1();
    new ListContainer('#list',this);
    new Searchbar('#searchbar',this);
    new Formular('#formular'); 
    this.tempList.refreshList("https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString="+ "love" +"&Skip="+ "0" +"&Take="+ "10");
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