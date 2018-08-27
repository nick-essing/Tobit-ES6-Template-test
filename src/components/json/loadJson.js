export default class loadJson {
    constructor(link) {
        return new Promise(function(resolve, reject){
            fetch(link)
                .then(function(response) {
                    return (response.json());
                }).then(function(json) {
                    console.log('parsed json', json)
                    resolve(json);
                }).catch(function(ex) {
                    console.log('parsing failed', ex);
                    reject();
                });
        }); 
    }
}