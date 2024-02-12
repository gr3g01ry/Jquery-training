const buttonColors=["red","blue","green","yellow"];
let gamePattern=[];
let userGamePattern=[];
let level=0;
let levelMax=0
let count=0;
let play=false;

let nextSequence=function(){
    let randNum=Math.floor(Math.random()*4);
    let randomChosenColor=buttonColors[randNum];
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);
    $(`.${randomChosenColor}`).fadeToggle(100).fadeToggle(100);
    makesound(randomChosenColor);
    level++;
    $("h1").text("Level :"+level);
    userGamePattern=[];
}

function makesound(key) {
        var sound = new Audio("sounds/" + key + ".mp3");
        return sound.play();
}    

$(".btn").on("click",function(e){
    if(play){
        // console.log(e)
        let userChosenColor=e.target.id;
        userGamePattern.push(userChosenColor);
        makesound(userChosenColor);
        animatePress(userChosenColor);
        // console.log(userGamePattern);
        console.log('count '+count);
        checkAnswer(count)
        count++;
        console.log(count, level);
        if(level>levelMax)levelMax=level
        if(count==level)count=0;
        console.log(count, level);

        // nextSequence();
    }
})

$(document).on('keypress',function(e){
    if(!play){
        console.log(e)
        nextSequence();
        play=true;
        $("h1").text("Level :"+level);
    }
})

function checkAnswer(currentLevel){
    if(JSON.stringify(gamePattern[currentLevel])===JSON.stringify(userGamePattern[currentLevel])){
        console.log("index array :XXXXXXXXXXXXXXXXXXXXXXXXXXX");
        console.log(gamePattern[currentLevel]);
        console.log(userGamePattern[currentLevel]);
        console.log(currentLevel);
        console.log(level);
        // if(i === userGamePattern.length-1){
        //     console.log('test length \n \t'+gamePattern +"\n\t"+ userGamePattern);
        if(currentLevel==level-1){
            setTimeout(function(){
                nextSequence()
                },
                1000);
                console.log("***************** NEXT LEVEL "+level+" sucess***********")
        }
    }else{
        console.log("***************** HO NO LEVEL 00 ***********");
        // console.log("wrong at level "+currentLevel);
        // console.log("at index "+(currentLevel+1)+"\t"+ gamePattern[currentLevel]+"!="+userGamePattern[currentLevel]);
        $('#result').text("wrong at serie "+currentLevel+' -- MAX SCORE '+levelMax)
        // console.log(gamePattern);
        // console.log(userGamePattern);
        makesound("wrong");
        gameOver();
        // break;
    }
}

let animatePress=(currentColor)=>{
    $("."+currentColor)
    .addClass("pressed")
    .delay(300)
    .queue(function(next){
        $(this).removeClass("pressed")
        next();
    });
}

let gameOver=()=>{
    $("body")
        .addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
        $("h1").text("Press a key to start");
        },
        4000);
    $("h1").text("Game Over !!! Score :"+(level-1));
    level=0;
    count=-1;
    gamePattern=[];
    play=false;
};