//GAME CONSTRANTS
let inputdir={x:0 , y:0};
const foodsound=new Audio('food.mp3');
const gameoversound= new Audio('gameover.mp3')
const movesound= new Audio('move.mp3');
const musicsound=new Audio('music.mp3');
let speed=5;
let snakearr=[
    {x:13,y:15}
];
let score=0;
scoretext=document.getElementById('score');

food={x:6,y:6};

let lastpainttime=0;

//Game functions
function main(ctime){
    window.requestAnimationFrame(main);
    
    if((ctime - lastpainttime)/1000 < 1/speed){
        return;
    }
    
    
    
    lastpainttime=ctime;
    gameengine();
    scoretext="Score: "+score;

}


function iscollide(snakearr){
    //bump into yourself
    for(let i=1;i<snakearr.length;i++){
        if(snakearr[0].x===snakearr[i].x&&snakearr[0].y===snakearr[i].y) return true;
    }

    if((snakearr[0].x>=18||snakearr[0].x<=0)||snakearr[0].y>=18||snakearr[0].y<=0) return true;

}
function gameengine(){
    //PART 1
    if(iscollide(snakearr)){
        gameoversound.play();
        musicsound.pause();
        inputdir={x:0,y:0};
        alert("GAME OVER! PRESS ANY KEY TO PLAY AGAIN");
        snakearr=[
            {x:13,y:15}
        ];
        musicsound.play();
        
        score=0;
        speed=5;
        scoreBox.innerHTML = "SCORE: " + score;



    }
    //MOVING THE SNAKE
    for(let i=snakearr.length-2;i>=0;i--){
        const element=snakearr[i];
        snakearr[i+1]={...snakearr[i]}; 


    }
    snakearr[0].x+=inputdir.x;
    snakearr[0].y+=inputdir.y

    //food eater
    let a=2;
    let b=16;
    if(snakearr[0].y===food.y && snakearr[0].x===food.x){
        snakearr.unshift({x:snakearr[0].x+inputdir.x,y:snakearr[0].y+inputdir.y})
        food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}
        foodsound.play();
        score++;
        scoreBox.innerHTML = "SCORE: " + score;
        if(score>hiscoreval){
            hiscoreval = score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
            hiscoreBox.innerHTML = "HiScore: " + hiscoreval;
        }
        if(score<10) speed++;
        if(score<20&&score>10) speed+=0.5;

        
    }



    //dispaly the snake
    board.innerHTML="";
    snakearr.forEach((e,index)=>{
        snakeelement=document.createElement('div');
        snakeelement.style.gridRowStart=e.y;
        snakeelement.style.gridColumnStart=e.x;
        board.appendChild(snakeelement);
        
        if(index===0) {snakeelement.classList.add('head')}
        else {snakeelement.classList.add('snake')}
        
        
        

    });
    //display the food
    foodelement=document.createElement('div');
    foodelement.style.gridRowStart=food.y;
    foodelement.style.gridColumnStart=food.x;
    board.appendChild(foodelement);
    foodelement.classList.add('food');

    //snakecollided


    

    






    //PART 2



}










//GAME LOGIC
inputdir={x:0,y:0}//starts
let hiscore = localStorage.getItem("hiscore");
if(hiscore === null){
    hiscoreval = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
}
else{
    hiscoreval = JSON.parse(hiscore);
    hiscoreBox.innerHTML = "HiScore: " + hiscore;
}
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    
    movesound.play();
    switch (e.key){
        case "ArrowUp":
        case "A":    
            //console.log("arrow up");
            inputdir.x=0;
            inputdir.y=-1;
            
            break;
        case "ArrowDown":
            inputdir.x=0;
            inputdir.y=1;
            break;
        
        case "ArrowLeft":
            inputdir.x=-1;
            inputdir.y=0;            

            break;
        case "ArrowRight":
            inputdir.x=1;
            inputdir.y=0;            

            break;
        default:
            break;
    }

});