import Formular from './formular_container/Formular';
import List from './formular_container/List';

export default () => {
    const list = new List();
    document.querySelector('#list').appendChild(list.createList());
    const form = new Formular();
    document.querySelector('#formular').appendChild(form.createFormular());
};
