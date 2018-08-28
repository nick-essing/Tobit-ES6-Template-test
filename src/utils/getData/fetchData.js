export default class loadJson {
    constructor(link) {
        return new Promise((resolve, reject) => {
            fetch(link)
                .then((response) => {
                    return (response.json());
                }).then((json) => {
                    console.log('parsed json', json)
                    resolve(json);
                }).catch((ex) => {
                    console.log('parsing failed', ex);
                    reject();
                });
        }); 
    }
}