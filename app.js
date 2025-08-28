const heartBtn = document.querySelectorAll('.heart-btn');
let heartNumber = Number(document.querySelector('.heart-number').innerHTML);

for (const heart of heartBtn) {
  heart.addEventListener('click', function () {
    heartNumber = heartNumber + 1;

    document.querySelector('.heart-number').innerText = heartNumber;
    // document.getElementById('')
    console.log(heartNumber);
  })
}



// function for call button
const callBtn = document.querySelectorAll('.call-btn');
let coinNumber = Number(document.querySelector('.coin-number').innerText);
for (const call of callBtn) {
  call.addEventListener('click', function () {
    const callTitle = call.parentNode.parentNode.children[1].innerText;
    const callNumber = call.parentNode.parentNode.children[3].innerText;
    if (coinNumber <= 0) {
      alert(`❌ You don't have any coin. Minimun 20 coin are required`);
      return;
    } else {
      alert(`📞 Calling ${callTitle} ${callNumber}...`);
      coinNumber = coinNumber - 20;
      document.querySelector('.coin-number').innerHTML = coinNumber;
    }



  })
}
