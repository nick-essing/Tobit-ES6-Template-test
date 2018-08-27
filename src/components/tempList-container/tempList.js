import loadJson from '../json/loadJson';
import './ListSyles.scss';
let tempList = [],count = 10;
export default class tempList1 {
    constructor() {

    }
    refreshList = (link) => { 
        new loadJson(link).then((data) => {
            this.deleteAllItems();
            this.clearTemp();
            this.createTempList(data.Data);
            this.createItemList(); 
        }); 
    }
    appendList = (searchString) =>{
        new loadJson("https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=" + searchString + "&Skip="+ tempList.length +"&Take="+ count).then((data) => {
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
            this.createItem(tempList[i],i);
        }
    }
    deleteAllItems = () => {
        document.querySelector("#list1").innerHTML ="";   
    }
    createItem = (item,id) => {
        var picture,domain;
        new loadJson("https://chaynssvc.tobit.com/v0.5/"+item.locationId+"/mychayns/locationbaseinfo?locationIds="+item.locationId).then((data) => {
            picture = data.data[0].icon.url;
            new loadJson("https://chaynssvc.tobit.com/v0.5/"+item.locationId+"/LocationSettings").then((data) =>{
                domain = data.data.domain;
                var div = document.createElement("div");
                
                div.innerHTML = ""+ 
                    "<div id = 'data"+ id +"'>" +
                    "<div class='ListItem ListItem--accordion' id= 'open"+ id +"'>" +
                        "<div class='ListItem__head'>" +
                            "<div class='ListItem__Arrow'>" +
                                "<i class='fa fa-chevron-right'></i>" +
                            "</div>" +
                            "<div class='ListItem__Image'>" +
                                "<img style="+"'"+"background-image: url("+picture+")'>" +
                            "</div>" +
                            "<div class='ListItem__Title'>" +
                                "<p class='ListItem__Title--headline'>"+ item.appstoreName +"</p>" +
                                "<p class='ListItem__Title--description'></p>" +
                            "</div>" +
                            "</div>" +
                            "<div class='ListItem__body'>" +
                                "<div class='ListItem__content'>" +
                                    "<p>" + 
                                        "https://"+ domain +"<br>" +
                                        //"<div id= 'script"+ id +"'><a><script>document.querySelector('#script"+ id +"').addEventListener('click', function(){chayns.openUrlInBrowser('https://"+ domain +"')});</script>"+domain+"</a></div>"+
                                        "https://facebook/" + item.facebookId +
                                    "</p>" +
                                "</div>" +
                            "</div>" +
                        "</div>" +
                "</div>"
            document.querySelector("#list1").appendChild(div);
            let close = true, text;
                document.querySelector("#data"+id).addEventListener("click", () => {
                        if (close){
                            text = "ListItem ListItem--accordion ListItem--accordion--open" 
                            close = false;
                        }else{
                            text = "ListItem ListItem--accordion" 
                            close = true;
                        }
                        document.querySelector("#open"+id).className = text;
                    }); 
            });
        });
    }
}