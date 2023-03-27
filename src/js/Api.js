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
    const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`);
    const json = await data.json();

    if(inputValue) {
        if(json.title) {
            console.log(json.title); 
            const errorElement = document.createElement('li');
            errorElement.innerText = json.title;
            list.append(errorElement)       
        }
        console.log(json);
        return json;    
    } else {
        list.innerHTML = '';
    }
}

const getData = debounce(getApiData, 500);

export default getData;