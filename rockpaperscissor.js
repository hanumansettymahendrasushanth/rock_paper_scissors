// <--objects-->
  // const product = {

  //   name  : 'sushanth',
  //   price : 1000000
  // }

  // console.log(product);
  // console.log(product.price);  


  // console.log(localStorage.getItem('score'));


  


  let score = JSON.parse(localStorage.getItem('score')) ||  {
    win:0,
    lost:0,
    tie:0
  };


//  <--- or we could use this one-->
// if(score === null)
// {
//   score = 
//   {
//     win:0,
//     lost:0,
//     tie:0
//   };
// }


// document.querySelector('.js-result')
// .innerHTML = `You ${result}`;

update();
  

 


function reset()
{
  score['win'] =0;
  score['lost'] =0;
  score['tie'] =0;

  localStorage.removeItem('score')


  // or the other way accesing the object variables  

  // score.tie = 0;
  // score.lost =0;
  // score.win=0;

  console.log('The score has been reset.')
}


function update()
{
  document.querySelector('.score')

   . innerHTML=`Wins:${score.win},Losses:${score.lost},Tie:${score.tie}`;


}





let ans = ' ';
function randoo()
{

  // Math.random() only takes random values from 0 to 1; 
   let rand = Math.random();
   

    // here we are assinging the values accordingly
    //if value greather than 0 and less than 1/3 -->rock
    //if value greather than 1/3 and less than 2/3 -->paper
    //if value greather than 2/3 and less than 1 -->Scissors
    if(rand >=0 && rand <1/3)
    {
      ans  = 'rock';
    }
    
    else if(rand >=1/3 && rand <2/3)
    {
      ans  = 'paper';
    }
    else
    {
      ans = 'Scissors';
    }


     console.log(ans);
}


function game(move)

{  


    let result =' ';        

    if(move=='rock')
    {
      if(ans =='rock')
    {
      
      result = 'tie';
    }
    else if(ans =='paper')
    {
      
      result = 'lost';
    
    }
    else
    {
      
      result ='win'
    }

    }
    else if(move=='paper')
    {
      if(ans=='rock')
      {
        
        result = 'win';
      }
      else if(ans == 'paper')
      {
        
        result= 'tie';
      }
      else
      {
      
        result = 'lost';
      }

    }
    else
    {

      if(ans=='rock')
      {
        
        result= 'lost';
      }
      else if(ans == 'paper')
      {
        
        result='win';
      }
      else
      {
        
        result= 'tie';
      }

    }

    if(result == 'win')
    {
      score.win+=1;
    }
    else if(result=='tie')
    {
      score.tie+=1;
    }
    else
    {
      score.lost+=1;
    }

     localStorage.setItem('score', JSON.stringify(score));

     document.querySelector('.js-result')
      .innerHTML = `You ${result}`;

      document.querySelector('.js-moves')
      .innerHTML = `You
          <img  src="images/${move}-emoji.png" class="images">
          <img src="images/${ans}-emoji.png" class="images">
          Computer`;


     update();



//       alert(`you picked ${move}.computer picked${ans}.you ${result}.
// wins:${score.win},losses:${score.lost},tie:${score.tie}`);
    
}
