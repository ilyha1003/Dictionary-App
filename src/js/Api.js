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
    list.innerHTML = ''
    const inputValue = input.value;
    const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue.trim()}`);
    const json = await data.json();

    if(inputValue) {
        if(json.title) {
            console.log(json.title, json.message); 
            const errorElement = document.createElement('li');
            const spanTitle = document.createElement('span');
            const spanMessage = document.createElement('span');
            spanTitle.innerText = json.title;
            spanMessage.innerText = json.message;
            errorElement.append(spanTitle, spanMessage);
            list.append(errorElement);       
        }
        console.log(json);
    } else {
        list.innerHTML = '';
    }
}

const getData = debounce(getApiData, 500);

export default getData;