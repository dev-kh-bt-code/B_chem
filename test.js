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
let score = 0;
    let i = 0;

let btnnext =document.getElementById("btn-next");
let random;
btnnext.addEventListener("click", ()=> {
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
        score= score+1;

    }else{
        let random_messages_false= Math.floor(Math.random()*messages_false.length);
        document.getElementById("a-output").innerText = messages_false[random_messages_false];
    }; 
});

let btnkey = document.getElementById("btn-key");
btnkey.addEventListener("click", ()=>{
    document.getElementById("a-output").innerText = "Đáp án là " + arr[random].a;
});


    


