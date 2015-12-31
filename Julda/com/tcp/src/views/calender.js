/**
 * Created by 초이 on 2015-12-29.
 */

var date=new Date();
function init(){
    var month=document.getElementById('month');
    var year=document.getElementById('year');
    var day=document.getElementById('day');
    var m=date.getMonth();//현재 월
    var y=date.getFullYear();//현재 년도
    var d=date.getDate();

    var theDate=new Date(y,m,1);
    var theDay=theDate.getDay();//오늘의 요일을 구함 1=월

    var last=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(y%4&&y%100!=0 || y%400===0){
        lastDate=last[1]=29;
    }

    var lastDate=last[m];

    var row=Math.ceil((theDay+lastDate)/7);

    var calender= "<table class='calender_table'>"
        +"<tr id='up'>" +"<td>SUN</td>"+"<td>MON</td>"+"<td>TUE</td>"+"<td>WED</td>"+"<td>THU</td>"+"<td>FRI</td>"+"<td>SAT</td>"+
        "</tr>";

    var dNum=1;

    year.innerHTML=[
        y
    ];
    month.innerHTML=[
        m+1
    ];

    for(var i=1;i<=row;i++){
        calender+="<tr class='down'>";
        for(var k=1;k<=7;k++){
            if(i==1 && k<=theDay||dNum>lastDate){
                calender+="<td>&nbsp;</td>";
            }else{
                calender+="<td>"+"<div class='num'>"+dNum+"</div>"+"<div class='pic'>"+"</div>"+"</td>";
                dNum++;
            }
        }
        calender+="</tr>";
    }

    calender+="</table>";
    day.innerHTML=[
        calender
    ];


}

addEventListener('load', init);