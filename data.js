let amine =[
    {
        img: "img/data/amine-thaythe-methanamine.svg",
        q: "Tên thay thế của chất sau là gì",
        a: "methanamine"
    },
    {
        img: "img/data/amine-thaythe-ethanamine.svg",
        q: "Tên thay thế của chất sau là gì",
        a: "ethanamine"
    },
    {
        img: "img/data/amine-thaythe-propan-1-amine.svg",
        q: "Tên thay thế của chất sau là gì",
        a: "propan-1-amine"
    },
];
localStorage.removeItem("Data");
document.getElementById("amine-link").addEventListener("click", ()=>{
     localStorage.setItem("Data", JSON.stringify(amine));
    window.location.href = "test.html";
});