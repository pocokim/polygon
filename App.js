const f = require('./Calculator');

console.log('원의 넓이 ' + f.getArea('circle', 10));
console.log('원의 넓이의 합 ' + f.getArea('circle', 10, 10));
console.log('사각형의 넓이: ' + f.getArea('rect', 10, 15));
console.log('사다리꼴의 넓이: ' + f.getArea('trapezoid', 10, 15, 10));

console.log('원의 넓이 ' + f.getCircle(10));
console.log('사각형의 넓이: ' + f.getRectangle(10, 15));
console.log('사다리꼴의 넓이: ' + f.getTrapezoid(10, 15, 10));

f.printExecutionSequence();
