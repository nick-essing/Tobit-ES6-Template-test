import Formular from './components/formular';
import temp_List from './components/listContainer/tempList-container/tempList';
import ListContainer from './components/listContainer/ListContainer';
import Searchbar from './components/listContainer/searchBar';

const init = async () => {
    await chayns.ready;
    new ListContainer('#list');
    new Formular('#formular'); 
};

init();
