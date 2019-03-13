$(document).ready(function(){
  function score_indicate(){
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);

    // ここに、上記を参考にして平均点を出力する処理を書き込む
    let avarage = sum / subject_points.length;
    $("#avarage_indicate").text(avarage);
    return avarage;
  }
  function get_achievement(){
    // ここに、ランクの値の文字列（平均点が80点以上なら"A"、60点以上なら"B"、40点以上なら"C"、それ以下なら"D"）を出力する処理を書き込む
    let rank = $("#avarage_indicate").text();
      if(rank>=80){
        $("#evaluation").text("A");
      }else if(rank>=60){
        $("#evaluation").text("B");
      }else if(rank>=40){
        $("#evaluation").text("C");
      }else{
        $("#evaluation").text("D");
      }
  }

  function get_pass_or_failure(){
    // ここに、全ての教科が60点以上なら"合格"の文字列、一つでも60点未満の教科があったら"不合格"の文字列を出す処理を書き込む
    let national_language = $("#national_language").val();
    let english = $("#english").val();
    let mathematics = $("#mathematics").val();
    let science = $("#science").val();
    let society = $("#society").val();
      if(national_language >= 60 && english >= 60 && mathematics >= 60 && science >= 60 && society >= 60){
        $("#judge").text("合格")
      }else{
        $("#judge").text("不合格")
      }
  }
  

  function judgement(){
    // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
    let evaluation = $("#evaluation").text();
    let judge = $("#judge").text();
    // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。
    $("#alert-indicate").remove()
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${evaluation}です。${judge}です</label>`);
  }

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });

  $('#btn-evaluation').click(function() {
    get_achievement();
  });

  $('#btn-judge').click(function() {
    get_pass_or_failure();
  });

  $('#btn-declaration').click(function() {
    judgement();
  });
});