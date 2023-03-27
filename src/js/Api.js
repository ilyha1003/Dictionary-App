const getApiData = async (inputValue) => {
    try {
        const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`);
        const json = await data.json();
        console.log(json);
    } catch(error) {
        console.log('Error >>>', error);
    }
}

export default getApiData