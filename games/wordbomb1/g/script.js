let wordFileContent = null;
let wordFileUrl = "./words_alpha.txt"

async function loadFile(url)
{
    const response = await fetch(url);
    const text = await response.text();
    return text.split('\n').map(word => word.trim());
}

async function loadWordsIfNeeded(url) {
    if (!wordFileContent) {
        wordFileContent = await loadFile(url);
    }
}

async function newRandomLetters(segmentLength)
{
    await loadWordsIfNeeded(wordFileUrl);
    const randomLineNumber = Math.floor(Math.random() * wordFileContent.length);
    const word = wordFileContent[randomLineNumber].trim();
    if (word.length < segmentLength)
    {
        return word;
    }
    const randomIndexStart = Math.floor(Math.random()*(word.length-segmentLength + 1));
    letterSequence.innerText = word.substring(randomIndexStart, randomIndexStart+segmentLength);
}

async function isWordInFile(word)
{
    await loadWordsIfNeeded(wordFileUrl);
    return wordFileContent.includes(word.toLowerCase().trim());
}

let gameRunning = false;
const input = document.getElementsByClassName("word-input")[0];
const letterSequence = document.getElementsByClassName('letter-seq')[0];
const button = document.querySelector('.play-but');
const countdown = document.getElementsByClassName("countdown-bar")[0];
const computedStyleCountdown = getComputedStyle(countdown)
const message = document.getElementsByClassName('message')[0];
const correctSound = new Audio('assets/correct_sound.wav');
const incorrectSound = new Audio('assets/incorrect_sound.wav');
const clickSound = new Audio('assets/click_sound.wav');
const lostSound = new Audio('assets/lost_sound.wav');
const clockTickSound = new Audio('assets/clocktick_sound.wav');
const backgroundMusic = new Audio('assets/background_music.mp3');
const wordCountText = document.getElementsByClassName("word-count")[0];
const skipCountDiamonds = document.getElementsByClassName("skip-count")[0];
backgroundMusic.loop = true;
clockTickSound.loop = true;

const skipButton = document.getElementById("skip-button");
skipButton.addEventListener('click', function() {
    skipButton.classList.add('clicked');
    setTimeout(() => {
        skipButton.classList.remove('clicked');
    }, 100);
    skipButton.blur();
    if (gameRunning && skips>0)
    {
        message.innerText = "";
        playSound(clickSound)
        skips -= 1;
        input.value = '';
        const width = parseFloat(computedStyleCountdown.getPropertyValue("--width"))
        countdown.style.setProperty("--width", 100)
        skipCountDiamonds.innerText = Array(skips).fill('⬡').join(' ');
        newRandomLetters(2);
    }
    else {
        if (skips<=0) { message.innerText = "no more skips left"; }
        playSound(incorrectSound)
    }
    input.focus();
});

const musicButton = document.getElementById("music-button");
musicButton.addEventListener('click', function(){
    musicButton.classList.add('clicked');
    setTimeout(() => {
        musicButton.classList.remove('clicked');
    }, 100);
    musicButton.blur();
    playSound(clickSound)
    if (backgroundMusic.paused)
    {
        backgroundMusic.play();
        backgroundMusic.currentTime = 0; 
        enableMusic = true;
    } else 
    {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0; 
        enableMusic = false;
    }
    input.focus();
})

const restartButton = document.getElementById("restart-button");
restartButton.addEventListener('click', function() {
    restartButton.classList.add('clicked');
    setTimeout(() => {
        restartButton.classList.remove('clicked');
    }, 100);
    restartButton.blur();
    if (gameRunning)
    {
        playSound(clickSound)
        stopGame();
    }
    else {playSound(incorrectSound)} 
});



input.disabled = true;
let usedWords = [];
let score = 0;
let enableMusic = true;
let wordCount = 0;
let skips = 3;
let percentageSubtract = 0.1;

function playShakeAnim()
{
    input.classList.add('shake');
    setTimeout(() => {
        input.classList.remove('shake');
    }, 150);
}

function playPulseAnim()
{
    input.classList.add('pulse');
    setTimeout(() => {
        input.classList.remove('pulse');
    }, 800);
}

function playSound(sound) {
    // Reset the sound if it's already playing
    if (!sound.paused) {
        sound.pause();
        sound.currentTime = 0;
    }
    sound.play();
}


function handleInput(event) // Handle enter key press to sumbit word 
{
    if (event.key === 'Enter') {
        const word = input.value.trim();
        if (word && word.length>2 && word.toUpperCase().includes(document.getElementsByClassName('letter-seq')[0].innerText.toUpperCase()) && !usedWords.includes(word)) {
            isWordInFile(word).then(exists => {
                if (exists) {
                    playSound(correctSound)
                    usedWords.push(word);
                    score += 150 * word.length;
                    wordCount += 1;
                    playPulseAnim()
                    newRandomLetters(2);
                    input.value = '';
                    message.innerText = "";
                    wordCountText.innerText = String(wordCount);
                    countdown.style.setProperty("--width", 100)
                } 
                else
                {
                    playShakeAnim();
                    playSound(incorrectSound)
                    message.innerText = "Word not found";
                }
            }).catch(error => {
                message.innerText = "Server Error";
            })
        } else { 
            if (word.length <= 2) 
                { message.innerText = "Word must be at least 3 characters";}
            else if (usedWords.includes(word)) 
                {message.innerText = "Word was already used"} 
            else { message.innerText = "Word must contain" + " " + document.getElementsByClassName('letter-seq')[0].innerText;}

            playShakeAnim(); 
            playSound(incorrectSound)
        } 
    }
}

let lastTime = performance.now();
function updateCountdown()
{
    if(!gameRunning) return;
    let width = parseFloat(computedStyleCountdown.getPropertyValue("--width")) || 100
    const currentTime = performance.now();
    const deltaTime = currentTime - lastTime;
    lastTime = currentTime;

    const timeFactor = deltaTime / 1000; 
    percentageSubtract = 0.05;
    console.log(`Current Width: ${width}, Percentage Subtract: ${percentageSubtract}`);
    if (wordCount > 15) {percentageSubtract = Math.min(wordCount/180.0, .60)}
    if (width > 0)
        {
            width -= percentageSubtract * timeFactor * 100;
            countdown.style.setProperty("--width", width)
        }
        else
        {
            playSound(lostSound)
            if (skips <= 0 )
            {
                stopGame()
                return;
            }
            else 
            {
                skips -= 1;
                skipCountDiamonds.innerText = Array(skips).fill('⬡').join(' ');
                newRandomLetters(2);
                countdown.style.setProperty("--width", 100)
                input.value = '';

            }
        }
        requestAnimationFrame(updateCountdown);

}


function startGame() {
    lastTime = performance.now();
    document.getElementsByClassName('letter-seq')[0].style.textTransform = 'uppercase';
    gameRunning = true;
    countdown.style.setProperty("--width", 100)
    clockTickSound.play();
    if (enableMusic && backgroundMusic.paused) {  
        backgroundMusic.currentTime = 0;
        backgroundMusic.play() 
    }
    score = 0;
    wordCount = 0;
    skips = 3;
    usedWords = []
    percentageSubtract = 0.9;

    wordCountText.innerText = String(wordCount);
    input.addEventListener('keydown', handleInput);
    newRandomLetters(2);
    requestAnimationFrame(updateCountdown);
    
}

function stopGame()
{
    document.getElementsByClassName('letter-seq')[0].style.textTransform = 'none';
    message.innerText = "";
    skips = 3;
    skipCountDiamonds.innerText = Array(skips).fill('⬡').join(' ');
    gameRunning = false;
    usedWords = []
    if (!clockTickSound.paused) {
        clockTickSound.pause();       
        clockTickSound.currentTime = 0; 
    }
    input.removeEventListener('keydown', handleInput);
    gameRunning = false;
    input.disabled = true;
    countdown.style.setProperty("--width", 100)
    document.getElementsByClassName('letter-seq')[0].innerText = "Word Bomb";
    button.disabled = false;
    button.focus();
    input.value = '';
}


button.addEventListener('click', () => {
    playSound(clickSound)
    message.innerText = "starting...";
    button.disabled = true;
    input.disabled = false;
    input.focus();
    message.innerText = "";
    startGame(); 
    button.blur();
});

