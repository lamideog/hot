// EVENT LISTENERS

// Card 1 mouseover
document.getElementById("card1").addEventListener("mouseover", onHover);

// Mouse Out (General)
// document.getElementById("card1").addEventListener("mouseout", onMouseOut);



// FUNCTIONS
function onHover() {
    console.log('first')
    // document.getElementById('text1').innerHTML = 'She just want the koko so i deliver the koko';
    document.getElementById('so').slideToggle()
}

function onMouseOut() {
    document.getElementById('text1').innerHTML = '';
}

