$('#btn').click(function (){
    var firstNameValue = $('#firstName').val();
    var lastNameValue = $('#lastName').val();
    var fullName = firstNameValue +' '+lastNameValue;
    $('#fullName').val(fullName);
});





// alert($('#h1').html());


// var redBtnElement = document.getElementById('redBtn');
// redBtnElement.onclick = function () {
//     var divOneElement = document.getElementById('divOne');
//     // divOneElement.style.backgroundColor = 'red';
//     divOneElement.className = 'class-one';
// };
//
// var greenBtnElement = document.getElementById('greenBtn');
// greenBtnElement.onclick = function () {
//     var divOneElement = document.getElementById('divOne');
//     // divOneElement.style.backgroundColor = 'green';
//     divOneElement.className = 'class-two';
// };
//
// var blueBtnElement = document.getElementById('blueBtn');
// blueBtnElement.onclick = function () {
//     var divOneElement = document.getElementById('divOne');
//     // divOneElement.style.backgroundColor = 'blue';
//     divOneElement.className = 'class-three';
// };
//
// var defaultBtnElement = document.getElementById('defaultBtn');
// defaultBtnElement.onclick = function () {
//     var divOneElement = document.getElementById('divOne');
//     // divOneElement.style.backgroundColor = 'white';
//     divOneElement.className = 'my-style';
// };



// var btnElement = document.getElementById('btn');
// btnElement.onclick = function () {
//     var startingNumberValue = document.getElementById('startingNumber').value;
//     var endingNumber = document.getElementById('endingNumber').value;
//
//     var res = ' ';
//     for (var x=startingNumberValue; x<= endingNumber; x++){
//         res+=x;
//     }
//     document.getElementById('result').value = res;
// };