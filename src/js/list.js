import getData from "./Api"

const wordList = document.querySelector('.word__list');

const createListElement = () => {
    const listElement = document.createElement('li');
    listElement.classList.add('list__element');

    const wordSection = document.createElement('div');
    wordSection.classList.add('word-section');

    const meaningSection = document.createElement('div');
    meaningSection.classList.add('meaning-section');
    const defenitionField = document.createElement('span');
    defenitionField.classList.add('defenition-field');
    const speechPartField = document.createElement('span');
    speechPartField.classList.add('speechpart-field');

    const phoneticSection = document.createElement('div');
    phoneticSection.classList.add('phonetic-section');
    const transcriptionField = document.createElement('span');
    transcriptionField.classList.add('transcription-field');
    const audioField = document.createElement('span');
    audioField.classList.add('audio-field');
    audioField.innerHTML = `<i class="fas fa-volume-up volume"></i>`

    meaningSection.append(defenitionField, speechPartField);
    phoneticSection.append(transcriptionField, audioField);
    listElement.append(wordSection, meaningSection, phoneticSection);

    return listElement;
}

const fillListElement = (apiData) => {
    apiData.forEach((el) => {
        const listElement = document.createElement('li');
        listElement.classList.add('list__element');
        listElement.classList.add('list-group-item');

        const wordSection = document.createElement('div');
        wordSection.classList.add('word-section');
        wordSection.innerText = el.word;

        const meaningsSection = document.createElement('div');
        meaningsSection.classList.add('meaning-section');
        const definitionsField = document.createElement('div');
        definitionsField.classList.add('defenitions-field');
        const speechPartField = document.createElement('span');
        speechPartField.classList.add('speechpart-field');
        speechPartField.innerText = 'Part of speech: '
        meaningsSection.append(speechPartField, definitionsField);

        el.meanings.forEach((el) => {
            const speechPartSpan = document.createElement('span');
            speechPartSpan.innerText = el.partOfSpeech;
            speechPartField.append(speechPartSpan);
            el.definitions.forEach((el) => {
                const definition = document.createElement('span');
                definition.innerText = el.definition;
                definitionsField.append(definition);
            })
        })
        

        listElement.append(wordSection, meaningsSection);
        wordList.append(listElement);
    });
    console.log(apiData);
}

export default fillListElement;