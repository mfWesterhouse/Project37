class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  hide(){
    this.input1.hide();
    this.input2.hide();
    this.title.hide();
    this.button.hide();
    this.resultTitle.hide();
  }

  play(){
    //write code here to hide question elements
    //write code to change the background color here
    background("ligthtblue");
    //write code to show a heading for showing the result of Quiz
    text(25);
    fill("black");
    text("Results of the Quiz", 350,0);
    //call getContestantInfo( ) here
    this.getContestantInfo;

    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
      fill("Blue");
      textSize(20);
      text("*NOTE: Contestant who answered correctly are highlighted in green!",130,230);
    }
    //write code to add a note here
    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer){
        fill("Green");
      }
      else{
        fill("red");
      }
    }
  }

}
