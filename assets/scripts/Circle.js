class Circle{

    constructor(ctx){
        this.ctx  =ctx;

        this.generateParams();
    }

    generateParams(){
        this.radius = Math.random() * 50 + 1;

        const speed = Math.random() * 40 / this.radius;
        const xDirection = Math.random() < 0.5 ? -speed : speed;
        const yDirection = Math.random() < 0.5 ? -speed : speed;

        this.x = Math.random() * (this.ctx.canvas.width - this.radius * 2) + this.radius;
        this.y = Math.random() * (this.ctx.canvas.height - this.radius * 2) + this.radius;

        this.dx = (Math.random() - 0.5) * xDirection;
        this.dy = (Math.random() - 0.5) * yDirection;
    }

    draw(){
        const gradient = this.ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.7)');
        gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.5)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)');

        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, Math.PI*2, false);
        this.ctx.fillStyle = gradient;
        this.ctx.fill();
        this.ctx.closePath();
    }

    update(){
        if(this.x + this.radius > this.ctx.canvas.width || this.x - this.radius < 0){
            this.dx = -this.dx;
        }

        if(this.y + this.radius > this.ctx.canvas.height || this.y - this.radius < 0){
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

export default Circle;