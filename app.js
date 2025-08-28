const heartBtn = document.querySelectorAll('.heart-btn');
let heartNumber = Number(document.querySelector('.heart-number').innerHTML);

for (const heart of heartBtn) {
  heart.addEventListener('click', function () {
    heartNumber = heartNumber + 1;

    document.querySelector('.heart-number').innerText = heartNumber;
    // document.getElementById('')
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

    // history functionalities
    const historyContainer = document.querySelector('.history-container');
    const now = new Date();
    const nowTime = (now.toLocaleTimeString());
    console.log(nowTime)

    const div = document.createElement('div');

    div.innerHTML = `
    <div class="flex items-center justify-between bg-gray-100 p-2 rounded-[8px] mb-2">
          <div>
            <h4 class="font-semibold text-[16px]">${callTitle}</h4>
            <p>${callNumber}</p>
          </div>
          <h3 class="text-[15px]">${nowTime}</h3>
        </div>
    `;
    historyContainer.appendChild(div);



  })
}

// functionality for clear button

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', function () {
  document.querySelector('.history-container').innerHTML = '';
})


// copy button functionality
const copyBtn = document.querySelectorAll('.copy-btn');

let copyNumber = Number(document.querySelector('.copy-number').innerHTML);
for (const copy of copyBtn) {
  console.log(copy);
  copy.addEventListener('click', async function () {
    const callNumber = copy.parentNode.parentNode.children[3].innerText;
    await navigator.clipboard.writeText(callNumber);
    alert(`Number Copied: ${callNumber}`);
    copyNumber = copyNumber + 1;
    document.querySelector('.copy-number').innerHTML = copyNumber
  })
}

