const appState = {
	xMoves: [],
	oMoves: []

};

// State modification functions

// Render functions

let count = 0;
//console.log(appState.xMoves);

function clickListener() {

	$(".cell").click(function() {
		let currentID = this.id;
		//console.log(currentID);
		if (count % 2 === 1) {
			$(event.currentTarget).text("X");
			appState.xMoves.push(parseInt(currentID, 0));
			console.log(appState.xMoves);
		} else {
			$(event.currentTarget).text("O");
			appState.oMoves.push(parseInt(currentID, 0));
			console.log(appState.oMoves);
		}
		count++;
		//winnerFinderX();
		if (winnerFinderX() === true) {
			console.log("x wins");
		}
	})
}

function winnerFinderX() {
	if (appState.xMoves.includes(0) && appState.xMoves.includes(1) && appState.xMoves.includes(2)) {
		return true;
	}
	if (appState.xMoves.includes(3) && appState.xMoves.includes(4) && appState.xMoves.includes(5)){
		return true;
	}
	if (appState.xMoves.includes(6) && appState.xMoves.includes(7) && appState.xMoves.includes(8)){
		return true;
	}
	if (appState.xMoves.includes(0) && appState.xMoves.includes(3) && appState.xMoves.includes(6)){
		return true;
	}
	if (appState.xMoves.includes(1) && appState.xMoves.includes(4) && appState.xMoves.includes(7)){
		return true;
	}
	if (appState.xMoves.includes(2) && appState.xMoves.includes(5) && appState.xMoves.includes(8)){
		return true;
	}
	if (appState.xMoves.includes(0) && appState.xMoves.includes(4) && appState.xMoves.includes(8)){
		return true;
	}
	if (appState.xMoves.includes(2) && appState.xMoves.includes(4) && appState.xMoves.includes(6)){
		return true;
	}
}



function renderBoard() {
	let boardHTML = `<div class="row">
		                <div class="cell" id="0">
		                    <p>&nbsp;</p>
		                </div>
		                <div class="cell" id="1">
		                    <p>&nbsp;</p>
		                </div>
		                <div class="cell" id="2">
		                    <p>&nbsp;</p>
		                </div>
		            </div>
		            <div class="row">
		                <div class="cell" id="3">
		                    <p>&nbsp;</p>
		                </div>
		                <div class="cell" id="4">
		                    <p>&nbsp;</p>
		                </div>
		                <div class="cell" id="5">
		                    <p>&nbsp;</p>
		                </div>
		            </div>
		            <div class="row">
		                <div class="cell" id="6">
		                    <p>&nbsp;</p>
		                </div>
		                <div class="cell" id="7">
		                    <p>&nbsp;</p>
		                </div>
		                <div class="cell" id="8">
		                    <p>&nbsp;</p>
		                </div>
		            </div>`
    $(".board").append(boardHTML);
}

function restart() {
	let pElement = `<p>&nbsp;</p>`;
	$("#new-game").click(function(){
		console.log("new game clicked")
		$(".cell").empty().append(pElement);
	})
}

// Event Listeners

$(document).ready(function() {
	renderBoard();
	clickListener();
	restart();

})







