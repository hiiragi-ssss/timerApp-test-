'use strict';


{

    // タイマー用コード
    let timerT = 0;
    let clearTimeT = null;
    let stopTimeT = 0;
    let stopClearT =false; 
    let switchBtn1 = true;
    let switchBtn2 = true;
    // 時間計測部
    function resultT() {
        timerT -= 1;
        $('.timeT').text(secondToTime(timerT));

        
        if (timerT <= 0) {
            // ストップボタンを押しているならストップ押していないなら完了
            switchBtn2 = true;
            if (stopClearT){
                timerT = stopTimeT;
                $('.timeT').text(secondToTime(timerT));
                stopClearT = false;
                clearInterval(clearTimeT);
                clearTimeT = null;
            }else{
                alert(`時間です`);
                timerT = 0;
                $('.timeT').text(secondToTime(timerT));
                clearInterval(clearTimeT);
                clearTimeT = null;
            }
        }
    }

    // timerTに入っている数字を表示用に変換
    function secondToTime(second) {
        const h = String(Math.floor(second / 3600)).padStart(3, "0");
        const m = String(Math.floor((second % 3600) / 60)).padStart(2, "0");
        const s = String(second % 60).padStart(2, "0");
        return `${h}:${m}:${s}`;
    }


    // それぞれのボタンを押すとtimerTに足されて表示が切り替わる
    $('.oneSecond').on("click", function(){
        if(clearTimeT === null){
            timerT = timerT + 1;
            $('.timeT').text(secondToTime(timerT));
        }
    });
    $('.tenSecond').on("click", function(){
        if(clearTimeT === null){
            timerT = timerT + 10;
            $('.timeT').text(secondToTime(timerT));
        }
    });
    $('.oneMinute').on("click", function(){
        if(clearTimeT === null){
            timerT = timerT + 60;
             $('.timeT').text(secondToTime(timerT));
        }
    });
    $('.tenMinute').on("click", function(){
        if(clearTimeT === null){
            timerT = timerT + 600;
            $('.timeT').text(secondToTime(timerT));
        }
    });
    $('.oneHour').on("click", function(){
        if(clearTimeT === null){
            timerT = timerT + 3600;
             $('.timeT').text(secondToTime(timerT));
        }      
    });
    $('.tenHour').on("click", function(){
        if(clearTimeT === null){
            timerT = timerT + 36000;
            $('.timeT').text(secondToTime(timerT));
        }
    });


    // スタート、ストップ、リセット
    $('.startT').on("click", function(){
        if(clearTimeT === null && timerT > 0){ 
            switchBtn2 = false;
            $('.timeT').text(secondToTime(timerT));
            clearTimeT = setInterval(resultT, 1000);
        }
    });
    $('.stopT').on("click", function(){
        if(clearTimeT !== null && !stopClearT){ 
            stopClearT = true;
            stopTimeT = timerT;
            timerT=0;
            switchBtn2 = true;
        }
    });
    $('.resetT').on("click", function(){
        switchBtn2 = true;
        timerT = 0;
        clearInterval(clearTimeT);
        clearTimeT = null;
        $('.timeT').text(secondToTime(timerT));
    });



    // ストップウォッチ用コード
    let timerW = 0;
    let clearTimeW = null;
    function resultW() {
        timerW += 1;
        $('.timeW').text(secondToTime(timerW));
    }

    $('.startW').on("click", function(){
        if(clearTimeW === null){ 
            switchBtn2 = false;
            $('.timeW').text(secondToTime(timerW));
            clearTimeW = setInterval(resultW, 1000);
        }
    });
    $('.stopW').on("click", function(){
        switchBtn2 = true;
        $('.timeW').text(secondToTime(timerW));
        clearInterval(clearTimeW);
        clearTimeW = null;
    });
    $('.resetW').on("click", function(){
        switchBtn2 = true;
        timerW = 0;
        clearInterval(clearTimeW);
        clearTimeW = null;
        $('.timeW').text(secondToTime(timerW));
    });



        // 切り替えボタン
    $('.switchBtn').on("click", function(){
        if(switchBtn1){
            if(switchBtn2){
                switchBtn1 = false;
                $(".timer").hide();
                $(".stopwatch").show();  
            }
        }else{
            if(switchBtn2){
                switchBtn1 = true;
                $(".timer").show();
                $(".stopwatch").hide();
            }
        }
    });

}



