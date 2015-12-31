/**
 * Created by 초이 on 2015-12-29.
 */

function alram_click(){
    var alram=document.getElementById("time");
    alram.innerHTML=[
        "<input type='text' id='hour'>"
        +"<p>시</p>"
        +"<input type='text' id='min'>"
        +"<p>분</p>"
    ];

}