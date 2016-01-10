window.onload=function(){
    var date=new Date();
    var month=document.getElementById('month');
    var year=document.getElementById('year');
    var day=document.getElementById('day');
    var m=date.getMonth();
    var y=date.getFullYear();
    var d=date.getDate();
    
        
    var theDate=new Date(y, m, 1);
    var theDay=theDate.getDay();
        
    var last=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var lastDate=last[m];
        
    if(y%4 && y%100 != 0 || y % 400 ===0){
        lastDate=last[1]=29;
    }
        
    var row=Math.ceil((theDay+lastDate)/7);
    
    year.innerHTML=[
        y
    ];
    month.innerHTML=[
        m+1
    ];
    
    var calender= "<table class='table' id='calender_table'>"
        +"<tr id='up' class='table font'>" +"<td>SUN</td>"+"<td>MON</td>"+"<td>TUE</td>"+"<td>WED</td>"+"<td>THU</td>"+"<td>FRI</td>"+"<td>SAT</td>"+
        "</tr>";
    var dNum=1;

    for(var i=1;i<=row;i++){
        calender+="<tr class='table'>";
        for(var k=1;k<=7;k++){
            if(i==1 && k<=theDay||dNum>lastDate){
                calender+="<td>&nbsp;</td>";
            }else{
                calender+="<td>"+"<div class='num'>"+dNum+"</div>"+"<div style='height:60%'>"+"</div>"+"</td>";
                dNum++;
            }
        }
        calender+="</tr>";
    }

    calender+="</table>";
    day.innerHTML=[
        calender
    ];
};
