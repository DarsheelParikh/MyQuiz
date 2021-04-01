class question{
  constructor(){
this.title = createTitle("hi")
this.question = createQuestion("bye")
this.option1 = createOption("hello")
this.option2 = createOption("goodbye")
this.input1 = createInput("no")

  }
  hide(){
this.title.hide()
this.question.hide()
this.option1.hide()
this.option2.hide()
this.input1.hide()
  }
 display(){
     this.title.html("My Quiz Game")
     this.title.position(350,0)

     this,question.html("Question:- What starts and ends with the letter 'E', but only has one letter? " )
     this.question.position(150,80)
     this.option1.html("1: Everyone " )
     this.option1.position(150,100)
     this.option2.html("2: Envelope " )
     this.option2.position(150,120)

     this.input1.position(150,230)
 }
}