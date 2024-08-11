var guessnumber=document.getElementById("guessnumber")
        var result=document.getElementById("result")
        var score=document.getElementById("score")
        var randomnumber=Math.floor(Math.random()*10)+1
        var totalscore=0;
        function checknumber(){
            var enterednumber=guessnumber.value;
            if(randomnumber==enterednumber){
                result.textContent="You are Correct!!!"
                totalscore=totalscore+1;
                score.textContent="Your Score is:"+totalscore;  
            }
            else{
                result.textContent="You are Wrong!!! Better Luck Next Time...";
            
            }
        }