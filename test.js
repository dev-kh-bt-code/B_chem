let arr=JSON.parse(localStorage.getItem("Data")) || [];
let messages_true = [
    "Đúng roiii",
    "Quá đúng luôn"
];
let messages_false=[
    "Sai roi bn ei",
    "Sai nữa roi"
];


let i = 0;

let btnnext =document.getElementById("btn-next");
let random;
btnnext.addEventListener("click", ()=> {
    random = Math.floor(Math.random()*arr.length);
    document.getElementById("test-question").innerText= arr[random].q;
    document.getElementById("test-img").src= arr[random].img;
    i = i+1;
    document.getElementById("test-h1").innerText ="Câu " + i;
    document.getElementById("a-input").value=""
    document.getElementById("a-output").innerText = ""
    
});    

let btncheck = document.getElementById("btn-check");
btncheck.addEventListener("click",()=>{
    let ans = document.getElementById("a-input").value.toLowerCase().replace(/\s/g, "");
    if (ans == arr[random].a) {
        let random_messages_true= Math.floor(Math.random()*messages_true.length);

        document.getElementById("a-output").innerText = messages_true[random_messages_true];
        arr.splice(random,1);

    }else{
        let random_messages_false= Math.floor(Math.random()*messages_false.length);
        document.getElementById("a-output").innerText = messages_false[random_messages_false];
    }; 
});

let btnkey = document.getElementById("btn-key");
btnkey.addEventListener("click", ()=>{
    document.getElementById("a-output").innerText = "Đáp án là " + arr[random].a;
});

    


