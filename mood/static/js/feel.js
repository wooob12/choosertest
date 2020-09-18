//결과를 써주는 함수
function result(val)
{
    let result_content = document.getElementById("result-box-b");

    if (100 >= val && val >= 81) {
        result_content.value = '오늘의 기분은 매우 좋음';
    } else if (81 > val && val >= 61) {
        result_content.value = '오늘의 기분은 좋음';
    } else if (61 > val && val >= 41) {
        result_content.value = '오늘의 기분은 보통';
    } else if (41 > val && val >= 21) {
        result_content.value = '오늘의 기분은 나쁨';
    } else {
        result_content.value = '오늘의 기분은 매우 나쁨';
    }
}

// slider-Jerry
let s = document.getElementById("some");
let j = document.getElementById("slider-fill");
j.addEventListener('mousemove', function () {
    s.value = j.value;
    result(j.value);
});


some.addEventListener('keyup', function(event){
    event.preventDefault();
    if(event.keyCode ===13)
    {
        j.value = s.value;
        result(s.value)
    }
});