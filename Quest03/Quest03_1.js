var input=prompt('숫자를 입력하세요');
var num=Number(input); 
var star = '';
for (var i = 0; i < num; i++) {
    for (var j = num-1; j > i; j--) {
        star += ' ';
    }
    for (var k = 0; k <= (i * 2); k++) {
        star += '*';
    }
    star += '\n';
}
console.log(star);
