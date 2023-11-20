console.log("Contact Homepage Opened")

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 모든 버튼 요소에 대한 이벤트 핸들러 등록
document.querySelectorAll('.b_list button').forEach(function (button) {
    button.addEventListener('mouseover', function () {
        this.style.border = '5px solid ' + getRandomColor();
    });
    button.addEventListener('mouseout', function () {
        this.style.border = '3px solid black';
    });
    button.addEventListener('click', function () {
        this.style.border = '3px solid black';
    })
});