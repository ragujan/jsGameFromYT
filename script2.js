const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;
context.fillRect(0, 0, canvas.width, canvas.height)
const gravity = 0.2;
class Sprite {
    constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity;
        this.height = 100;
    }

    draw() {
        context.fillStyle = "red";
        context.fillRect(this.position.x, this.position.y, 100, this.height);

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
    }
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
    }
})

animate = () => {
    window.requestAnimationFrame(animate);

    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    hero.update();
    villain.update();

    hero.velocity.x =0;
    if (keys.a.pressed && lastkey === 'a') {
        hero.velocity.x = -1;
    } else if (keys.d.pressed && lastkey === 'd') {
        hero.velocity.x = 1;
    }

}
const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

let lastkey 
animate()

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = true;
            lastkey ='d';
            break
    }
    switch (event.key) {
        case 'a':
            keys.a.pressed = true;
            lastkey ='a';
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
        case 'a':
            keys.a.pressed = false;
           
            break
    }
})