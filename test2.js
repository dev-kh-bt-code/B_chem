let arr = JSON.parse(localStorage.getItem("Data")) || [];
let messages_true = [
    "Đỉnh",
    "Giỏi dữ tr",
    "good job",
    "Tiếp luôn bn ei"
];
let messages_false=[
    "Bậy roi bn ei",
    "Bậy oi",
    "Tí nữa là đúng roi"
];


let correct_mp3_yay= document.getElementById("correct-mp3-yay");
let correct_mp3_yupy= document.getElementById("correct-mp3-yupy");
let correct_mp3_correct= document.getElementById("correct-mp3-correct");
let incorrect_mp3_sairoibnoi= document.getElementById("incorrect-mp3-sairoibnoi");

let correct_mp3=[
    correct_mp3_yay,
    correct_mp3_yupy,
    correct_mp3_correct
];
let incorrect_mp3=[
    incorrect_mp3_sairoibnoi
];

let max_ques = 20;
let ques = 0;
let base_score = 10;
let max_bonus = 50;
let max_time = 60;
let end_time = 0;
let start_time = 0;
let time=0;
let bonus_score= 0;
let add_score= 0;
let score = 0;
let i = 0;
let btncheck = document.getElementById("btn-check");
let btnnext =document.getElementById("btn-next");
let btnkey = document.getElementById("btn-key");
function check() {
    btncheck.style.visibility="visible";
    btnnext.style.visibility="hidden";
    
};


function next() {
    btnnext.style.visibility="visible";
    btncheck.style.visibility="hidden";
    
};
function key_visible() {
    btnkey.style.visibility="visible";
};
function key_hidden() {
    btnkey.style.visibility="hidden";
};
next();
let random;
let timeout1;
let timeout2;
btnnext.addEventListener("click", ()=>{
    i=i+1;
    ques=ques+1;
     random =  Math.floor(Math.random()*arr.length);
    document.getElementById("test-question").innerHTML = arr[random].q;
    check();
    document.getElementById("test-h1").innerText = "Câu " + i;
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    document.getElementById("meohoanghot").src="img/img/meouia.svg";
    if (ques > max_ques) {
    localStorage.setItem("score", score);
    window.location.href = "score.html";}else{
    check();
    document.getElementById("score-h1").innerText = score + "/" + ((base_score+max_bonus)*max_ques);
    start_time=Date.now();
    end_time=0;
    document.getElementById("progress-item").style.animation="none";
    document.getElementById("progress-item").offsetHeight;
    document.getElementById("progress-item").style.animation="countdown 15s ease-in";
    timeout1 =setTimeout(() => {
    
       document.getElementById("meohoanghot").src="img/img/meohoanghot.svg";
    }, 7000);
    timeout2 =setTimeout(() => {
    
       document.getElementById("meohoanghot").src="img/img/chet.svg";
    }, 15000);
    }
});
btncheck.addEventListener("click", ()=>{
    let a_value = document.querySelector('input[name="ds"]:checked');
    if (a_value.value == arr[random].a) {
         next();
        key_hidden();
        let random_messages_true= Math.floor(Math.random()*messages_true.length);
        let correct = document.getElementById("correct")
        correct.style.visibility="visible";
        correct.style.animation= "none";
        correct.offsetHeight;
        correct.style.animation= "show 0.3s ease-in";
        setTimeout(() => {
            document.getElementById("correct").style.visibility= "hidden";
        }, 2000);
       
        end_time=Date.now();
        time=(end_time -  start_time)/1000 ;
        if (time<=max_time){
            if (time < 15){
                bonus_score = max_bonus;
            }else{
                bonus_score= max_bonus*((max_time-time)/max_time);
            }
        }else{
            bonus_score=0;
            
        };
        add_score= base_score+ bonus_score;
        score=Math.ceil(score+add_score);
        if(score == (base_score+max_bonus)){
             document.getElementById("correct-out").innerText = "max score";

        }else{
            
            document.getElementById("correct-out").innerText = messages_true[random_messages_true];
            let mp3_random=correct_mp3[Math.floor(Math.random()*correct_mp3.length)];
            mp3_random.pause();
            mp3_random.currentTime=0;
            mp3_random.play();
        };
        document.getElementById("score-h1").innerText = score + "/" + ((base_score+max_bonus)*max_ques);

    }else{
        next();
        key_visible();
        let random_messages_false= Math.floor(Math.random()*messages_false.length);
        let incorrect = document.getElementById("incorrect")
        incorrect.style.visibility="visible";
        incorrect.style.animation= "none";
        incorrect.offsetHeight;
        incorrect.style.animation= "show 0.3s ease-in";
        setTimeout(() => {
            document.getElementById("incorrect").style.visibility= "hidden";
        }, 3000);
        document.getElementById("incorrect-out").innerText = messages_false[random_messages_false];
        let mp3_random=incorrect_mp3[Math.floor(Math.random()*incorrect_mp3.length)];
            mp3_random.pause();
            mp3_random.currentTime=0;
            mp3_random.play();
    };
});

btnkey.addEventListener("click", ()=>{
    next();
    btncheck.style.visibility="hidden";
    start_time=0;
    end_time=0;
    let anser = document.getElementById("anser")
        anser.style.visibility="visible";
        anser.style.animation= "none";
        anser.offsetHeight;
        anser.style.animation= "show 0.3s ease-in";
        setTimeout(() => {
            document.getElementById("anser").style.visibility= "hidden";
        }, 2000);
    document.getElementById("anser-out").innerHTML = "Đáp án là " + arr[random].explain;
});

