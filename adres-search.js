'use strict';
// spotSearchで求める値
var answer1 = 'aaa';
var answer2;
var answer3;
var answer4;
var answer5;
var answer6;
var answer7;
var answer8;
var answer9;
var answer10;

const searchButton = document.getElementById('nowSearch');

function spotSearch(){
    //　対応している場合
if(navigator.geolocation.getCurrentPosition)
{
    // 現在地を取得
    navigator.geolocation.getCurrentPosition(


        // [第1引数] 取得に成功した場合の関数
    function( position )
    {
        // 取得したデータの整理
        var data = position.coords ;

        // データの整理
        var nowLat = data.latitude ;
        var nowLng = data.longitude ;

        // 計算
        // 井の頭公園no.1
        var lat = 35.7001058;
        var lng = 139.5754574;
        function calcu(){
            return (lat - nowLat + lng - nowLng) ** 2;
        }
        var calcuA = calcu();
        var calcu1 = calcu();
        console.log(calcu1);
        // ISENTEIno.2
        var lat = 35.699558;
        var lng = 139.574772;
        function calcu(){
            return (lat - nowLat + lng - nowLng) ** 2;
        }
        var calcuB = calcu();
        var calcu2 = calcu();
        console.log(calcu2);
        // 斜陽館no.3
        var lat = 40.902855;
        var lng = 140.455215;
        function calcu(){
            return (lat - nowLat + lng - nowLng) ** 2;
        }
        var calcuC = calcu();
        var calcu3 = calcu();
        console.log(calcu3);
        // 安田屋旅館no.4
        var lat = 35.020339;
        var lng = 138.897402;
        function calcu(){
            return (lat - nowLat + lng - nowLng) ** 2;
        }
        var calcuD = calcu();
        var calcu4 = calcu();
        console.log(calcu4);
        // 太宰治疎開の家no.5
        var lat = 40.902666;
        var lng = 140.457218;
        function calcu(){
            return (lat - nowLat + lng - nowLng) ** 2;
        }
        var calcuE = calcu();
        var calcu5 = calcu();
        console.log(calcu5);
        // 駅舎no.6
        var lat = 40.912289;
        var lng = 140.451153;
        function calcu(){
            return (lat - nowLat + lng - nowLng) ** 2;
        }
        var calcuF = calcu();
        var calcu6 = calcu();
        console.log(calcu6);
        // 芦野公園no.7
        var lat = 40.807693;
        var lng = 140.446116;
        function calcu(){
            return (lat - nowLat + lng - nowLng) ** 2;
        }
        var calcuG = calcu();
        var calcu7 = calcu();
        console.log(calcu7);
        // ふかうら文学館no.8
        var lat = 40.641283;
        var lng = 139.927795;
        function calcu(){
            return (lat - nowLat + lng - nowLng) ** 2;
        }
        var calcuH = calcu();
        var calcu8 = calcu();
        // 銀座ルパンno.9
        var lat = 35.671045;
        var lng = 139.763311;
        function calcu(){
            return (lat - nowLat + lng - nowLng) ** 2;
        }
        var calcuI = calcu();
        var calcu9 = calcu();
        // 新井旅館no.10
        var lat = 34.970475;
        var lng = 138.926698;
        function calcu(){
            return (lat - nowLat + lng - nowLng) ** 2;
        }
        var calcuJ = calcu();
        var calcu10 = calcu();


        // 近い順に並べる
        function compare(a,b) {
            return a - b ;
        }
        var lists = [calcu1,calcu2,calcu3,calcu4,calcu5,calcu6,calcu7,calcu8,calcu9,calcu10]
        var answer = lists.sort(compare);
        console.log(answer);

        //一番近い
        if(answer[0] === calcuA) {
            answer1 = '<a href="inokasira.html"><img src="井の頭公園.png" alt="井の頭公園"></a>';
            document.getElementById('result-area1').innerHTML = answer1;
        }else if (answer[0] === calcuB) {
            answer1 = '<a href="isentei.html"><img src="isentei.png" alt="isentei"></a>';
            document.getElementById('result-area1').innerHTML = answer1;
        }else if (answer[0] === calcuC) {
            answer1 = '<a href="syayoukan.html"><img src="斜陽館.png" alt="斜陽館"></a>';
            document.getElementById('result-area1').innerHTML = answer1;
        }else if (answer[0] === calcuD) {
            answer1 = '<a href="yasuda.html"><img src="安田屋.png" alt="安田屋旅館"></a>';
            document.getElementById('result-area1').innerHTML = answer1;
        }else if (answer[0] === calcuE) {
            answer1 = '<a href="dazaisokai.html"><img src="太宰疎開.png" alt="太宰治疎開の家"></a>';
            document.getElementById('result-area1').innerHTML = answer1;
        }else if (answer[0] === calcuF) {
            answer1 = '<a href="ekisya.html"><img src="駅舎.png" alt="喫茶店「駅舎」"></a>';
            document.getElementById('result-area1').innerHTML = answer1;
        }else if (answer[0] === calcuG) {
            answer1 = '<a href="asino.html"><img src="芦野公園.png" alt="芦野公園"></a>';
            document.getElementById('result-area1').innerHTML = answer1;
        }else if (answer[0] === calcuH) {
            answer1 = '<a href="hukaura.html"><img src="ふかうら文学館.png" alt="ふかうら文学館"></a>';
            document.getElementById('result-area1').innerHTML = answer1;
        }else if (answer[0] === calcuI) {
            answer1 = '<a href="rupan.html"><img src="ルパン.png" alt="銀座ルパン"></a>';
            document.getElementById('result-area1').innerHTML = answer1;
        }else if (answer[0] === calcuJ) {
            answer1 = '<a href="arai.html"><img src="新井旅館.png" alt="新井旅館"></a>';
            document.getElementById('result-area1').innerHTML = answer1;
        }

        //2番目に近い
        if(answer[1] === calcuA) {
            answer2 = '<a href="inokasira.html"><img src="井の頭公園.png" alt="井の頭公園"></a>';
            document.getElementById('result-area2').innerHTML = answer2;
        }else if (answer[1] === calcuB) {
            answer2 = '<a href="<a href="isentei.html"><img src="isentei.png" alt="isentei"></a>';
            document.getElementById('result-area2').innerHTML = answer2;
        }else if (answer[1] === calcuC){
            answer2 = '<a href="syayoukan.html"><img src="斜陽館.png" alt="斜陽館"></a>';
            document.getElementById('result-area2').innerHTML = answer2;
        }else if (answer[1] === calcuD) {
            answer2 = '<a href="yasuda.html"><img src="安田屋.png" alt="安田屋旅館"></a>';
            document.getElementById('result-area2').innerHTML = answer2;
        }else if (answer[1] === calcuE) {
            answer2 = '<a href="dazaisokai.html"><img src="太宰疎開.png" alt="太宰治疎開の家"></a>';
            document.getElementById('result-area2').innerHTML = answer2;
        }else if (answer[1] === calcuF) {
            answer2 = '<a href="ekisya.html"><img src="駅舎.png" alt="喫茶店「駅舎」"></a>';
            document.getElementById('result-area2').innerHTML = answer2;
        }else if (answer[1] === calcuG) {
            answer2 = '<a href="asino.html"><img src="芦野公園.png" alt="芦野公園"></a>';
            document.getElementById('result-area2').innerHTML = answer2;
        }else if (answer[1] === calcuH) {
            answer2 = '<a href="hukaura.html"><img src="ふかうら文学館.png" alt="ふかうら文学館"></a>';
            document.getElementById('result-area2').innerHTML = answer2;
        }else if (answer[1] === calcuI) {
            answer2 = '<a href="rupan.html"><img src="ルパン.png" alt="銀座ルパン"></a>';
            document.getElementById('result-area2').innerHTML = answer2;
        }else if (answer[1] === calcuJ) {
            answer2 = '<a href="arai.html"><img src="新井旅館.png" alt="新井旅館"></a>';
            document.getElementById('result-area2').innerHTML = answer2;
        }

        //3番目に近い
        if(answer[2] === calcuA) {
            answer3 = '<a href="inokasira.html"><img src="井の頭公園.png" alt="井の頭公園"></a>';
            document.getElementById('result-area3').innerHTML = answer3;
        }else if (answer[2] === calcuB) {
            answer3 = '<a href="isentei.html"><img src="isentei.png" alt="isentei"></a>';
            document.getElementById('result-area3').innerHTML = answer3;
        }else if (answer[2] === calcuC){
            answer3 = '<a href="syayoukan.html"><img src="斜陽館.png" alt="斜陽館"></a>';
            document.getElementById('result-area3').innerHTML = answer3;
        }else if (answer[2] === calcuD) {
            answer3 = '<a href="yasuda.html"><img src="安田屋.png" alt="安田屋旅館"></a>';
            document.getElementById('result-area3').innerHTML = answer3;
        }else if (answer[2] === calcuE) {
            answer3 = '<a href="dazaisokai.html"><img src="太宰疎開.png" alt="太宰治疎開の家"></a>';
            document.getElementById('result-area3').innerHTML = answer3;
        }else if (answer[2] === calcuF) {
            answer3 = '<a href="ekisya.html"><img src="駅舎.png" alt="喫茶店「駅舎」"></a>';
            document.getElementById('result-area3').innerHTML = answer3;
        }else if (answer[2] === calcuG) {
            answer3 = '<a href="asino.html"><img src="芦野公園.png" alt="芦野公園"></a>';
            document.getElementById('result-area3').innerHTML = answer3;
        }else if (answer[2] === calcuH) {
            answer3 = '<a href="hukaura.html"><img src="ふかうら文学館.png" alt="ふかうら文学館"></a>';
            document.getElementById('result-area3').innerHTML = answer3;
        }else if (answer[2] === calcuI) {
            answer3 = '<a href="rupan.html"><img src="ルパン.png" alt="銀座ルパン"></a>';
            document.getElementById('result-area3').innerHTML = answer3;
        }else if (answer[2] === calcuJ) {
            answer3 = '<a href="arai.html"><img src="新井旅館.png" alt="新井旅館"></a>';
            document.getElementById('result-area3').innerHTML = answer3;
        }

        //4番目に近い
        if(answer[3] === calcuA) {
            answer4 = '<a href="inokasira.html"><img src="井の頭公園.png" alt="井の頭公園"></a>';
            document.getElementById('result-area4').innerHTML = answer4;
        }else if (answer[3] === calcuB) {
            answer4 = '<a href="isentei.html"><img src="isentei.png" alt="isentei"></a>';
            document.getElementById('result-area4').innerHTML = answer4;
        }else if (answer[3] === calcuC) {
            answer4 = '<a href="syayoukan.html"><img src="斜陽館.png" alt="斜陽館"></a>';
            document.getElementById('result-area4').innerHTML = answer4;
        }else if (answer[3] === calcuD) {
            answer4 = '<a href="yasuda.html"><img src="安田屋.png" alt="安田屋旅館"></a>';
            document.getElementById('result-area4').innerHTML = answer4;
        }else if (answer[3] === calcuE) {
            answer4 = '<a href="dazaisokai.html"><img src="太宰疎開.png" alt="太宰治疎開の家"></a>';
            document.getElementById('result-area4').innerHTML = answer4;
        }else if (answer[3] === calcuF) {
            answer4 = '<a href="ekisya.html"><img src="駅舎.png" alt="喫茶店「駅舎」"></a>';
            document.getElementById('result-area4').innerHTML = answer4;
        }else if (answer[3] === calcuG) {
            answer4 = '<a href="asino.html"><img src="芦野公園.png" alt="芦野公園"></a>';
            document.getElementById('result-area4').innerHTML = answer4;
        }else if (answer[3] === calcuH) {
            answer4 = '<a href="hukaura.html"><img src="ふかうら文学館.png" alt="ふかうら文学館"></a>';
            document.getElementById('result-area4').innerHTML = answer4;
        }else if (answer[3] === calcuI) {
            answer4 = '<a href="rupan.html"><img src="ルパン.png" alt="銀座ルパン"></a>';
            document.getElementById('result-area4').innerHTML = answer4;
        }else if (answer[3] === calcuJ) {
            answer4 = '<a href="arai.html"><img src="新井旅館.png" alt="新井旅館"></a>';
            document.getElementById('result-area4').innerHTML = answer4;
        }

        //5番目に近い
        if(answer[4] === calcuA) {
            answer5 = '<a href="inokasira.html"><img src="井の頭公園.png" alt="井の頭公園"></a>';
            document.getElementById('result-area5').innerHTML = answer5;
            document.getElementById('plus-area').innerHTML = '<a href="plus-list.html">もっと見る</a>';
        }else if (answer[4] === calcuB) {
            answer5 = '<a href="isentei.html"><img src="isentei.png" alt="isentei"></a>';
            document.getElementById('result-area5').innerHTML = answer5;
            document.getElementById('plus-area').innerHTML = '<a href="plus-list.html">もっと見る</a>';
        }else if (answer[4] === calcuC) {
            answer5 = '<a href="syayoukan.html"><img src="斜陽館.png" alt="斜陽館"></a>';
            document.getElementById('result-area5').innerHTML = answer5;
            document.getElementById('plus-area').innerHTML = '<a href="plus-list.html">もっと見る</a>';
        }else if (answer[4] === calcuD) {
            answer5 = '<a href="yasuda.html"><img src="安田屋.png" alt="安田屋旅館"></a>';
            document.getElementById('result-area5').innerHTML = answer5;
            document.getElementById('plus-area').innerHTML = '<a href="plus-list.html">もっと見る</a>';
        }else if (answer[4] === calcuE) {
            answer5 = '<a href="dazaisokai.html"><img src="太宰疎開.png" alt="太宰治疎開の家"></a>';
            document.getElementById('result-area5').innerHTML = answer5;
            document.getElementById('plus-area').innerHTML = '<a href="plus-list.html">もっと見る</a>';
        }else if (answer[4] === calcuF) {
            answer5 = '<a href="ekisya.html"><img src="駅舎.png" alt="喫茶店「駅舎」"></a>';
            document.getElementById('result-area5').innerHTML = answer5;
            document.getElementById('plus-area').innerHTML = '<a href="plus-list.html">もっと見る</a>';
        }else if (answer[4] === calcuG) {
            answer5 = '<a href="asino.html"><img src="芦野公園.png" alt="芦野公園"></a>';
            document.getElementById('result-area5').innerHTML = answer5;
            document.getElementById('plus-area').innerHTML = '<a href="plus-list.html">もっと見る</a>';
        }else if (answer[4] === calcuH) {
            answer5 = '<a href="hukaura.html"><img src="ふかうら文学館.png" alt="ふかうら文学館"></a>';
            document.getElementById('result-area5').innerHTML = answer5;
            document.getElementById('plus-area').innerHTML = '<a href="plus-list.html">もっと見る</a>';
        }else if (answer[4] === calcuI) {
            answer5 = '<a href="rupan.html"><img src="ルパン.png" alt="銀座ルパン"></a>';
            document.getElementById('result-area5').innerHTML = answer5;
            document.getElementById('plus-area').innerHTML = '<a href="plus-list.html">もっと見る</a>';
        }else if (answer[4] === calcuJ) {
            answer5 = '<a href="arai.html"><img src="新井旅館.png" alt="新井旅館"></a>';
            document.getElementById('result-area5').innerHTML = answer5;
            document.getElementById('plus-area').innerHTML = '<a href="plus-list.html">もっと見る</a>';
        }

    },

        // ②取得に失敗した場合の関数
        function( error )
        {
            // エラーコード(error.code)の番号
            // 0:UNKNOWN_ERROR　　原因不明のエラー
            // 1:PERMISSION_DENIED　　利用者が位置情報の取得を許可
            // 2:POSITION_UNAVAILABLE　　電波情報などで位置情報を取得
            // 3:TIMEOUT　　　　　　位置情報の取得に時間がかかり過ぎた

            // エラー番号に対応したメッセージ
            var errorInfo = [
                "原因不明のエラーが発生しました",
                "位置情報の取得が許可されませんでした",
                "電波状況などで位置情報が取得できませんでした",
                "位置情報の取得に時間がかかり過ぎてタイムアウトしました"
            ];

            // エラー番号
            var errorNo = error.code ;

            // エラーメッセージ
            var errorMessage = errorNo + ":" + errorInfo[errorNo];

            // アラート表示
            alert( errorMessage );

            // HTMLへの書き出し
            document.getElementById('result-area').innerHTML = errorMessage;
        }
    );
}

// 対応していない場合
else
{
    //エラーメッセージ
    var errorMessage = "お使いの端末は、GeoLacation APIに対応していません。";

    // アラート表示
    alert( errorMessage );

    document.getElementById('result-area').innerHTML = errorMessage;
};
}

searchButton.onclick = () => {
    spotSearch();
    document.getElementById('comment').innerText = '現在地から近い順に並べました。'
}