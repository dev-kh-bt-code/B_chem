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



let max_ques = 10;
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

let btnnext =document.getElementById("btn-next");
let random;
btnnext.addEventListener("click", ()=> {
    start_time=Date.now();
    end_time=0;
    random = Math.floor(Math.random()*arr.length);
    document.getElementById("test-question").innerText= arr[random].q;
    document.getElementById("test-img").src= arr[random].img;
    i = i+1;
    ques = ques + 1;
    document.getElementById("test-h1").innerText ="Câu " + ques;
    document.getElementById("a-input").value="";
    document.getElementById("a-output").innerText = "";
    
    if (ques == max_ques) {
    localStorage.setItem("score", score);
    window.location.href = "score.html";

};
});    
    let btncheck = document.getElementById("btn-check");
btncheck.addEventListener("click",()=>{
    
    let ans = document.getElementById("a-input").value.toLowerCase().replace(/[.,\- \s]/g, "");
    let ans_check= arr[random].a.toLowerCase().replace(/[.,\- \s]/g, "");
    if (ans == ans_check) {
        let random_messages_true= Math.floor(Math.random()*messages_true.length);
        document.getElementById("a-output").innerText = messages_true[random_messages_true];
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
            alert("max_score");

        };
        document.getElementById("progress-h1").innerText = score + "/" + ((base_score+max_bonus)*max_ques);

    }else{
        let random_messages_false= Math.floor(Math.random()*messages_false.length);
        document.getElementById("a-output").innerText = messages_false[random_messages_false];
    }; 
});

let btnkey = document.getElementById("btn-key");
btnkey.addEventListener("click", ()=>{
    start_time=0;
    end_time=0;
    document.getElementById("a-output").innerText = "Đáp án là " + arr[random].a;
});


    


