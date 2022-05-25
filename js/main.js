window.onload = () => {
    // 
}

let date__now = new Date;


function reload() {
    date__now = new Date;


    text__TimeToFirst.innerHTML = `${date__FirstDay - date__now.getDate() + ((date__FirstMonth - date__now.getMonth() - 1)* 30)} дня`;
    text__TimeToRussian.innerHTML = `${date__RussianDay - date__now.getDate() + ((date__RussianMonth - date__now.getMonth() - 1)* 30)} дня`;
    text__TimeToMath.innerHTML = `${date__MathDay - date__now.getDate() + ((date__MathMonth - date__now.getMonth() - 1)* 30)} дня`;
    text__TimeToLang.innerHTML = `${date__FirstDay - date__now.getDate() + ((date__FirstMonth - date__now.getMonth() - 1)* 30)} дня`;
    text__TimeToPravo.innerHTML = `${date__PravoDay - date__now.getDate() + ((date__PravoMonth - date__now.getMonth() - 1)* 30)} дня`;
    text__TimeToHistory.innerHTML = `${date__HistoryDay - date__now.getDate() + ((date__HistoryMonth - date__now.getMonth() - 1)* 30)} дня`;
    text__TimeToBiology.innerHTML = `${date__BiologyDay - date__now.getDate() + ((date__BiologyMonth - date__now.getMonth() - 1)* 30)} дня`;
    text__TimeToLitra.innerHTML = `${date__LitraDay - date__now.getDate() + ((date__LitraMonth - date__now.getMonth() - 1)* 30)} дня`;

    if (now__choose != 2) {
        text__error.style.display = 'none';
    }
    
    if (button1__isOpen) {
        cat_lang.style.display = 'block';
        cat_biology.style.display = 'none';
        cat_history.style.display = 'none';
        cat_litra.style.display = 'none';
        cat_pravo.style.display = 'none';
        return
    } else {
        cat_lang.style.display = 'block';
        cat_biology.style.display = 'block';
        cat_history.style.display = 'block';
        cat_litra.style.display = 'block';
        cat_pravo.style.display = 'block';
    }

    if (button2__isOpen) {
        cat_lang.style.display = 'none';
        cat_biology.style.display = 'none';
        cat_history.style.display = 'none';
        cat_litra.style.display = 'none';
        cat_pravo.style.display = 'block';
        return
    } else {
        cat_lang.style.display = 'block';
        cat_biology.style.display = 'block';
        cat_history.style.display = 'block';
        cat_litra.style.display = 'block';
        cat_pravo.style.display = 'block';
    }

    if (button3__isOpen) {
        cat_lang.style.display = 'none';
        cat_biology.style.display = 'none';
        cat_history.style.display = 'block';
        cat_litra.style.display = 'none';
        cat_pravo.style.display = 'none';
        return
    } else {
        cat_lang.style.display = 'block';
        cat_biology.style.display = 'block';
        cat_history.style.display = 'block';
        cat_litra.style.display = 'block';
        cat_pravo.style.display = 'block';
    }

    if (button4__isOpen) {
        cat_lang.style.display = 'none';
        cat_biology.style.display = 'none';
        cat_history.style.display = 'block';
        cat_litra.style.display = 'block';
        cat_pravo.style.display = 'none';
        return
    } else {
        cat_lang.style.display = 'block';
        cat_biology.style.display = 'block';
        cat_history.style.display = 'block';
        cat_litra.style.display = 'block';
        cat_pravo.style.display = 'block';
    }

    if (button5__isOpen) {
        cat_lang.style.display = 'none';
        cat_biology.style.display = 'block';
        cat_history.style.display = 'block';
        cat_litra.style.display = 'none';
        cat_pravo.style.display = 'none';
        return
    } else {
        cat_lang.style.display = 'block';
        cat_biology.style.display = 'block';
        cat_history.style.display = 'block';
        cat_litra.style.display = 'block';
        cat_pravo.style.display = 'block';
    }
    
    if (button6__isOpen) {
        cat_lang.style.display = 'none';
        cat_biology.style.display = 'block';
        cat_history.style.display = 'block';
        cat_litra.style.display = 'none';
        cat_pravo.style.display = 'none';
        return
    } else {
        cat_lang.style.display = 'block';
        cat_biology.style.display = 'block';
        cat_history.style.display = 'block';
        cat_litra.style.display = 'block';
        cat_pravo.style.display = 'block';
    }

    if (button7__isOpen) {
        cat_lang.style.display = 'none';
        cat_biology.style.display = 'block';
        cat_history.style.display = 'none';
        cat_litra.style.display = 'block';
        cat_pravo.style.display = 'none';
        return
    } else {
        cat_lang.style.display = 'block';
        cat_biology.style.display = 'block';
        cat_history.style.display = 'block';
        cat_litra.style.display = 'block';
        cat_pravo.style.display = 'block';
    }

    if (button8__isOpen) {
        cat_lang.style.display = 'none';
        cat_biology.style.display = 'block';
        cat_history.style.display = 'none';
        cat_litra.style.display = 'block';
        cat_pravo.style.display = 'none';
        return
    } else {
        cat_lang.style.display = 'block';
        cat_biology.style.display = 'block';
        cat_history.style.display = 'block';
        cat_litra.style.display = 'block';
        cat_pravo.style.display = 'block';
    }

    if (button9__isOpen) {
        cat_lang.style.display = 'none';
        cat_biology.style.display = 'none';
        cat_history.style.display = 'none';
        cat_litra.style.display = 'block';
        cat_pravo.style.display = 'none';
        return
    } else {
        cat_lang.style.display = 'block';
        cat_biology.style.display = 'block';
        cat_history.style.display = 'block';
        cat_litra.style.display = 'block';
        cat_pravo.style.display = 'block';
    }
}
setInterval(reload, 1);

let button1__isOpen = false;
let button2__isOpen = false;
let button3__isOpen = false;
let button4__isOpen = false;
let button5__isOpen = false;
let button6__isOpen = false;
let button7__isOpen = false;
let button8__isOpen = false;
let button9__isOpen = false;
let now__choose = 0;
let text__error = document.getElementById('error');

function chooseExam(el) {

    
    if (el == 1) {
        if (now__choose < 2) {
            if (button1__isOpen == false) {
                button__1.style.backgroundColor = "royalblue";
                button__1.style.color = "#fff";
                button1__isOpen = true;
                now__choose++;
                return
            } 
            if (button1__isOpen) {
                button__1.style.backgroundColor = "white";
                button__1.style.color = "#000";
                button1__isOpen = false;
                now__choose--;
            }
        } else {
            if (button1__isOpen) {
                button__1.style.backgroundColor = "white";
                button__1.style.color = "#000";
                button1__isOpen = false;
                now__choose--;
            }
            text__error.style.display = 'flex';
        }
    }

    if (el == 2) {
        if (now__choose < 2) {
            if (button2__isOpen == false) {
                button__2.style.backgroundColor = "royalblue";
                button__2.style.color = "#fff";
                button2__isOpen = true;
                now__choose++;
                return
            } 
            if (button2__isOpen) {
                button__2.style.backgroundColor = "white";
                button__2.style.color = "#000";
                button2__isOpen = false;
                now__choose--;
            }
        } else {
            if (button2__isOpen) {
                button__2.style.backgroundColor = "white";
                button__2.style.color = "#000";
                button2__isOpen = false;
                now__choose--;
            }
            text__error.style.display = 'flex';
        }
    }

    if (el == 3) {
        if (now__choose < 2) {
            if (button3__isOpen == false) {
                button__3.style.backgroundColor = "royalblue";
                button__3.style.color = "#fff";
                button3__isOpen = true;
                now__choose++;
                return
            } 
            if (button3__isOpen) {
                button__3.style.backgroundColor = "white";
                button__3.style.color = "#000";
                button3__isOpen = false;
                now__choose--;
            }
        } else {
            if (button3__isOpen) {
                button__3.style.backgroundColor = "white";
                button__3.style.color = "#000";
                button3__isOpen = false;
                now__choose--;
            }
            text__error.style.display = 'flex';
        }
    }

    if (el == 4) {
        if (now__choose < 2) {
            if (button4__isOpen == false) {
                button__4.style.backgroundColor = "royalblue";
                button__4.style.color = "#fff";
                button4__isOpen = true;
                now__choose++;
                return
            } 
            if (button4__isOpen) {
                button__4.style.backgroundColor = "white";
                button__4.style.color = "#000";
                button4__isOpen = false;
                now__choose--;
            }
        } else {
            if (button4__isOpen) {
                button__4.style.backgroundColor = "white";
                button__4.style.color = "#000";
                button4__isOpen = false;
                now__choose--;
            }
            text__error.style.display = 'flex';
        }
    }

    if (el == 5) {
        if (now__choose < 2) {
            if (button5__isOpen == false) {
                button__5.style.backgroundColor = "royalblue";
                button__5.style.color = "#fff";
                button5__isOpen = true;
                now__choose++;
                return
            } 
            if (button5__isOpen) {
                button__5.style.backgroundColor = "white";
                button__5.style.color = "#000";
                button5__isOpen = false;
                now__choose--;
            }
        } else {
            if (button5__isOpen) {
                button__5.style.backgroundColor = "white";
                button__5.style.color = "#000";
                button5__isOpen = false;
                now__choose--;
            }
            text__error.style.display = 'flex';
        }
    }

    if (el == 6) {
        if (now__choose < 2) {
            if (button6__isOpen == false) {
                button__6.style.backgroundColor = "royalblue";
                button__6.style.color = "#fff";
                button6__isOpen = true;
                now__choose++;
                return
            } 
            if (button6__isOpen) {
                button__6.style.backgroundColor = "white";
                button__6.style.color = "#000";
                button6__isOpen = false;
                now__choose--;
            }
        } else {
            if (button6__isOpen) {
                button__6.style.backgroundColor = "white";
                button__6.style.color = "#000";
                button6__isOpen = false;
                now__choose--;
            }
            text__error.style.display = 'flex';
        }
    }

    if (el == 7) {
        if (now__choose < 2) {
            if (button7__isOpen == false) {
                button__7.style.backgroundColor = "royalblue";
                button__7.style.color = "#fff";
                button7__isOpen = true;
                now__choose++;
                return
            } 
            if (button7__isOpen) {
                button__7.style.backgroundColor = "white";
                button__7.style.color = "#000";
                button7__isOpen = false;
                now__choose--;
            }
        } else {
            if (button7__isOpen) {
                button__7.style.backgroundColor = "white";
                button__7.style.color = "#000";
                button7__isOpen = false;
                now__choose--;
            }
            text__error.style.display = 'flex';
        }
    }

    if (el == 8) {
        if (now__choose < 2) {
            if (button8__isOpen == false) {
                button__8.style.backgroundColor = "royalblue";
                button__8.style.color = "#fff";
                button8__isOpen = true;
                now__choose++;
                return
            } 
            if (button8__isOpen) {
                button__8.style.backgroundColor = "white";
                button__8.style.color = "#000";
                button8__isOpen = false;
                now__choose--;
            }
        } else {
            if (button8__isOpen) {
                button__8.style.backgroundColor = "white";
                button__8.style.color = "#000";
                button8__isOpen = false;
                now__choose--;
            }
            text__error.style.display = 'flex';
        }
    }

    if (el == 9) {
        if (now__choose < 2) {
            if (button9__isOpen == false) {
                button__9.style.backgroundColor = "royalblue";
                button__9.style.color = "#fff";
                button9__isOpen = true;
                now__choose++;
                return
            } 
            if (button9__isOpen) {
                button__9.style.backgroundColor = "white";
                button__9.style.color = "#000";
                button9__isOpen = false;
                now__choose--;
            }
        } else {
            if (button9__isOpen) {
                button__9.style.backgroundColor = "white";
                button__9.style.color = "#000";
                button9__isOpen = false;
                now__choose--;
            }
            text__error.style.display = 'flex';
        }
    }
}




//установка даты экзамена



// ин яз
const date__FirstDay = 20; // день
const date__FirstMonth = 5; // номер месяца
// русский
const date__RussianDay = 7;
const date__RussianMonth = 6;
// математика
const date__MathDay = 23;
const date__MathMonth = 5;
// обществознание
const date__PravoDay = 27;
const date__PravoMonth = 5;
// история
const date__HistoryDay = 1;
const date__HistoryMonth = 6;
// биология
const date__BiologyDay = 7;
const date__BiologyMonth = 6;
// литература
const date__LitraDay = 22;
const date__LitraMonth = 6;



let text__TimeToFirst = document.getElementById('daysToFirstExam');
let text__TimeToRussian = document.getElementById('daysToRussianExam');
let text__TimeToMath = document.getElementById('daysToMathExam');
let text__TimeToLang = document.getElementById('daysToLangExam');
let text__TimeToPravo = document.getElementById('daysToPravoExam');
let text__TimeToHistory = document.getElementById('daysToHistoryExam');
let text__TimeToBiology = document.getElementById('daysToBiologyExam');
let text__TimeToLitra = document.getElementById('daysToLitraExam');

let button__1 = document.getElementById('button__1');
let button__2 = document.getElementById('button__2');
let button__3 = document.getElementById('button__3');
let button__4 = document.getElementById('button__4');
let button__5 = document.getElementById('button__5');
let button__6 = document.getElementById('button__6');
let button__7 = document.getElementById('button__7');
let button__8 = document.getElementById('button__8');
let button__9 = document.getElementById('button__9');


let cat_lang = document.getElementById('cat-lang');
let cat_pravo = document.getElementById('cat-pravo');
let cat_history = document.getElementById('cat-history');
let cat_biology = document.getElementById('cat-biology');
let cat_litra = document.getElementById('cat-litra');
