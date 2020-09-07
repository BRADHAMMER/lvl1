class Tree{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width = width;
        this.height = height;
       World.add(world,this.body);
        this.image = loadImage("tree.png");
    }
    
    display(){
        var pos = this.body.position;
       
        stroke("grey");
        
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height);
    
    }
    }

