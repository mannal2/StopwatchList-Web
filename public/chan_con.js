var count = 1;
var timeArray = new Array();
let member = {
    0 : {name:"유재석", play:false},
    1 : {name:"박명수", play:false},
    2 : {name:"정준하", play:false},
    3 : {name:"하하", play:false},
    4 : {name:"양세형", play:false},
    5 : {name:"조세호", play:false},
    6 : {name:"황광희", play:false},
};

function makeList(){
    var id = 'id' + count;
    var name = 'name'+ count;
    var time = 'time' + count;
    var start = 'start' + count;
    var end = 'end' + count;
    var people = 'peo' + count;
    var phone = 'phone' + count;
    var newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'but');

    var newForm = document.createElement('form');
    newForm.setAttribute('action' , '/info');
    newForm.setAttribute('method', 'post');
    newForm.setAttribute('target', '_blank');

    var newInput = document.createElement('input');
    newInput.setAttribute('type','text');
    newInput.setAttribute('placeholder','ID');
    newInput.setAttribute('class','id');
    newInput.setAttribute('name', 'id');
    newInput.setAttribute('id', id);

    var newInput2 = document.createElement('input');
    newInput2.setAttribute('type','text');
    newInput2.setAttribute('placeholder','이름');
    newInput2.setAttribute('class','name');
    newInput2.setAttribute('name', 'name');
    newInput2.setAttribute('id', name);

    var newInput3 = document.createElement('input');
    newInput3.setAttribute('type', 'text');
    newInput3.setAttribute('placeholder', '전화번호');
    newInput3.setAttribute('class', 'num');
    newInput3.setAttribute('name', 'phone');
    newInput3.setAttribute('id', phone);

    var newInput4 = document.createElement('div');
    newInput4.setAttribute('type', 'text');
    newInput4.setAttribute('class', 'people');
    newInput4.setAttribute('id', people);
    newInput4.innerHTML = '추첨';
    newInput4.setAttribute('onclick', 'cho_Peo(this.id)');
    
    var newDiv2 = document.createElement('input');
    newDiv2.setAttribute('type','text');
    newDiv2.setAttribute('id', time);
    newDiv2.setAttribute('class','time');
    newDiv2.setAttribute('name', 'time');
    newDiv2.readOnly = true;
    newDiv2.value = 0;

    var newBut = document.createElement('button');
    newBut.setAttribute('id', start);
    newBut.setAttribute('class', 'start');
    newBut.innerHTML = "시작";
    newBut.setAttribute('onclick', 'startNum(this.id)');
    newBut.setAttribute('type', 'button');

    var newBut2 = document.createElement('button');
    newBut2.setAttribute('id', end);
    newBut2.setAttribute('class', 'end');
    newBut2.setAttribute('type', 'button');
    newBut2.innerHTML = "종료";
    
    var newBut3 = document.createElement('input');
    newBut3.setAttribute('class', 'send');
    newBut3.setAttribute('type', 'submit');
    newBut3.setAttribute('id', count);
    newBut3.setAttribute('onclick', 'timeEnd(this.id)');

    newForm.appendChild(newInput);
    newForm.appendChild(newInput2);
    newForm.appendChild(newInput3);
    newForm.appendChild(newInput4)
    newForm.appendChild(newDiv2);
    newForm.appendChild(newBut);
    newForm.appendChild(newBut2);
    newForm.appendChild(newBut3);
    newDiv.appendChild(newForm);
    document.getElementById('par').appendChild(newDiv);

    count++;
}

function startNum(str){
    var num = parseInt(str.substr(5, str.length));
    var time = 'time' + num;
    var stop = 'end' + num;
    timeArray[num-1] = 0;
    var a=setInterval(function(){
        timeArray[num-1]++;
        document.getElementById(time).value = timeArray[num-1];
    },1000);
    document.getElementById(str).style.visibility="hidden";
    document.getElementById(stop).onclick=function(){
        clearInterval(a);
        document.getElementById(stop).style.visibility = "hidden";
    }
}

function timeEnd(num){
    var id = 'id' + num;
    var name = 'name' + num;
    var phone = 'phone' + num;
    var people = 'peo' + num;

    document.getElementById(phone).readOnly = true;
    document.getElementById(id).readOnly = true;
    document.getElementById(name).readOnly = true;
    document.getElementById(num).style.visibility = "hidden";
    var a = document.getElementById(people).innerHTML;
    for(var i = 0;i<Object.keys(member).length;i++){
        if(member[i].name == a){
            member[i].play = false;
            break;
        }
    }
}

function cho_Peo(str){
    var id;
    do{
        id = Math.floor(Math.random()*Object.keys(member).length);
    }while(member[id].play == true);
    document.getElementById(str).innerHTML = member[id].name;
    document.getElementById(str).onclick = '';
    member[id].play = true;
}