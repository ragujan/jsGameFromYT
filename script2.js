const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;
context.fillRect(0, 0, canvas.width, canvas.height)
const gravity = 0.7;
class Sprite {
    constructor({ position, velocity,color }) {
        this.position = position;
        this.velocity = velocity;
        this.height = 150;
        this.lastkey,
        this.attackBox={
              position : this.position,
              height:50,
              width:100
        },
        this.color = color

    }

    draw() {
        context.fillStyle = this.color;
        context.fillRect(this.position.x, this.position.y, 50, this.height);
        context.fillStyle = "green";
        context.fillRect(this.attackBox.position.x,this.attackBox.position.y,this.attackBox.width,this.attackBox.height);
    }
    drawAttackBox(){
        context.fillStyle = "green";
        context.fillRect(this.attackBox.position.x,this.attackBox.position.y,this.attackBox.width+20,this.attackBox.height);
    }
    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y = this.velocity.y + this.position.y;
        if (this.position.y >= canvas.height - this.height - this.velocity.y) {

            this.velocity.y = 0;
        } else {
            this.velocity.y += gravity;
        }
    }
}

const hero = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    color:"blue"
    
}
);
const villain = new Sprite({
    position: {
        x: 200,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    },
    color:"red"
    
})

animate = () => {
    window.requestAnimationFrame(animate);

    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    hero.update();
    villain.update();
   
    hero.velocity.x = 0;
    villain.velocity.x = 0;
    if (keys.a.pressed && hero.lastkey === 'a') {
        hero.velocity.x = -5;
    } else if (keys.d.pressed && hero.lastkey === 'd') {
        hero.velocity.x = 5;
    }
    if (keys.ArrowRight.pressed && villain.lastkey === 'ArrowRight') {
        villain.velocity.x = 5;
    } else if (keys.ArrowLeft.pressed && villain.lastkey === 'ArrowLeft') {
        villain.velocity.x = -5;
    }
}
const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    },
    space: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowUp: {
        pressed: false
    }
}

let lastkey
animate()

window.addEventListener('keydown', (event) => {
    console.log(event.key)
    switch (event.key) {
        case 'd':
            keys.d.pressed = true;
            hero.lastkey = 'd';
            break
    }

    switch (event.key) {
        case 'w':
            keys.w.pressed = true;
            hero.velocity.y = -20;
            break
    }

    switch (event.key) {
        case 'a':
            keys.a.pressed = true;
            hero.lastkey = 'a';
            break
    }
    switch (event.key) {
        case ' ':
            keys.space.pressed = true;

            hero.lastkey = 'space';
            hero.drawAttackBox();
            break
    }

    switch (event.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = true;
            villain.lastkey = 'ArrowRight';
            break
    }
    switch (event.key) {
        case 'ArrowUp':
            keys.ArrowUp.pressed = true;
            villain.velocity.y = -20;
            break
    }
    switch (event.key) {
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
            villain.lastkey = 'ArrowLeft';
            break
    }

})
window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false;

            break
    }
    switch (event.key) {
        case 'w':
            keys.w.pressed = false;

            break
    }
    switch (event.key) {
        case 'a':
            keys.a.pressed = false;

            break
    }

    switch (event.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;

            break
    }
    switch (event.key) {
        case 'ArrowUp':
            keys.ArrowUp.pressed = false;

            break
    }
    switch (event.key) {
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;

            break
    }
})