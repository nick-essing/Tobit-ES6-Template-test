import Formular from './formular_container/Formular';
import List from './formular_container/List';
import loadJson from './json/loadJson';
import tempList1 from './tempList-container/tempList';

export default () => {
    let tempList = new tempList1();
    new loadJson("https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString="+ "love" +"&Skip="+ "0" +"&Take="+ "10").then((data) => {
        tempList.createTempList(data.Data);
        tempList.createItemList();
    });
    const list = new List('#list');
    const form = new Formular('#formular'); 
};
