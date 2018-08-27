import Formular from './formular_container/Formular';
import tempList1 from './tempList-container/tempList';
import ListContainer from './formular_container/ListContainer';
import Searchbar from './formular_container/Searchbar';

export default () => {
    let tempList = new tempList1();
    let list = new ListContainer('#list');
    new Searchbar('#searchbar');
    /*list.returnEvents().then((data,searchString) => {
        if (data){
            tempList.refreshList("https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString="+ searchString +"&Skip="+ "0" +"&Take="+ "10");
        }else{
            tempList.appendList(SearchString);
        }
    }); */
    new Formular('#formular'); 
    tempList.refreshList("https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString="+ "love" +"&Skip="+ "0" +"&Take="+ "10");
};

/*
myClass()
{
   onChance = ()=>{};
}

let myInstance = new myClass();
myInstance .onChance = function(value){
   console.log(value);
}
*/