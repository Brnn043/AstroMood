'use client'

var dots = [],
    mouse = { x: 0, y: 0 };

var Dot = function() {
    this.x = 0;
    this.y = 0;
    this.node = (function() {
        var n = document.createElement("div");
        n.className = "trail";
        document.body.appendChild(n);
        return n;
    })();
    this.size = Math.random() * 3 ; // Random size
    this.opacity = Math.random() * 0.3 + 0.7; // Random opacity
    this.node.style.width = this.size + "px";
    this.node.style.height = this.size + "px";
    this.node.style.opacity = this.opacity;
};

Dot.prototype.draw = function() {
    this.node.style.left = this.x + "px";
    this.node.style.top = this.y + "px";
};

for (var i = 0; i < 15; i++) {
    var d = new Dot();
    dots.push(d);
}

function draw() {
    var x = mouse.x,
        y = mouse.y;

    dots.forEach(function(dot, index) {
    var nextDot = dots[index + 1] || dots[0];
    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * 0.6;
    y += (nextDot.y - dot.y) * 0.6;
    });
}

addEventListener("mousemove", function(event) {
    mouse.x = event.pageX;
    mouse.y = event.pageY;
});

function animate() {
    draw();
    requestAnimationFrame(animate);
}

animate();