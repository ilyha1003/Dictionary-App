import getApiData from "./Api";
import { loaderHTML } from "./constants";

document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.input');
    const wordList = document.querySelector('.word__list');

    const debounce = (func, delay) => {
        let timeout;
        return function () {
            const funcCall = () => {
                func.apply(this, arguments)
            };
            clearTimeout(timeout);
            timeout = setTimeout(funcCall, delay);
        };
    }

    const getApiData = async () => {
        const inputValue = input.value;
        if(inputValue) {
            const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`);
            const json = await data.json();
            console.log(json);
        }
        wordList.innerHTML = '';
    }

    getData = debounce(getApiData, 500);

    input.oninput = () => {
        wordList.innerHTML = loaderHTML;
        getData();
    }
    
})