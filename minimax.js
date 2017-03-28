//var SEARCH_DEPTH = 4;

function evaluator( conf, player ){
	var score1 = 0;
	var score2 = 0;
	var COEFF = 10;
	for (var row = 0; row < 6; row++) {
		for (var col = 0; col < 7; col++) {
			if (conf[row][col] == player) {
				if (row < 3 && col < 3) {
					if (conf[row][col+1] != player*(-1) && conf[row][col+2] != player*(-1) && conf[row][col+3] != player*(-1)) {
						var incr = 1;
						if (conf[row][col+1] == player) { incr *= 100; }
						if (conf[row][col+2] == player) { incr *= 100; }
						if (conf[row][col+3] == player) { incr *= 100; }
						if (conf[row][col+1] == player && conf[row][col+2] == player && conf[row][col+3] == player){ return 1000000000; }
						score1 += incr;
					}
					if (conf[row+1][col+1] != player*(-1) && conf[row+2][col+2] != player*(-1) && conf[row+3][col+3] != player*(-1)) {
						var incr = 1;
						if (conf[row+1][col+1] == player) { incr *= 100; }
						if (conf[row+2][col+2] == player) { incr *= 100; }
						if (conf[row+3][col+3] == player) { incr *= 100; }
						if (conf[row+1][col+1] == player && conf[row+2][col+2] == player && conf[row+3][col+3] == player){ return 1000000000; }
						score1 += incr;
					}
					if (conf[row+1][col] != player*(-1) && conf[row+2][col] != player*(-1) && conf[row+3][col] != player*(-1)) {
						var incr = 1;
						if (conf[row+1][col] == player) { incr *= 100; }
						if (conf[row+2][col] == player) { incr *= 100; }
						if (conf[row+3][col] == player) { incr *= 100; }
						if (conf[row+1][col] == player && conf[row+2][col] == player && conf[row+3][col] == player){ return 1000000000; }
						score1 += incr;
					}
				} else if (row <  3 && col == 3) {
					if (conf[row][col+1] != player*(-1) && conf[row][col+2] != player*(-1) && conf[row][col+3] != player*(-1)) {
						var incr = 1;
						if (conf[row][col+1] == player) { incr *= 100; }
						if (conf[row][col+2] == player) { incr *= 100; }
						if (conf[row][col+3] == player) { incr *= 100; }
						if (conf[row][col+1] == player && conf[row][col+2] == player && conf[row][col+3] == player){ return 1000000000; }
						score1 += incr;
					}
					if (conf[row+1][col+1] != player*(-1) && conf[row+2][col+2] != player*(-1) && conf[row+3][col+3] != player*(-1)) {
						var incr = 1;
						if (conf[row+1][col+1] == player) { incr *= 100; }
						if (conf[row+2][col+2] == player) { incr *= 100; }
						if (conf[row+3][col+3] == player) { incr *= 100; }
						if (conf[row+1][col+1] == player && conf[row+2][col+2] == player && conf[row+3][col+3] == player){ return 1000000000; }
						score1 += incr;
					}
					if (conf[row+1][col] != player*(-1) && conf[row+2][col] != player*(-1) && conf[row+3][col] != player*(-1)) {
						var incr = 1;
						if (conf[row+1][col] == player) { incr *= 100; }
						if (conf[row+2][col] == player) { incr *= 100; }
						if (conf[row+3][col] == player) { incr *= 100; }
						if (conf[row+1][col] == player && conf[row+2][col] == player && conf[row+3][col] == player){ return 1000000000; }
						score1 += incr;
					}
					if (conf[row][col-1] != player*(-1) && conf[row][col-2] != player*(-1) && conf[row][col-3] != player*(-1)) {
						var incr = 1;
						if (conf[row][col-1] == player) { incr *= 100; }
						if (conf[row][col-2] == player) { incr *= 100; }
						if (conf[row][col-3] == player) { incr *= 100; }
						if (conf[row][col-1] == player && conf[row][col-2] == player && conf[row][col-3] == player){ return 1000000000; }
						score1 += incr;
					}
					if (conf[row+1][col-1] != player*(-1) && conf[row+2][col-2] != player*(-1) && conf[row+3][col-3] != player*(-1)) {
						var incr = 1;
						if (conf[row+1][col-1] == player) { incr *= 100; }
						if (conf[row+2][col-2] == player) { incr *= 100; }
						if (conf[row+3][col-3] == player) { incr *= 100; }
						if (conf[row+1][col+1] == player && conf[row+2][col+2] == player && conf[row+3][col+3] == player){ return 1000000000; }
						score1 += incr;
					}
				} else if (row <  3 && col >  3) {
					if (conf[row+1][col] != player*(-1) && conf[row+2][col] != player*(-1) && conf[row+3][col] != player*(-1)) {
						var incr = 1;
						if (conf[row+1][col] == player) { incr *= 100; }
						if (conf[row+2][col] == player) { incr *= 100; }
						if (conf[row+3][col] == player) { incr *= 100; }
						if (conf[row+1][col] == player && conf[row+2][col] == player && conf[row+3][col] == player){ return 1000000000; }
						score1 += incr;
					}
					if (conf[row][col-1] != player*(-1) && conf[row][col-2] != player*(-1) && conf[row][col-3] != player*(-1)) {
						var incr = 1;
						if (conf[row][col-1] == player) { incr *= 100; }
						if (conf[row][col-2] == player) { incr *= 100; }
						if (conf[row][col-3] == player) { incr *= 100; }
						if (conf[row][col-1] == player && conf[row][col-2] == player && conf[row][col-3] == player){ return 1000000000; }
						score1 += incr;
					}
					if (conf[row+1][col-1] != player*(-1) && conf[row+2][col-2] != player*(-1) && conf[row+3][col-3] != player*(-1)) {
						var incr = 1;
						if (conf[row+1][col-1] == player) { incr *= 100; }
						if (conf[row+2][col-2] == player) { incr *= 100; }
						if (conf[row+3][col-3] == player) { incr *= 100; }
						if (conf[row+1][col+1] == player && conf[row+2][col+2] == player && conf[row+3][col+3] == player){ return 1000000000; }
						score1 += incr;
					}
				} else if (row >= 3 && col <  3) {
					if (conf[row][col+1] != player*(-1) && conf[row][col+2] != player*(-1) && conf[row][col+3] != player*(-1)) {
						var incr = 1;
						if (conf[row][col+1] == player) { incr *= 100; }
						if (conf[row][col+2] == player) { incr *= 100; }
						if (conf[row][col+3] == player) { incr *= 100; }
						if (conf[row][col+1] == player && conf[row][col+2] == player && conf[row][col+3] == player){ return 1000000000; }
						score1 += incr;
					}
					if (conf[row-1][col+1] != player*(-1) && conf[row-2][col+2] != player*(-1) && conf[row-3][col+3] != player*(-1)) {
						var incr = 1;
						if (conf[row-1][col+1] == player) { incr *= 100; }
						if (conf[row-2][col+2] == player) { incr *= 100; }
						if (conf[row-3][col+3] == player) { incr *= 100; }
						if (conf[row-1][col+1] == player && conf[row-2][col+2] == player && conf[row-3][col+3] == player){ return 1000000000; }
						score1 += incr;
					}
					if (conf[row-1][col] != player*(-1) && conf[row-2][col] != player*(-1) && conf[row-3][col] != player*(-1)) {
						var incr = 1;
						if (conf[row-1][col] == player) { incr *= 100; }
						if (conf[row-2][col] == player) { incr *= 100; }
						if (conf[row-3][col] == player) { incr *= 100; }
						if (conf[row-1][col] == player && conf[row-2][col] == player && conf[row-3][col] == player){ return 1000000000; }
						score1 += incr;
					}
				} else if (row >= 3 && col == 3) {
					if (conf[row][col+1] != player*(-1) && conf[row][col+2] != player*(-1) && conf[row][col+3] != player*(-1)) {
						var incr = 1;
						if (conf[row][col+1] == player) { incr *= 100; }
						if (conf[row][col+2] == player) { incr *= 100; }
						if (conf[row][col+3] == player) { incr *= 100; }
						if (conf[row][col+1] == player && conf[row][col+2] == player && conf[row][col+3] == player){ return 1000000000; }
						score1 += incr;
					}
					if (conf[row-1][col+1] != player*(-1) && conf[row-2][col+2] != player*(-1) && conf[row-3][col+3] != player*(-1)) {
						var incr = 1;
						if (conf[row-1][col+1] == player) { incr *= 100; }
						if (conf[row-2][col+2] == player) { incr *= 100; }
						if (conf[row-3][col+3] == player) { incr *= 100; }
						if (conf[row-1][col+1] == player && conf[row-2][col+2] == player && conf[row-3][col+3] == player){ return 1000000000; }
						score1 += incr;
					}
					if (conf[row-1][col] != player*(-1) && conf[row-2][col] != player*(-1) && conf[row-3][col] != player*(-1)) {
						var incr = 1;
						if (conf[row-1][col] == player) { incr *= 100; }
						if (conf[row-2][col] == player) { incr *= 100; }
						if (conf[row-3][col] == player) { incr *= 100; }
						if (conf[row-1][col] == player && conf[row-2][col] == player && conf[row-3][col] == player){ return 1000000000; }
						score1 += incr;
					}
					if (conf[row][col-1] != player*(-1) && conf[row][col-2] != player*(-1) && conf[row][col-3] != player*(-1)) {
						var incr = 1;
						if (conf[row][col-1] == player) { incr *= 100; }
						if (conf[row][col-2] == player) { incr *= 100; }
						if (conf[row][col-3] == player) { incr *= 100; }
						if (conf[row][col-1] == player && conf[row][col-2] == player && conf[row][col-3] == player){ return 1000000000; }
						score1 += incr;
					}
					if (conf[row-1][col-1] != player*(-1) && conf[row-2][col-2] != player*(-1) && conf[row-3][col-3] != player*(-1)) {
						var incr = 1;
						if (conf[row-1][col-1] == player) { incr *= 100; }
						if (conf[row-2][col-2] == player) { incr *= 100; }
						if (conf[row-3][col-3] == player) { incr *= 100; }
						if (conf[row-1][col-1] == player && conf[row-2][col-2] == player && conf[row-3][col-3] == player){ return 1000000000; }
						score1 += incr;
					}
				} else if (row >= 3 && col >  3) {
					if (conf[row-1][col] != player*(-1) && conf[row-2][col] != player*(-1) && conf[row-3][col] != player*(-1)) {
						var incr = 1;
						if (conf[row-1][col] == player) { incr *= 100; }
						if (conf[row-2][col] == player) { incr *= 100; }
						if (conf[row-3][col] == player) { incr *= 100; }
						if (conf[row-1][col] == player && conf[row-2][col] == player && conf[row-3][col] == player){ return 1000000000; }
						score1 += incr;
					}
					if (conf[row][col-1] != player*(-1) && conf[row][col-2] != player*(-1) && conf[row][col-3] != player*(-1)) {
						var incr = 1;
						if (conf[row][col-1] == player) { incr *= 100; }
						if (conf[row][col-2] == player) { incr *= 100; }
						if (conf[row][col-3] == player) { incr *= 100; }
						if (conf[row][col-1] == player && conf[row][col-2] == player && conf[row][col-3] == player){ return 1000000000; }
						score1 += incr;
					}
					if (conf[row-1][col-1] != player*(-1) && conf[row-2][col-2] != player*(-1) && conf[row-3][col-3] != player*(-1)) {
						var incr = 1;
						if (conf[row-1][col-1] == player) { incr *= 100; }
						if (conf[row-2][col-2] == player) { incr *= 100; }
						if (conf[row-3][col-3] == player) { incr *= 100; }
						if (conf[row-1][col-1] == player && conf[row-2][col-2] == player && conf[row-3][col-3] == player){ return 1000000000; }
						score1 += incr;
					}
				} else {
					alert("ERROR in evaluation");
				}
			} else if (conf[row][col] == player*(-1)) {
				if (row < 3 && col < 3) {
					if (conf[row][col+1] != player && conf[row][col+2] != player && conf[row][col+3] != player) {
						var incr = 1;
						if (conf[row][col+1] == player*(-1)) { incr *= 100; }
						if (conf[row][col+2] == player*(-1)) { incr *= 100; }
						if (conf[row][col+3] == player*(-1)) { incr *= 100; }
						if (conf[row][col+1] == player*(-1) && conf[row][col+2] == player*(-1) && conf[row][col+3] == player*(-1)){ return -999999999999; }
						score2 += incr;
					}
					if (conf[row+1][col+1] != player && conf[row+2][col+2] != player && conf[row+3][col+3] != player) {
						var incr = 1;
						if (conf[row+1][col+1] == player*(-1)) { incr *= 100; }
						if (conf[row+2][col+2] == player*(-1)) { incr *= 100; }
						if (conf[row+3][col+3] == player*(-1)) { incr *= 100; }
						if (conf[row+1][col+1] == player*(-1)  && conf[row+2][col+2] == player && conf[row+3][col+3] == player*(-1)){ return -999999999999; }
						score2 += incr;
					}
					if (conf[row+1][col] != player && conf[row+2][col] != player && conf[row+3][col] != player) {
						var incr = 1;
						if (conf[row+1][col] == player*(-1)) { incr *= 100; }
						if (conf[row+2][col] == player*(-1)) { incr *= 100; }
						if (conf[row+3][col] == player*(-1)) { incr *= 100; }
						if (conf[row+1][col] == player*(-1) && conf[row+2][col] == player*(-1) && conf[row+3][col] == player*(-1)){ return -999999999999; }
						score2 += incr;
					}
				} else if (row <  3 && col == 3) {
					if (conf[row][col+1] != player && conf[row][col+2] != player && conf[row][col+3] != player) {
						var incr = 1;
						if (conf[row][col+1] == player*(-1)) { incr *= 100; }
						if (conf[row][col+2] == player*(-1)) { incr *= 100; }
						if (conf[row][col+3] == player*(-1)) { incr *= 100; }
						if (conf[row][col+1] == player*(-1) && conf[row][col+2] == player*(-1) && conf[row][col+3] == player*(-1)){ return -999999999999; }
						score2 += incr;
					}
					if (conf[row+1][col+1] != player && conf[row+2][col+2] != player && conf[row+3][col+3] != player) {
						var incr = 1;
						if (conf[row+1][col+1] == player*(-1)) { incr *= 100; }
						if (conf[row+2][col+2] == player*(-1)) { incr *= 100; }
						if (conf[row+3][col+3] == player*(-1)) { incr *= 100; }
						if (conf[row+1][col+1] == player*(-1) && conf[row+2][col+2] == player*(-1) && conf[row+3][col+3] == player*(-1)){ return -999999999999; }
						score2 += incr;
					}
					if (conf[row+1][col] != player && conf[row+2][col] != player && conf[row+3][col] != player) {
						var incr = 1;
						if (conf[row+1][col] == player*(-1)) { incr *= 100; }
						if (conf[row+2][col] == player*(-1)) { incr *= 100; }
						if (conf[row+3][col] == player*(-1)) { incr *= 100; }
						if (conf[row+1][col] == player*(-1) && conf[row+2][col] == player*(-1) && conf[row+3][col] == player*(-1)){ return -999999999999; }
						score2 += incr;
					}
					if (conf[row][col-1] != player && conf[row][col-2] != player && conf[row][col-3] != player) {
						var incr = 1;
						if (conf[row][col-1] == player*(-1)) { incr *= 100; }
						if (conf[row][col-2] == player*(-1)) { incr *= 100; }
						if (conf[row][col-3] == player*(-1)) { incr *= 100; }
						if (conf[row][col-1] == player*(-1) && conf[row][col-2] == player*(-1) && conf[row][col-3] == player*(-1)){ return -999999999999; }
						score2 += incr;
					}
					if (conf[row+1][col-1] != player && conf[row+2][col-2] != player && conf[row+3][col-3] != player) {
						var incr = 1;
						if (conf[row+1][col-1] == player*(-1)) { incr *= 100; }
						if (conf[row+2][col-2] == player*(-1)) { incr *= 100; }
						if (conf[row+3][col-3] == player*(-1)) { incr *= 100; }
						if (conf[row+1][col-1] == player*(-1) && conf[row+2][col-2] == player*(-1) && conf[row+3][col-3] == player*(-1)){ return -999999999999; }
						score2 += incr;
					}
				} else if (row <  3 && col >  3) {
					if (conf[row+1][col] != player && conf[row+2][col] != player && conf[row+3][col] != player) {
						var incr = 1;
						if (conf[row+1][col] == player*(-1)) { incr *= 100; }
						if (conf[row+2][col] == player*(-1)) { incr *= 100; }
						if (conf[row+3][col] == player*(-1)) { incr *= 100; }
						if (conf[row+1][col] == player*(-1) && conf[row+2][col] == player*(-1) && conf[row+3][col] == player*(-1)){ return -999999999999; }
						score2 += incr;
					}
					if (conf[row][col-1] != player && conf[row][col-2] != player && conf[row][col-3] != player) {
						var incr = 1;
						if (conf[row][col-1] == player*(-1)) { incr *= 100; }
						if (conf[row][col-2] == player*(-1)) { incr *= 100; }
						if (conf[row][col-3] == player*(-1)) { incr *= 100; }
						if (conf[row][col-1] == player*(-1) && conf[row][col-2] == player*(-1) && conf[row][col-3] == player*(-1)){ return -999999999999; }
						score2 += incr;
					}
					if (conf[row+1][col-1] != player && conf[row+2][col-2] != player && conf[row+3][col-3] != player) {
						var incr = 1;
						if (conf[row+1][col-1] == player*(-1)) { incr *= 100; }
						if (conf[row+2][col-2] == player*(-1)) { incr *= 100; }
						if (conf[row+3][col-3] == player*(-1)) { incr *= 100; }
						if (conf[row+1][col-1] == player*(-1) && conf[row+2][col-2] == player*(-1) && conf[row+3][col-3] == player*(-1)){ return -999999999999; }
						score2 += incr;
					}
				} else if (row >= 3 && col <  3) {
					if (conf[row][col+1] != player && conf[row][col+2] != player && conf[row][col+3] != player) {
						var incr = 1;
						if (conf[row][col+1] == player*(-1)) { incr *= 100; }
						if (conf[row][col+2] == player*(-1)) { incr *= 100; }
						if (conf[row][col+3] == player*(-1)) { incr *= 100; }
						if (conf[row][col+1] == player*(-1) && conf[row][col+2] == player*(-1) && conf[row][col+3] == player*(-1)){ return -999999999999; }
						score2 += incr;
					}
					if (conf[row-1][col+1] != player && conf[row-2][col+2] != player && conf[row-3][col+3] != player) {
						var incr = 1;
						if (conf[row-1][col+1] == player*(-1)) { incr *= 100; }
						if (conf[row-2][col+2] == player*(-1)) { incr *= 100; }
						if (conf[row-3][col+3] == player*(-1)) { incr *= 100; }
						if (conf[row-1][col+1] == player*(-1) && conf[row-2][col+2] == player*(-1) && conf[row-3][col+3] == player*(-1)){ return -999999999999; }
						score2 += incr;
					}
					if (conf[row-1][col] != player && conf[row-2][col] != player && conf[row-3][col] != player) {
						var incr = 1;
						if (conf[row-1][col] == player*(-1)) { incr *= 100; }
						if (conf[row-2][col] == player*(-1)) { incr *= 100; }
						if (conf[row-3][col] == player*(-1)) { incr *= 100; }
						if (conf[row-1][col] == player*(-1) && conf[row-2][col] == player*(-1) && conf[row-3][col] == player*(-1)){ return -999999999999; }
						score2 += incr;
					}
				} else if (row >= 3 && col == 3) {
					if (conf[row][col+1] != player && conf[row][col+2] != player && conf[row][col+3] != player) {
						var incr = 1;
						if (conf[row][col+1] == player*(-1)) { incr *= 100; }
						if (conf[row][col+2] == player*(-1)) { incr *= 100; }
						if (conf[row][col+3] == player*(-1)) { incr *= 100; }
						if (conf[row][col+1] == player*(-1) && conf[row][col+2] == player*(-1) && conf[row][col+3] == player*(-1)){ return -999999999999; }
						score2 += incr;
					}
					if (conf[row-1][col+1] != player && conf[row-2][col+2] != player && conf[row-3][col+3] != player) {
						var incr = 1;
						if (conf[row-1][col+1] == player*(-1)) { incr *= 100; }
						if (conf[row-2][col+2] == player*(-1)) { incr *= 100; }
						if (conf[row-3][col+3] == player*(-1)) { incr *= 100; }
						if (conf[row-1][col+1] == player*(-1) && conf[row-2][col+2] == player*(-1) && conf[row-3][col+3] == player*(-1)){ return -999999999999; }
						score2 += incr;
					}
					if (conf[row-1][col] != player && conf[row-2][col] != player && conf[row-3][col] != player) {
						var incr = 1;
						if (conf[row-1][col] == player*(-1)) { incr *= 100; }
						if (conf[row-2][col] == player*(-1)) { incr *= 100; }
						if (conf[row-3][col] == player*(-1)) { incr *= 100; }
						if (conf[row-1][col] == player*(-1) && conf[row-2][col] == player*(-1) && conf[row-3][col] == player*(-1)){ return -999999999999; }
						score2 += incr;
					}
					if (conf[row][col-1] != player && conf[row][col-2] != player && conf[row][col-3] != player) {
						var incr = 1;
						if (conf[row][col-1] == player*(-1)) { incr *= 100; }
						if (conf[row][col-2] == player*(-1)) { incr *= 100; }
						if (conf[row][col-3] == player*(-1)) { incr *= 100; }
						if (conf[row][col-1] == player*(-1) && conf[row][col-2] == player*(-1) && conf[row][col-3] == player*(-1)){ return -999999999999; }
						score2 += incr;
					}
					if (conf[row-1][col-1] != player && conf[row-2][col-2] != player && conf[row-3][col-3] != player) {
						var incr = 1;
						if (conf[row-1][col-1] == player*(-1)) { incr *= 100; }
						if (conf[row-2][col-2] == player*(-1)) { incr *= 100; }
						if (conf[row-3][col-3] == player*(-1)) { incr *= 100; }
						if (conf[row-1][col-1] == player*(-1) && conf[row-2][col-2] == player*(-1) && conf[row-3][col-3] == player*(-1)){ return -999999999999; }
						score2 += incr;
					}
				} else if (row >= 3 && col >  3) {
					if (conf[row-1][col] != player && conf[row-2][col] != player && conf[row-3][col] != player) {
						var incr = 1;
						if (conf[row-1][col] == player*(-1)) { incr *= 100; }
						if (conf[row-2][col] == player*(-1)) { incr *= 100; }
						if (conf[row-3][col] == player*(-1)) { incr *= 100; }
						if (conf[row-1][col] == player*(-1) && conf[row-2][col] == player*(-1) && conf[row-3][col] == player*(-1)){ return -999999999999; }
						score2 += incr;
					}
					if (conf[row][col-1] != player && conf[row][col-2] != player && conf[row][col-3] != player) {
						var incr = 1;
						if (conf[row][col-1] == player*(-1)) { incr *= 100; }
						if (conf[row][col-2] == player*(-1)) { incr *= 100; }
						if (conf[row][col-3] == player*(-1)) { incr *= 100; }
						if (conf[row][col-1] == player*(-1) && conf[row][col-2] == player*(-1) && conf[row][col-3] == player*(-1)){ return -999999999999; }
						score2 += incr;
					}
					if (conf[row-1][col-1] != player && conf[row-2][col-2] != player && conf[row-3][col-3] != player) {
						var incr = 1;
						if (conf[row-1][col-1] == player*(-1)) { incr *= 100; }
						if (conf[row-2][col-2] == player*(-1)) { incr *= 100; }
						if (conf[row-3][col-3] == player*(-1)) { incr *= 100; }
						if (conf[row-1][col-1] == player*(-1) && conf[row-2][col-2] == player*(-1) && conf[row-3][col-3] == player*(-1)){ return -999999999999; }
						score2 += incr;
					}
				} else {
					alert("ERROR in evaluation");
				}
			}
		}
	}

	//alert("Sono l'evaluator");
	//alert(player);
	//alert(conf);
	//alert(score);
	return score1-score2;
}

function generateNextConfig(player,config,ffps) {
	var configs = new Array(7);
	for (var mov = 0; mov < 7; mov++) {
		configs[mov] = new Array(6);
		for (var row = 0; row < 6; row++) {
			configs[mov][row] = new Array(7);
			for (var col = 0; col < 7; col++) {
				if (col == mov && row == ffps[mov][col]-1) {
					configs[mov][row][col] = player;
				} else {
					configs[mov][row][col] = config[row][col];
				}
			}
		}
	}
	return configs;
}

function generateNextFFPs(curFFP) {
	var ffps = new Array(7);
	for (var i = 0; i < 7; i++) {
		ffps[i] = new Array(7);
		for (var j = 0; j <7; j++) {
			if (i == j) {
				ffps[i][j] = curFFP[j]+1;
			} else {
				ffps[i][j] = curFFP[j];
			}
			
		}
	}
	return ffps;
}

function minimax(searchDepth, maxDepth, player, curConfig, curFFP) {
	//alert("minimax");
	//alert(searchDepth);
	var vals = new Array(7);
	if (searchDepth > 0) {
		//alterno fra mossa di 1 e mossa di -1
		if (searchDepth % 2 == 0) {
			//genero il prossimo step
			var ffps = generateNextFFPs(curFFP);
			var configs = generateNextConfig(player,curConfig,ffps);
			//ricorsione
			//alert(ffps);
			//alert(configs);
			for (var i = 0; i < 7; i++) {
				vals[i] = minimax(searchDepth-1,maxDepth,player,configs[i],ffps[i]);
			}
			//scelgo il max
			//alert("mi trovo in un nodo MAX ad altezza");
			//alert(searchDepth);
			//alert(vals);
			vals.sort(function(a, b){return a-b});
			return vals[6];
		} else {
			//genero il prossimo step
			var ffps = generateNextFFPs(curFFP);
			var configs = generateNextConfig(player*(-1),curConfig,ffps);
			//ricorsione
			//alert(ffps);
			//alert(configs);
			for (var i = 0; i < 7; i++) {
				vals[i] = minimax(searchDepth-1,maxDepth,player,configs[i],ffps[i]);
			}
			//alert("mi trovo in un nodo MIN ad altezza");
			//alert(searchDepth);
			//alert(vals);
			//scelgo il max
			vals.sort(function(a, b){return a-b});
			return vals[0];
		}	
	} else {
		//valuto la config che mi arriva
		return evaluator(curConfig,player)/maxDepth;
	}
	//return Math.trunc(Math.random());
}

function move( searchDepth, firstPlayer, firstConfig, firstFFP ) {
	var vals = new Array( 7 );
	var ffps = generateNextFFPs(firstFFP);
	var configs = generateNextConfig(player,firstConfig,ffps);
	var earlyEval = 0;
	var level = 1;
	for (var i = 0; i < 7; i++) {
		//raffinamento iterativo: aumento i livelli della ricerca (partendo da 1) fino a raggiungere il massimo deciso dall'utente, a meno che non trovi prima una mossa che porti alla vittoria o che eviti la sconfitta sicura
		earlyEval = minimax( 1, 1, firstPlayer, configs[i], ffps[i] );
		//alert(i);
		//alert(earlyEval);
		//il minimax ritorna 1.000.000.000.000 se una certo ramo porta alla vittoria e 999.999.999.999 se porta ad evitare una sconfitta sicura
		if (earlyEval == 1000000000) {
			//alert("vittoria in una mossa per...");
			//alert(firstPlayer);
			vals[i] = earlyEval;
		} else if (earlyEval == -999999999999) {
			//alert("sconfitta in una mossa per...");
			//alert(firstPlayer);
			vals[i] = earlyEval;
		} else {
			//alert("ricerco la mossa migliore");
			vals[i] = minimax( searchDepth-1, searchDepth, firstPlayer, configs[i], ffps[i] );
		}
	}
	//alert(vals);
	var supp = new Array( 7 );
	for (var i = 0; i < 7; i++) {
		supp[i] = vals[i];
	}
	supp.sort(function (a,b) { return a-b;});
	//alert(supp);
	for (var i = 6; i >= 0; i--) {
		var chosenCol = vals.indexOf( supp[i] );
		//alert(chosenCol);
		//alert(firstFFP[chosenCol]);
		if (firstFFP[chosenCol]<=5) {
			return chosenCol;
		}
	}
	//alert("tiro a caso");
	while (true) {
		var randomCol = Math.round(Math.random()*6);
		//alert(randomCol);
		//alert(firstFFP[chosenCol]);
		if (firstFFP[randomCol]<=5) {
			//alert("buona");
			return randomCol;
		}
	}

}