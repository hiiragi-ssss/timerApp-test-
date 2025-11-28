'use strict';


{

    let timer = 0;
    let clearTime = null;
    let startTime = 0
    // 時間計測部
    function result() {
        timer -= 1;
        $('.timeT').text(secondToTime(timer));

        if (timer <= 0) {
            alert(`時間です`);
            clearInterval(clearTime);
            clearTime = null;
        }
    }

    // timerに入っている数字を表示用に変換
    function secondToTime(second) {
        const h = String(Math.floor(second / 3600)).padStart(3, "0");
        const m = String(Math.floor((second % 3600) / 60)).padStart(2, "0");
        const s = String(second % 60).padStart(2, "0");
        return `${h}:${m}:${s}`;
    }


    // それぞれのボタンを押すとtimerに足されて表示が切り替わる
    $('.oneSecond').on("click", function(){
        timer = timer + 1;
        startTime = timer;
        $('.timeT').text(secondToTime(timer));
    });
    $('.tenSecond').on("click", function(){
        timer = timer + 10;
        startTime = timer;
        $('.timeT').text(secondToTime(timer));
    });
    $('.oneMinute').on("click", function(){
        timer = timer + 60;
        startTime = timer;
        $('.timeT').text(secondToTime(timer));
    });
    $('.tenMinute').on("click", function(){
        timer = timer + 600;
        startTime = timer;
        $('.timeT').text(secondToTime(timer));
    });
    $('.oneHour').on("click", function(){
        timer = timer + 3600;
        startTime = timer;
        $('.timeT').text(secondToTime(timer));
    });
    $('.tenHour').on("click", function(){
        timer = timer + 36000;
        startTime = timer;
        $('.timeT').text(secondToTime(timer));
    });


    
    $('.startT').on("click", function(){
        if(clearTime === null && timer > 0){ 
            timer -= 1;
            $('.timeT').text(secondToTime(timer));
            clearTime = setInterval(result, 1000);
        }
    });
    $('.resetT').on("click", function(){
        timer = 0;
        startTime = timer;
        clearInterval(clearTime);
        clearTime = null;
        $('.timeT').text(secondToTime(timer));
    });


        


}



