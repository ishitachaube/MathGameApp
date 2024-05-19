let playing=false;
let score, timeremaining=30,action,wrongans, correctAns;
 document.getElementById("start").onclick=function(){
    

    if(playing==true){
        document.getElementById("gameover").innerHTML= 
                `<p>GAMEOVER !!!</p><br> <p>Your Score is ${score}</p><br><p style="font-size: medium;">Will restart in 3 seconds</p>`;
                hide("time");
                hide("start")
        show("gameover");
        setInterval(()=>{location.reload();},3000)
        
    }
    else{
       playing=true;
        score=0;
        document.getElementById("scorevalue").innerHTML=score;
        show("time");
        document.getElementById("timevalue").innerHTML=timeremaining;
        document.getElementById("start").innerHTML="Reset";
        showcountdown();
        generateQA();
        
    }
 }
function show(id)
{
    document.getElementById(id).style.display="block";

}
function hide(id)
{
    document.getElementById(id).style.display="none";
}
function showcountdown()
{
    action=setInterval(()=>{
        timeremaining--;
        document.getElementById("timevalue").innerHTML=timeremaining;
        if(timeremaining==0)
            {
                stopcounter();
                show("gameover");
                document.getElementById("gameover").innerHTML= 
                `<p>GAMEOVER !!!</p><br> <p>Your Score is ${score}</p><br><p style="font-size: medium;">Will restart in 3 seconds</p>`;
                hide("time");
                playing=false;
                document.getElementById("start").innerHTML="Reset";
                hide("start")
               setInterval(()=>{location.reload();},3000)
            }
    },1000)
}
function stopcounter()
{
    clearInterval(action);
    hide("time");
}
function generateQA()
{
    let x=1+Math.floor(9*Math.random());
    let y=1+Math.floor(9*Math.random());
     correctAns=x*y;
    document.getElementById("question").innerHTML=`${x} x ${y}`;
    let correctposition=1+Math.round(3*Math.random());
    document.getElementById("box"+correctposition).innerHTML=correctAns;
    var ans=[correctAns];
    let check= []
    for(i=0;i<4;i++)
        {
           
            if((i+1)!=correctposition)
              {
                let wrongans=(1+Math.floor(9*Math.random()))*
                (1+Math.floor(9*Math.random()));
                check[i]=wrongans;
                ans.push(wrongans);
                // console.log(ans[i])
                for(j=0;j<=i;j++)
                    {
                        //console.log(ans[i])
                    if(check[i]!=ans[j])
                    {
                       
                        document.getElementById("box"+(i+1)).innerHTML=wrongans;
                     
                    }
                    else{
                        wrongans=(1+Math.floor(9*Math.random()))*
                        (1+Math.floor(9*Math.random()));
                         ans[j]=wrongans;
                         document.getElementById("box"+(i+1)).innerHTML=wrongans;
                        break;
                    }
                
                    }
              }
            } 
              
        
        
        }

    function checkbox(id)
    {    
      let val= document.getElementById(id).innerHTML;
         if(playing==true){
            
            if(val==correctAns){
                score++;
                document.getElementById("scorevalue").innerHTML=score;
                show("correct");
                setInterval(()=>{
                    hide("correct")
                },1000)
                generateQA();
            }
            else{
                show("wrong");
                setInterval(()=>{
                    hide("wrong")
                },2000)
                setInterval(()=>{
                    document.getElementById("wrong").innerHTML="Try Again";
                },1000)
            }
        }
        
    }
