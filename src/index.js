/* eslint-disable no-console */
import insert from './components/insert'
import SERVER_URL from './constants/server-url';

const init = async () => {
    await chayns.ready;

    console.info('ServerUrl for current environment:', SERVER_URL);
    insert();
};

init();
