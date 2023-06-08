let emojiArray = [128513, 128512, 128514, 128515, 128516];
let newEmojiArray = emojiGenerator();

emojiShow(emojiArray, '.answers', 'block');
emojiShow(newEmojiArray, '.add-answers', 'none');

let allEmojiArray = document.querySelector(`.container`);
allEmojiArray.addEventListener('click', (event) => {
    if(event.target.closest('.answers__btn')) {
            let idEmoji = event.target.classList[1].split('-')[1];
            if (emojiArray.some(elem => elem === Number(idEmoji))) {
                addVoice(event);
            } else {
                emojiArray.splice(-1, 0, Number(idEmoji));
                emojiShow([idEmoji], '.answers', 'block');
            }
    }
})
    
function createVoiceCard(emojiDec, container, showVoice) {
    let divCard = document.createElement('div');
    divCard.setAttribute('class', 'answers__card');
    divCard.innerHTML = `<button type="button" class="answers__btn btn-${emojiDec}">&#${emojiDec}</button>
    <p class="answers__voice voice-${emojiDec}" style="display: ${showVoice}">0</p>`;
    document.querySelector(container).appendChild(divCard);
}

function addVoice(elem) {
    let btnClass = elem.target.classList[1];
    let changeClassEmoji = btnClass.split('-');
    changeClassEmoji[0] = 'voice';
    let voice = document.querySelector(`.${changeClassEmoji.join('-')}`).innerText;
    document.querySelector(`.${changeClassEmoji.join('-')}`).innerText = Number(voice) + 1;
};

function emojiGenerator() {
    let idEmoji = 128516;
    let quantityEmodji = 65;
    let allEmojiArray = [];
    for (let i = 0; i < quantityEmodji; i++) {
        allEmojiArray.push(idEmoji++);
    }
    return allEmojiArray;
}

function emojiShow(array, container, showVoice) {
    for (let value of array) {
        createVoiceCard(value, container, showVoice);
    }
}



