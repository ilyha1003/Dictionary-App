import createErrorField from "./error";

const list = document.querySelector('.word__list');
const input = document.querySelector('.input');
const main = document.querySelector('.main');

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
    list.innerHTML = '';
    const inputValue = input.value.trim();
    try {
        if(inputValue) {
            const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`);
            const json = await data.json();
            
            if(json.title) {
                list.append(createErrorField(json.title, json.message));       
            }

            console.log(json);
        } else {
            list.innerHTML = '';
        }
    } catch(err) {        
        console.log(err);
    }
}

const getData = debounce(getApiData, 500);

export default getData;