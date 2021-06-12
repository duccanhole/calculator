let show = document.getElementById('show');
let btn = Array.from(document.getElementsByClassName('btn'));
btn.map(
    button =>{
        button.addEventListener("click",(e)=>{
            switch(e.target.innerText){
                case 'C': show.innerText=''; break;
                case '=': try{
                    show.innerText=eval(show.innerText);
                }catch{
                    show.innerText="Invalid Input !";
                };break;
                default: show.innerText += e.target.innerText;
            }
        })
    }
)
