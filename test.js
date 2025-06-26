let arr=JSON.parse(localStorage.getItem("Data")) || [];
let messages_true = [
    "Đúng roiii",
    "Quá đúng luôn",
    "Giỏi dữ tr",
    "good job",
    "Tiếp luôn bn ei"
];
let messages_false=[
    "Sai roi bn ei",
    "Sai nữa roi",
    "Làm lại đi sai roi",
    "Tí nữa là đúng roi"
];



let max_ques = 3;
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
let input=document.getElementById("a-input");

next();
key_hidden();

let random;
btnnext.addEventListener("click", ()=> {
    if (ques == max_ques) {
    localStorage.setItem("score", score);
    window.location.href = "score.html";}else{
    check();
    start_time=Date.now();
    end_time=0;
    document.getElementById("progress-item").style.animation="none";
    document.getElementById("progress-item").offsetHeight;
    document.getElementById("progress-item").style.animation="countdown 20s ease-in";
    random = Math.floor(Math.random()*arr.length);
    document.getElementById("test-question").innerText= arr[random].q;
    document.getElementById("test-img").src= arr[random].img;
    i = i+1;
    ques = ques + 1;
    document.getElementById("test-h1").innerText ="Câu " + ques;
    document.getElementById("a-input").value="";
    document.getElementById("a-output").innerText = "";
    };
    


});    
    
btncheck.addEventListener("click",()=>{
    
    let ans = document.getElementById("a-input").value.toLowerCase().replace(/[.,\- \s]/g, "");
    let ans_check= arr[random].a.toLowerCase().replace(/[.,\- \s]/g, "");
    if (ans == ans_check) {
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
            if (time < 20){
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
        };
        document.getElementById("progress-h1").innerText = score + "/" + ((base_score+max_bonus)*max_ques);

    }else{
        check();
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
    document.getElementById("anser-out").innerText = "Đáp án là " + arr[random].a;
});


    


