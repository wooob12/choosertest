var currentTitle = document.getElementById('current-year-month');
var calendarBody = document.getElementById('calendar-body');
var today = new Date();
var first = new Date(today.getFullYear(), today.getMonth(),1);
var dayList = ['일','월','화','수','목','금','토'];
var monthList = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
var mymonthList= ['01','02','03','04','05','06','07','08','09','10','11','12'];
var leapYear=[31,29,31,30,31,30,31,31,30,31,30,31];
var notLeapYear=[31,28,31,30,31,30,31,31,30,31,30,31];
var pageFirst = first;
var pageYear;
if(first.getFullYear() % 4 === 0){
    pageYear = leapYear;
}else{
    pageYear = notLeapYear;
}

//alert(serializerMood[1]['fields']['mood_date'])
// 1. 선택한 date 가져와서 변수에 저장하기. -> keyValue
// 2. keyValue 형식을 파악해 ("2020-02-03", 20-2-3,2020 2 3, 20 1월 31 월....)
// 3. mood_date 형식: "2020-09-15T13:59:20.072Z"
// 4. 비교 전략
// 5. mood_date.substring(자바스크립트 부분문자열 검색)
// 6. 비교 (밑에서)
// for (key in serializerMood) {
//   if (serializerMood[key]['fields']['mood_date'] == selectDate) {
//     // 7. json파일들을 너가 원하는거 참조해서 가져오기
//     // 8. 옆에 출력 (innerHtml)

//     break;
//   }
// }
// for (key in serializerMood) {
//       if (serializerMood[key]['fields']['mood_date'].substr(0,10) == keyValue) {
//          // 7. json파일들을 너가 원하는거 참조해서 가져오기
//          // 8. 옆에 출력 (innerHtml)
//          alert(serializerMood[0]['fields']['mood_date'])
    
//          break;
//        }
//      }
// alert(serializerMood[0]['fields']['mood_date'].substr(0,10))
mymonth = 0
if (today.getMonth() == 0) {
    mymonth = '01'
} else if (today.getMonth() == 1) {
    mymonth = '02'
} else if (today.getMonth() == 2) {
    mymonth = '03'
} else if (today.getMonth() == 3) {
    mymonth = '04'
} else if (today.getMonth() == 4) {
    mymonth = '05'
} else if (today.getMonth() == 5) {
    mymonth = '06'
} else if (today.getMonth() == 6) {
    mymonth = '07'
} else if (today.getMonth() == 7) {
    mymonth = '08'
} else if (today.getMonth() == 8) {
    mymonth = '09'
} else if (today.getMonth() == 9) {
    mymonth = '10'
} else if (today.getMonth() == 10) {
    mymonth = '11'
} else if (today.getMonth() == 11) {
    mymonth = '12'
} 


function showCalendar(){
    let monthCnt = 100;
    let cnt = 1;
    for (var i = 0; i < 6; i++){
        var $tr = document.createElement('tr');
        $tr.setAttribute('id', monthCnt);   
        for (var j = 0; j < 7; j++){
            if ((i === 0 && j < first.getDay()) || cnt > pageYear[first.getMonth()]){
                var $td = document.createElement('td');
                $tr.appendChild($td);     
            } else {
                var $td = document.createElement('td');
                $td.textContent = cnt;
                $td.setAttribute('id', cnt);                
                $tr.appendChild($td);
                cnt++;
            }
        }
        monthCnt++;
        calendarBody.appendChild($tr);
        currentTitle.innerHTML = monthList[first.getMonth()] + '&nbsp;&nbsp;&nbsp;&nbsp;'+ first.getFullYear();
    }
}

showCalendar();


function removeCalendar(){
    let catchTr = 100;
    for(var i = 100; i< 106; i++){
        var $tr = document.getElementById(catchTr);
        $tr.remove();
        catchTr++;
    }
}

var inputBox = document.getElementById('prev');

function prev(){
  inputBox.value = "";
  const $divs = document.querySelectorAll('#input-list > div');
  $divs.forEach(function(e){
    e.remove();
  });
  const $btns = document.querySelectorAll('#input-list > button');
  $btns.forEach(function(e1){
    e1.remove();
  });
  if(pageFirst.getMonth() === 1){
      pageFirst = new Date(first.getFullYear()-1, 12, 1);
      first = pageFirst;
      if(first.getFullYear() % 4 === 0){
          pageYear = leapYear;
      }else{
          pageYear = notLeapYear;
      }
  }else{
      pageFirst = new Date(first.getFullYear(), first.getMonth()-1, 1);
      first = pageFirst;
  }
  today = new Date(today.getFullYear(), today.getMonth()-1, today.getDate());
  currentTitle.innerHTML = monthList[first.getMonth()] + '&nbsp;&nbsp;&nbsp;&nbsp;'+ first.getFullYear();
  removeCalendar();
  showCalendar();
//   showMain();
  clickedDate1 = document.getElementById(today.getDate());
  clickedDate1.classList.add('active');
  clickStart();
  
}

function next(){
  inputBox.value = "";
  const $divs = document.querySelectorAll('#input-list > div');
  $divs.forEach(function(e){
    e.remove();
  });
  const $btns = document.querySelectorAll('#input-list > button');
  $btns.forEach(function(e1){
    e1.remove();
  });
  if(pageFirst.getMonth() === 12){
      pageFirst = new Date(first.getFullYear()+1, 1, 1);
      first = pageFirst;
      if(first.getFullYear() % 4 === 0){
          pageYear = leapYear;
      }else{
          pageYear = notLeapYear;
      }
  }else{
      pageFirst = new Date(first.getFullYear(), first.getMonth()+1, 1);
      first = pageFirst;
  }
  today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
  currentTitle.innerHTML = monthList[first.getMonth()] + '&nbsp;&nbsp;&nbsp;&nbsp;'+ first.getFullYear();
  removeCalendar();
  showCalendar(); 
//   showMain();
  clickedDate1 = document.getElementById(today.getDate());
  clickedDate1.classList.add('active');  
  clickStart();
}
var MoodVal = document.getElementById('mood_val');
var MoodName = document.getElementById('mood_name');
var MoodContent = document.getElementById('mood_content');

// function showMain(){
//   mainTodayDay.innerHTML = dayList[today.getDay()];
//   mainTodayDate.innerHTML = today.getDate();
// }
// showMain();

var clickedDate1 = document.getElementById(today.getDate());
clickedDate1.classList.add('active');
var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');
prevBtn.addEventListener('click',prev);
nextBtn.addEventListener('click',next);
var tdGroup = [];
function clickStart(){
  for(let i = 1; i <= pageYear[first.getMonth()]; i++){
      tdGroup[i] = document.getElementById(i);
      tdGroup[i].addEventListener('click',changeToday);
  }
}

function changeToday(e){
  for(let i = 1; i <= pageYear[first.getMonth()]; i++){
      if(tdGroup[i].classList.contains('active')){
          tdGroup[i].classList.remove('active');
      }
  }
  clickedDate1 = e.currentTarget;
  clickedDate1.classList.add('active');
  today = new Date(today.getFullYear(), today.getMonth(), clickedDate1.id);
//   showMain();
  keyValue = today.getFullYear() + '-' + mymonth+ '-' + today.getDate();
  for (key in serializerMood) {
        if (serializerMood[key]['fields']['mood_date'].substr(0,10) == keyValue) {
           // 7. json파일들을 너가 원하는거 참조해서 가져오기
           // 8. 옆에 출력 (innerHtml)
        //    alert(serializerMood[key]['fields']['mood_content'])
           MoodVal.innerHTML = serializerMood[key]['fields']['mood_val']
           MoodName.innerHTML = serializerMood[key]['fields']['mood_state']
           MoodContent.innerHTML = serializerMood[key]['fields']['mood_content']
           break;
         } else {
            MoodVal.innerHTML = '이날은 없네...'
            MoodName.innerHTML = '이날은 없네...'
            MoodContent.innerHTML = '이날은 없네...'
         }
       }
}//keyValue 가 날짜를 관장하는 부분

// function test() {
//     if (clickedDate1.classList.add('active')){
//     alert(serializerMood[0]['fields']['mood_date'].substr(0,10))}
// }
// test();
// alert(serializerMood[0]['fields']['mood_date'].substr(0,10))
// keyValue = today.getFullYear() + '-' + mymonth+ '-' + today.getDate();
// function collect(){
//     for (key in serializerMood) {
//     if ((clickedDate1.classList.add('active')) && (serializerMood[key]['fields']['mood_date'].substr(0,10) == keyValue)) {
//        // 7. json파일들을 너가 원하는거 참조해서 가져오기
//        // 8. 옆에 출력 (innerHtml)
//        alert(serializerMood[0]['fields']['mood_val'])
  
//        break;
//      }
//    }
// }
// collect();

// function reshowingList(){
//   keyValue = today.getFullYear() + '' + today.getMonth()+ '' + today.getDate();
//   if(todoList[keyValue] === undefined){
//       inputList.textContent = '';
//       todoList[keyValue] = [];
//       const $divs = document.querySelectorAll('#input-list > div');
//       $divs.forEach(function(e){
//         e.remove();
//       });
//       const $btns = document.querySelectorAll('#input-list > button');
//       $btns.forEach(function(e1){
//         e1.remove();
//       });
//   }else if(todoList[keyValue].length ===0){
//       inputList.textContent = "";
//       const $divs = document.querySelectorAll('#input-list > div');
//       $divs.forEach(function(e){
//         e.remove();
//       });
//       const $btns = document.querySelectorAll('#input-list > button');
//       $btns.forEach(function(e1){
//         e1.remove();
//       });
//   }else{
//       const $divs = document.querySelectorAll('#input-list > div');
//       $divs.forEach(function(e){
//         e.remove();
//       });
//       const $btns = document.querySelectorAll('#input-list > button');
//       $btns.forEach(function(e1){
//         e1.remove();
//       });
//       var $div = document.createElement('div');
//       for(var i = 0; i < todoList[keyValue].length; i++){
//           var $div = document.createElement('div');
//           $div.textContent = '-' + todoList[keyValue][i];
//           var $btn = document.createElement('button');
//           $btn.setAttribute('type', 'button'); 
//           $btn.setAttribute('id', 'del-ata');
//           $btn.setAttribute('id', dataCnt+keyValue);
//           $btn.setAttribute('class', 'del-data');
//           $btn.textContent = delText;
//           inputList.appendChild($div);
//           inputList.appendChild($btn);
//           $div.addEventListener('click',checkList);
//           $btn.addEventListener('click',deleteTodo);
//           inputBox.value = '';
//           function deleteTodo(){
//               $div.remove();
//               $btn.remove();
//           }
//       }
//   }

// }
// var inputBox = document.getElementById('input-box');
// var inputDate = document.getElementById('input-data');
// var inputList = document.getElementById('input-list');
// var delText = 'X';
// inputDate.addEventListener('click',addTodoList);
// var dataCnt = 1;
// var keyValue = today.getFullYear() + '' + today.getMonth()+ '' + today.getDate();
// let todoList = [];
// todoList[keyValue] = [];
// function addTodoList(){
//   var $div = document.createElement('div');
//   $div.textContent = '-' + inputBox.value;
//   var $btn = document.createElement('button');
//   $btn.setAttribute('type', 'button'); 
//   $btn.setAttribute('id', 'del-ata');
//   $btn.setAttribute('id', dataCnt+keyValue);
//   $btn.setAttribute('class', "del-data");
//   $btn.textContent = delText;
//   inputList.appendChild($div);
//   inputList.appendChild($btn);
//   todoList[keyValue].push(inputBox.value);
//   dataCnt++;
//   inputBox.value = '';
//   $div.addEventListener('click',checkList);
//   $btn.addEventListener('click',deleteTodo);
//   function deleteTodo(){
//       $div.remove();
//       $btn.remove();
//   }
// }
// console.log(keyValue);
// function checkList(e){
//   e.currentTarget.classList.add('checked');
// }

// var today = new Date();//오늘 날짜//내 컴퓨터 로컬을 기준으로 today에 Date 객체를 넣어줌
// var date = new Date();//today의 Date를 세어주는 역할
// function prevCalendar() {//이전 달
// // 이전 달을 today에 값을 저장하고 달력에 today를 넣어줌
// //today.getFullYear() 현재 년도//today.getMonth() 월  //today.getDate() 일 
// //getMonth()는 현재 달을 받아 오므로 이전달을 출력하려면 -1을 해줘야함
//  today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
//  buildCalendar(); //달력 cell 만들어 출력 
// }

// function nextCalendar() {//다음 달
//     // 다음 달을 today에 값을 저장하고 달력에 today 넣어줌
//     //today.getFullYear() 현재 년도//today.getMonth() 월  //today.getDate() 일 
//     //getMonth()는 현재 달을 받아 오므로 다음달을 출력하려면 +1을 해줘야함
//      today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
//      buildCalendar();//달력 cell 만들어 출력
// }
// function buildCalendar(){//현재 달 달력 만들기
//     var doMonth = new Date(today.getFullYear(),today.getMonth(),1);
//     //이번 달의 첫째 날,
//     //new를 쓰는 이유 : new를 쓰면 이번달의 로컬 월을 정확하게 받아온다.     
//     //new를 쓰지 않았을때 이번달을 받아오려면 +1을 해줘야한다. 
//     //왜냐면 getMonth()는 0~11을 반환하기 때문 
//     var lastDate = new Date(today.getFullYear(),today.getMonth()+1,0);
//     //이번 달의 마지막 날
//     //new를 써주면 정확한 월을 가져옴, getMonth()+1을 해주면 다음달로 넘어가는데
//     //day를 1부터 시작하는게 아니라 0부터 시작하기 때문에 
//     //대로 된 다음달 시작일(1일)은 못가져오고 1 전인 0, 즉 전달 마지막일 을 가져오게 된다
//     var tbCalendar = document.getElementById("calendar");
//     //날짜를 찍을 테이블 변수 만듬, 일 까지 다 찍힘
//     var tbCalendarYM = document.getElementById("tbCalendarYM");
//     //테이블에 정확한 날짜 찍는 변수
//     //innerHTML : js 언어를 HTML의 권장 표준 언어로 바꾼다
//     //new를 찍지 않아서 month는 +1을 더해줘야 한다. 
//      tbCalendarYM.innerHTML = today.getFullYear() + "년 " + (today.getMonth() + 1) + "월"; 

//      /*while은 이번달이 끝나면 다음달로 넘겨주는 역할*/
//     while (tbCalendar.rows.length > 2) {
//     //열을 지워줌
//     //기본 열 크기는 body 부분에서 2로 고정되어 있다.
//           tbCalendar.deleteRow(tbCalendar.rows.length-1);
//           //테이블의 tr 갯수 만큼의 열 묶음은 -1칸 해줘야지 
//         //30일 이후로 담을달에 순서대로 열이 계속 이어진다.
//      }
//      var row = null;
//      row = tbCalendar.insertRow();
//      //테이블에 새로운 열 삽입//즉, 초기화
//      var cnt = 0;// count, 셀의 갯수를 세어주는 역할
//     // 1일이 시작되는 칸을 맞추어 줌
//      for (i=0; i<doMonth.getDay(); i++) {
//      /*이번달의 day만큼 돌림*/
//           cell = row.insertCell();//열 한칸한칸 계속 만들어주는 역할
//           cnt = cnt + 1;//열의 갯수를 계속 다음으로 위치하게 해주는 역할
//      }
//     /*달력 출력*/
//      for (i=1; i<=lastDate.getDate(); i++) { 
//      //1일부터 마지막 일까지 돌림
//           cell = row.insertCell();//열 한칸한칸 계속 만들어주는 역할
//           cell.innerHTML = i;//셀을 1부터 마지막 day까지 HTML 문법에 넣어줌
//           cnt = cnt + 1;//열의 갯수를 계속 다음으로 위치하게 해주는 역할
//       if (cnt % 7 == 1) {/*일요일 계산*/
//           //1주일이 7일 이므로 일요일 구하기
//           //월화수목금토일을 7로 나눴을때 나머지가 1이면 cnt가 1번째에 위치함을 의미한다
//         cell.innerHTML = "<font color=#F79DC2>" + i
//         //1번째의 cell에만 색칠
//     }    
//       if (cnt%7 == 0){/* 1주일이 7일 이므로 토요일 구하기*/
//           //월화수목금토일을 7로 나눴을때 나머지가 0이면 cnt가 7번째에 위치함을 의미한다
//           cell.innerHTML = "<font color=skyblue>" + i
//           //7번째의 cell에만 색칠
//            row = calendar.insertRow();
//            //토요일 다음에 올 셀을 추가
//       }
//       /*오늘의 날짜에 노란색 칠하기*/
//       if (today.getFullYear() == date.getFullYear()
//          && today.getMonth() == date.getMonth()
//          && i == date.getDate()) {
//           //달력에 있는 년,달과 내 컴퓨터의 로컬 년,달이 같고, 일이 오늘의 일과 같으면
//         cell.bgColor = "#FAF58C";//셀의 배경색을 노랑으로 
//        }
//      }
// }