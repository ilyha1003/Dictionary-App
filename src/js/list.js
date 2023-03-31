import getData from "./Api"

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

export default createListElement;