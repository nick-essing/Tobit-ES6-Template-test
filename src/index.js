import Formular from './components/formular';
import ListContainer from './components/listContainer/ListContainer';


const init = async () => {
    await chayns.ready;
    new ListContainer('#list');
    new Formular('#formular'); 
};

init();
