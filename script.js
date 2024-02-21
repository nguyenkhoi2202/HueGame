const actions = [
    'img/card1.png',
    'img/card2.png',
    'img/card3.png',
    'img/card4.png',
    'img/card5.png',
    'img/card6.png',
    'img/card7.png',
    'img/card8.png',
    'img/card9.png',
    'img/card10.png',
    'img/card11.png',
    'img/card12.png',
    'img/card13.png',
    'img/card14.png',
    'img/card15.png',
    'img/card16.png',
    'img/card17.png',
    'img/card18.png',
    'img/card19.png',
    'img/card20.png',
    'img/card21.png',
    'img/card22.png',
    'img/card23.png',
    'img/card24.png',
    'img/card25.png',
    'img/card26.png',
    'img/card27.png',
    'img/card28.png',
    'img/card28.png',
    'img/card30.png',
    'img/card31.png',
    'img/card32.png',
    'img/card33.png',
    'img/card34.png',
    'img/card35.png',
    'img/card36.png',
    'img/card37.png',
    'img/card38.png',
    'img/card39.png',
    'img/card40.png',
    'img/card41.png',
    'img/card42.png',
    'img/card43.png',
    'img/card44.png',
    'img/card45.png',
    'img/card46.png',
    'img/card47.png',
    'img/card48.png',
    'img/card49.png',
    'img/card50.png',
    'img/card51.png',
    'img/card52.png',
    'img/card53.png',
    'img/card54.png',
    'img/card55.png',
    'img/card56.png',
    'img/card57.png',
    'img/card58.png',
    'img/card59.png',
    'img/card60.png',
    'img/card61.png',
    'img/card62.png',
    'img/card63.png',
    'img/card64.png',
    'img/card65.png',
    'img/card66.png',
    'img/card67.png',
    'img/card68.png',
    'img/card69.png',
    'img/card70.png',
    'img/card71.png',
    'img/card72.png',
    'img/card73.png',
    'img/card74.png',
    'img/card75.png',
    'img/card76.png',
    'img/card77.png',
    'img/card78.png',
    'img/card79.png',
    'img/card80.png',
];

let shuffledActions = [...actions]; // Copy the array for shuffling
let displayedActions = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function randomAction() {
    if (shuffledActions.length === 0) {
        // If all images have been displayed, reshuffle the array
        shuffledActions = [...actions];
        displayedActions = [];
    }

    // Get the next action from the shuffled array
    const selectedAction = shuffledActions.pop();
    displayedActions.push(selectedAction);

    // Show the SweetAlert2 popup
    Swal.fire({
        title: 'Kết quả',
        html: `<img src="${selectedAction}" alt="Action Image" style="max-width: 100%;">`,
        confirmButtonColor: '#4caf50',
        confirmButtonText: 'OK',
    });
}

function socBai() {
    // Shuffle the actions array
    shuffleArray(actions);

    //const cardContainer = document.createElement('div');

     // Get the first action from the shuffled array
     const selectedAction = actions[0];

     // Create a container for the card element
     const cardContainer = document.createElement('div');
     cardContainer.classList.add('card-container');
 
     // Create card element with spin animation
     const cardElement = document.createElement('div');
     cardElement.classList.add('card-spin');
     cardElement.innerHTML = `<img src="${selectedAction}" alt="Action Image" style="max-width: 100%;">`;
 
     // Add "Vui lòng chờ" text
     const pleaseWaitText = document.createElement('div');
     pleaseWaitText.textContent = 'Vui lòng chờ';
     pleaseWaitText.classList.add('please-wait');
 
     cardContainer.appendChild(cardElement);
     cardContainer.appendChild(pleaseWaitText);
 
     // Show the SweetAlert2 popup with the card container
     Swal.fire({
         html: cardContainer,
         showConfirmButton: false,
         onOpen: () => {
             cardElement.style.animation = 'spinAnimation 0.3s infinite linear';    
         }
     });

    Swal.fire({
        html: cardContainer,
        showConfirmButton: false, // Hide the confirm button
        onOpen: () => {
            // Trigger the shuffle animation when the popup is opened
            cardContainer.classList.add('card-container-animation');
            
            // Wait for the animation to complete before showing the success popup
            setTimeout(() => {
                Swal.fire({
                    title: 'Trộn Bài',
                    text: 'Trộn bài thành công, quất thôi',
                    icon: 'success',
                    confirmButtonColor: '#4caf50',
                    confirmButtonText: 'OK',
                });
            }, actions.length * 100);
        }
    });
}

function showButtons(){

    Swal.fire({
        title: 'Donate cho tui đi <3',
        html: `<img src="img/qr-bank.png" alt="Action Image" style="max-width: 100%;">`,
        confirmButtonColor: '#4caf50',
        confirmButtonText: 'OK',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        cancelButtonText: 'Không',
    }).then((result) => {
        if (result.isConfirmed) {
            
            var startButton = document.getElementById('startButton');
            var button1 = document.getElementById('button1');
            var button2 = document.getElementById('button2');
    

            startButton.style.display = 'none';
    
            button1.style.display = 'inline-block';
            button2.style.display = 'inline-block';
            console.log('Bạn đã đồng ý donate.');
        } else {
            console.log('Bạn đã từ chối donate hoặc đóng cửa sổ.');
        }
    });
    
}

function fb(){
    window.location.href = 'https://www.facebook.com/nguyenkhoi2202';
}

function git(){
    window.location.href = '';
}

function ig(){
    window.location.href = 'https://www.instagram.com/nguyenkhoi22022000/';
}