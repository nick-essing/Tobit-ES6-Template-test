import './listSyles.scss';
import htmlToElement from 'html-to-element';
import fetchData from '../../../utils/getData/fetchData';

let tempList = [],count = 10;
export default class temp_List {
    constructor(searchString) {
        this.appendList(searchString);
    }
    refreshList = (link) => { 
        fetchData(link).then((data) => {
            this.deleteAllItems();
            this.clearTemp();
            this.createTempList(data.Data);
            this.createItemList(); 
            }); 
    }
    appendList = (searchString) => {
        fetchData("https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=" + searchString + "&Skip="+ tempList.length +"&Take="+ count).then((data) => {
            this.createTempList(data.Data);
            this.createItemList(); 
        }); 
    }
    clearTemp = () => {
        tempList = [];
    }
    createTempList = (data) => {
        let x = tempList.length;
        for (var i = x; i < x + data.length;i++){
            tempList.push(data[i-x]);
        }
    }
    createItemList = () => {
        for (var i = tempList.length - count; i < tempList.length; i++){
            this.createItem(tempList[i],i)
        }
    }
    deleteAllItems = () => {
        document.querySelector("#list1").innerHTML ="";   
    }
    createItem (item,id) {
        var picture,domain, elm;
        fetchData("https://chaynssvc.tobit.com/v0.5/"+item.locationId+"/mychayns/locationbaseinfo?locationIds="+item.locationId).then((data) => {
            picture = data.data[0].icon.url;
            fetchData("https://chaynssvc.tobit.com/v0.5/"+item.locationId+"/LocationSettings").then((data) =>{
                domain = data.data.domain;
                
                    elm = htmlToElement(`
                    <div id = 'data${id}'>
                    <div class='ListItem ListItem--accordion' id= 'open${id}'>
                        <div class='ListItem__head'>
                            <div class='ListItem__Arrow'>
                                <i class='fa fa-chevron-right'></i>
                            </div>
                            <div class='ListItem__Image'>
                                <img style= 'background-image: url(${picture})'>
                            </div>
                            <div class='ListItem__Title'>
                                <p class='ListItem__Title--headline'>${item.appstoreName}</p>
                                <p class='ListItem__Title--description'></p>
                            </div>
                            </div>
                            <div class='ListItem__body'>
                                <div class='ListItem__content'>
                                    <p> 
                                        <a href ="https://${domain}" target="tapp">https://${domain}</a> <br> 
                                        <a href ="https://www.facebook.de/${item.facebookId} " target="tapp1">https://www.facebook.de/${item.facebookId}</a> 
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
                `);
                document.querySelector("#list1").appendChild(elm);

                let close = true, text;
                elm.querySelector('.ListItem__head').addEventListener("click", () => {
                if (close){
                    text = "ListItem ListItem--accordion ListItem--accordion--open" 
                    close = false;
                }else{
                    text = "ListItem ListItem--accordion" 
                    close = true;
                }
                elm.className = text;
                }); 

            });
        });
    }
}