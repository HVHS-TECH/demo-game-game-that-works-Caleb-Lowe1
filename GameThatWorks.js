/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by 22026cl
/*******************************************************/
	const canvasWidth = 500;
    const canvasHeight = 500;
    const movementSpeed = 5;
    var score = 0;
    const COINSIZE = 10;
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	Player = new Sprite(100, 100, 20, 20, 'd');
	Player.color = 'blue';
	cnv = new Canvas(canvasWidth, canvasHeight);
	createcoin();
	
    
}


/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    background ('orange')		
    moveplayer();
}
function displayScore() {
text("Score:" + score, 100, 150)    
}
function createcoin(){
random (0, canvasHeight)
    Coin = new Sprite(random (0, canvasHeight), random(0, canvasHeight), COINSIZE, 'd')
    Coin.color = 'yellow';
    
}
 function moveplayer() {   
        if (kb.pressing('a')) {
    
        // Set sprite's velocity to the left
    
        Player.vel.x = -4;
    }
    if (kb.pressing('w')) {
    
        // Set sprite's velocity to the left
    
        Player.vel.y = -4;
        
    }
    if (kb.pressing('s')) {
    
        // Set sprite's velocity to the left
    
        Player.vel.y = 4;
    }
    
    if (kb.pressing ('d')) {
    
        Player.vel.x = 4;   
    
    };
    
    if (kb.released('a')) {
    
        // Set sprite's velocity to zero
        Player.vel.x = 0;
    }
    
    if (kb.released('w')) {
    
        // Set sprite's velocity to the left
    
        Player.vel.y = 0;
    }
    if (kb.released('s')) {
    
        // Set sprite's velocity to the left
    
        Player.vel.y = 0;
    }
    else if (kb.released ('d')) {
    
        Player.vel.x = 0;   
    
    };
    
        
    }
    

/*******************************************************/
//  END OF APP
/*******************************************************/