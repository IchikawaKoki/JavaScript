var user_hand = prompt('じゃんけんの手をグー・チョキ・パーから選んでください');
while(user_hand != "グー" && user_hand != "チョキ" && user_hand != "パー" && user_hand != null){
  alert('じゃんけんの手をグー・チョキ・パーから選んでください');
  var user_hand = prompt('もう一度じゃんけんの手をグー・チョキ・パーから選んでください');
}
if(user_hand != null){
  var js_hand = get_js_hand();
  var result = winlose(user_hand,js_hand);
  alert('あなたが出した手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + result + 'です。');
}
else {
  alert('また挑戦してね');
}

function get_js_hand(){
  var js_hand_num = Math.floor(Math.random() * 3);
  if(js_hand_num == 0){
    def_js_hand = "グー";
  }
  else if(js_hand_num == 1){
    def_js_hand = "チョキ";
  }
  else if(js_hand_num == 2){
    def_js_hand = "パー";
  }
  return def_js_hand;
}

function winlose(user, js){
  var janken_result;
  if(user == "グー"){
    if(js == "グー"){
      janken_result = "あいこ";
    }
    else if(js == "チョキ"){
      janken_result = "勝ち";
    }
    else if(js == "パー"){
      janken_result = "負け";
    }
  }
  else if(user == "チョキ"){
    if(js == "グー"){
      janken_result = "負け";
    }
    else if(js == "チョキ"){
      janken_result = "あいこ";
    }
    else if(js == "パー"){
      janken_result = "勝ち";
    }
  }
  else if(user == "パー"){
    if(js == "グー"){
      janken_result = "勝ち";
    }
    else if(js == "チョキ"){
      janken_result = "負け";
    }
    else if(js == "パー"){
      janken_result = "あいこ";
    }
  }
  return janken_result;
}