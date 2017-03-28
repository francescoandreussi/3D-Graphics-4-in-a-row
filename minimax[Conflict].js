//var SEARCH_DEPTH = 4;

function evaluator( conf, player ){
	var score = 0;
	var COEFF = 10;
	for (var row = 0; row < 6; row++) {
		for (var col = 0; col < 7; col++) {
			if (conf[row][col] == player) {
				score++;
				if (row < 3 && col < 3) {
					if (conf[row][col+1] != player*(-1) && conf[row][col+2] != player*(-1) && conf[row][col+3] != player*(-1)) {
						var incr = 1;
						if (conf[row][col+1] == player) { incr *= 10; }
						if (conf[row][col+2] == player) { incr *= 10; }
						if (conf[row][col+3] == player) { incr *= 10; }
						if (incr > 1) { score += incr; }
					}
					if (conf[row+1][col+1] != player*(-1) && conf[row+2][col+2] != player*(-1) && conf[row+3][col+3] != player*(-1)) {
						var incr = 1;
						if (conf[row+1][col+1] == player) { incr *= 10; }
						if (conf[row+2][col+2] == player) { incr *= 10; }
						if (conf[row+3][col+3] == player) { incr *= 10; }
						if (incr > 1) { score += incr; }
					}
					if (conf[row+1][col] != player*(-1) && conf[row+2][col] != player*(-1) && conf[row+3][col] != player*(-1)) {
						var incr = 1;
						if (conf[row+1][col] == player) { incr *= 10; }
						if (conf[row+2][col] == player) { incr *= 10; }
						if (conf[row+3][col] == player) { incr *= 10; }
						if (incr > 1) { score += incr; }
					}
				} else if (row <  3 && col == 3) {
					if (conf[row][col+1] != player*(-1) && conf[row][col+2] != player*(-1) && conf[row][col+3] != player*(-1)) {
						var incr = 1;
						if (conf[row][col+1] == player) { incr *= 10; }
						if (conf[row][col+2] == player) { incr *= 10; }
						if (conf[row][col+3] == player) { incr *= 10; }
						if (incr > 1) { score += incr; }
					}
					if (conf[row+1][col+1] != player*(-1) && conf[row+2][col+2] != player*(-1) && conf[row+3][col+3] != player*(-1)) {
						var incr = 1;
						if (conf[row+1][col+1] == player) { incr *= 10; }
						if (conf[row+2][col+2] == player) { incr *= 10; }
						if (conf[row+3][col+3] == player) { incr *= 10; }
						if (incr > 1) { score += incr; }
					}
					if (conf[row+1][col] != player*(-1) && conf[row+2][col] != player*(-1) && conf[row+3][col] != player*(-1)) {
						var incr = 1;
						if (conf[row+1][col] == player) { incr *= 10; }
						if (conf[row+2][col] == player) { incr *= 10; }
						if (conf[row+3][col] == player) { incr *= 10; }
						if (incr > 1) { score += incr; }
					}
					if (conf[row][col-1] != player*(-1) && conf[row][col-2] != player*(-1) && conf[row][col-3] != player*(-1)) {
						var incr = 1;
						if (conf[row][col-1] == player) { incr *= 10; }
						if (conf[row][col-2] == player) { incr *= 10; }
						if (conf[row][col-3] == player) { incr *= 10; }
						if (incr > 1) { score += incr; }
					}
					if (conf[row+1][col-1] != player*(-1) && conf[row+2][col-2] != player*(-1) && conf[row+3][col-3] != player*(-1)) {
						var incr = 1;
						if (conf[row+1][col-1] == player) { incr *= 10; }
						if (conf[row+2][col-2] == player) { incr *= 10; }
						if (conf[row+3][col-3] == player) { incr *= 10; }
						if (incr > 1) { score += incr; }
					}
				} else if (row <  3 && col >  3) {
					if (conf[row+1][col] != player*(-1) && conf[row+2][col] != player*(-1) && conf[row+3][col] != player*(-1)) {
						var incr = 1;
						if (conf[row+1][col] == player) { incr *= 10; }
						if (conf[row+2][col] == player) { incr *= 10; }
						if (conf[row+3][col] == player) { incr *= 10; }
						if (incr > 1) { score += incr; }
					}
					if (conf[row][col-1] != player*(-1) && conf[row][col-2] != player*(-1) && conf[row][col-3] != player*(-1)) {
						var incr = 1;
						if (conf[row][col-1] == player) { incr *= 10; }
						if (conf[row][col-2] == player) { incr *= 10; }
						if (conf[row][col-3] == player) { incr *= 10; }
						if (incr > 1) { score += incr; }
					}
					if (conf[row+1][col-1] != player*(-1) && conf[row+2][col-2] != player*(-1) && conf[row+3][col-3] != player*(-1)) {
						var incr = 1;
						if (conf[row+1][col-1] == player) { incr *= 10; }
						if (conf[row+2][col-2] == player) { incr *= 10; }
						if (conf[row+3][col-3] == player) { incr *= 10; }
						if (incr > 1) { score += incr; }
					}
				} else if (row >= 3 && col <  3) {
					if (conf[row][col+1] != player*(-1) && conf[row][col+2] != player*(-1) && conf[row][col+3] != player*(-1)) {
						var incr = 1;
						if (conf[row][col+1] == player) { incr *= 10; }
						if (conf[row][col+2] == player) { incr *= 10; }
						if (conf[row][col+3] == player) { incr *= 10; }
						if (incr > 1) { score += incr; }
					}
					if (conf[row-1][col+1] != player*(-1) && conf[row-2][col+2] != player*(-1) && conf[row-3][col+3] != player*(-1)) {
						var incr = 1;
						if (conf[row-1][col+1] == player) { incr *= 10; }
						if (conf[row-2][col+2] == player) { incr *= 10; }
						if (conf[row-3][col+3] == player) { incr *= 10; }
						if (incr > 1) { score += incr; }
					}
					if (conf[row-1][col] != player*(-1) && conf[row-2][col] != player*(-1) && conf[row-3][col] != player*(-1)) {
						var incr = 1;
						if (conf[row-1][col] == player) { incr *= 10; }
						if (conf[row-2][col] == player) { incr *= 10; }
						if (conf[row-3][col] == player) { incr *= 10; }
						if (incr > 1) { score += incr; }
					}
				} else if (row >= 3 && col == 3) {
					if (conf[row][col+1] != player*(-1) && conf[row][col+2] != player*(-1) && conf[row][col+3] != player*(-1)) {
						var incr = 1;
						if (conf[row][col+1] == player) { incr *= 10; }
						if (conf[row][col+2] == player) { incr *= 10; }
						if (conf[row][col+3] == player) { incr *= 10; }
						if (incr > 1) { score += incr; }
					}
					if (conf[row-1][col+1] != player*(-1) && conf[row-2][col+2] != player*(-1) && conf[row-3][col+3] != player*(-1)) {
						var incr = 1;
						if (conf[row+1][col+1] == player) { incr *= 10; }
						if (conf[row+2][col+2] == player) { incr *= 10; }
						if (conf[row+3][col+3] == player) { incr *= 10; }
						if (incr > 1) { score += incr; }
					}
					if (conf[row-1][col] != player*(-1) && conf[row-2][col] != player*(-1) && conf[row-3][col] != player*(-1)) {
						var incr = 1;
						if (conf[row-1][col] == player) { incr *= 10; }
						if (conf[row-2][col] == player) { incr *= 10; }
						if (conf[row-3][col] == player) { incr *= 10; }
						if (incr > 1) { score += incr; }
					}
					if (conf[row][col-1] != player*(-1) && conf[row][col-2] != player*(-1) && conf[row][col-3] != player*(-1)) {
						var incr = 1;
						if (conf[row][col-1] == player) { incr *= 10; }
						if (conf[row][col-2] == player) { incr *= 10; }
						if (conf[row][col-3] == player) { incr *= 10; }
						if (incr > 1) { score += incr; }
					}
					if (conf[row-1][col-1] != player*(-1) && conf[row-2][col-2] != player*(-1) && conf[row-3][col-3] != player*(-1)) {
						var incr = 1;
						if (conf[row-1][col-1] == player) { incr *= 10; }
						if (conf[row-2][col-2] == player) { incr *= 10; }
						if (conf[row-3][col-3] == player) { incr *= 10; }
						if (incr > 1) { score += incr; }
					}
				} else if (row >= 3 && col >  3) {
					if (conf[row-1][col] != player*(-1) && conf[row-2][col] != player*(-1) && conf[row-3][col] != player*(-1)) {
						var incr = 1;
						if (conf[row-1][col] == player) { incr *= 10; }
						if (conf[row-2][col] == player) { incr *= 10; }
						if (conf[row-3][col] == player) { incr *= 10; }
						if (incr > 1) { score += incr; }
					}
					if (conf[row][col-1] != player*(-1) && conf[row][col-2] != player*(-1) && conf[row][col-3] != player*(-1)) {
						var incr = 1;
						if (conf[row][col-1] == player) { incr *= 10; }
						if (conf[row][col-2] == player) { incr *= 10; }
						if (conf[row][col-3] == player) { incr *= 10; }
						if (incr > 1) { score += incr; }
					}
					if (conf[row-1][col-1] != player*(-1) && conf[row-2][col-2] != player*(-1) && conf[row-3][col-3] != player*(-1)) {
						var incr = 1;
						if (conf[row-1][col-1] == player) { incr *= 10; }
						if (conf[row-2][col-2] == player) { incr *= 10; }
						if (conf[row-3][col-3] == player) { incr *= 10; }
						if (incr > 1) { score += incr; }
					}
				} else {
					alert("ERROR in evaluation");
				}
			}
		}
	}

	//var eval = new Array(6);

	/*for (var i = 0; i < 6; i++) {
		eval[i] = new Array(7);
		for (var j = 0; j < 7; j++) {
			eval[i][j] = new Array(9);
			for (var k = 0; k < 9; k++) {
					if (conf[i][j] == player) {
						eval[i][j][k] = 1; // inizializzo il valore della direzione della cella a 1
					}
			}
		}
	}

	//alert("Sono l'evaluator");
	//alert(player);
	//alert(conf);

	for (var i = 0; i < 6; i++) {
		for (var j = 0; j < 7; j++) {
			//for (var k = 0; k < 9; k++) {
				//alert(conf[i][j] == player);
				if( conf[i][j] == player ){
					if ( i <= 2 && j <= 2 ) {
						//se la direzione mi portasse fuori dalla matrice metto 0 a tale direzione
						eval[i][j][0] = 0; eval[i][j][1] = 0; eval[i][j][2] = 0; eval[i][j][3] = 0; eval[i][j][6] = 0;
						for (var n = 1; n < 4; n++) {
							//se trovo una cella nella direzione osservata dove c'è una pedina avversaria metto 0 alla direzione
							//sennò moltiplico il valore di eval per tale cella-direzione per COEFF elevato al valore (assoluto) della cella di conf
							//che vedo cosicchè se c'è 0 (cella vuota) moltiplico per 1 se c'è una tessera di player (1 o -1) moltiplico per 10
							if (conf[i+n][j+n] == player*(-1)) {
								eval[i][j][8] = 0;
							} else {
								eval[i][j][8] *= Math.pow(COEFF,Math.abs(conf[i+n][j+n]));
							}
							if (conf[i+n][j  ] == player*(-1)) {
								eval[i][j][7] = 0;
							} else {
								eval[i][j][7] *= Math.pow(COEFF,Math.abs(conf[i+n][j  ]));
							}
							if (conf[i  ][j+n] == player*(-1)) {
								eval[i][j][5] = 0;
							} else {
								eval[i][j][5] *= Math.pow(COEFF,Math.abs(conf[i  ][j+n]));
							}
						}
						//alert(conf);
						//alert(eval[i][j]);
					} else if( i <= 2 && j == 3 ){
						//se la direzione mi portasse fuori dalla matrice metto 0 a tale direzione
						eval[i][j][0] = 0; eval[i][j][1] = 0; eval[i][j][2] = 0; eval[i][j][5] = 0; eval[i][j][8] = 0;
						for (var n = 1; n < 4; n++) {
							//se trovo una cella nella direzione osservata dove c'è una pedina avversaria metto 0 alla direzione
							//sennò moltiplico il valore di eval per tale cella-direzione per COEFF elevato al valore (assoluto) della cella di conf
							//che vedo cosicchè se c'è 0 (cella vuota) moltiplico per 1 se c'è una tessera di player (1 o -1) moltiplico per 10
							if (conf[i+n][j  ] == player*(-1)) {
								eval[i][j][7] = 0;
							} else {
								eval[i][j][7] *= Math.pow(COEFF,Math.abs(conf[i+n][j  ]));
							}
							if (conf[i  ][j-n] == player*(-1)) {
								eval[i][j][3] = 0;
							} else {
								eval[i][j][3] *= Math.pow(COEFF,Math.abs(conf[i  ][j-n]));
							}
							if (conf[i+n][j-n] == player*(-1)) {
								eval[i][j][6] = 0;
							} else {
								eval[i][j][6] *= Math.pow(COEFF,Math.abs(conf[i+n][j-n]));
							}
						}
					} else if( i <= 2 && j >= 4 ){
						//se la direzione mi portasse fuori dalla matrice metto 0 a tale direzione
						eval[i][j][0] = 0; eval[i][j][1] = 0; eval[i][j][2] = 0;
						for (var n = 1; n < 4; n++) {
							//se trovo una cella nella direzione osservata dove c'è una pedina avversaria metto 0 alla direzione
							//sennò moltiplico il valore di eval per tale cella-direzione per COEFF elevato al valore (assoluto) della cella di conf
							//che vedo cosicchè se c'è 0 (cella vuota) moltiplico per 1 se c'è una tessera di player (1 o -1) moltiplico per 10
							if (conf[i+n][j+n] == player*(-1)) {
								eval[i][j][8] = 0;
							} else {
								eval[i][j][8] *= Math.pow(COEFF,Math.abs(conf[i+n][j+n]));
							}
							if (conf[i+n][j  ] == player*(-1)) {
								eval[i][j][7] = 0;
							} else {
								eval[i][j][7] *= Math.pow(COEFF,Math.abs(conf[i+n][j  ]));
							}
							if (conf[i  ][j+n] == player*(-1)) {
								eval[i][j][5] = 0;
							} else {
								eval[i][j][5] *= Math.pow(COEFF,Math.abs(conf[i  ][j+n]));
							}
							if (conf[i  ][j-n] == player*(-1)) {
								eval[i][j][3] = 0;
							} else {
								eval[i][j][3] *= Math.pow(COEFF,Math.abs(conf[i  ][j-n]));
							}
							if (conf[i+n][j-n] == player*(-1)) {
								eval[i][j][6] = 0;
							} else {
								eval[i][j][6] *= Math.pow(COEFF,Math.abs(conf[i+n][j-n]));
							}
						}
					} else if( i >= 3 && j <= 2 ) {
						//se la direzione mi portasse fuori dalla matrice metto 0 a tale direzione
						eval[i][j][6] = 0; eval[i][j][7] = 0; eval[i][j][8] = 0; eval[i][j][3] = 0; eval[i][j][0] = 0;
						for (var n = 1; n < 4; n++) {
							//se trovo una cella nella direzione osservata dove c'è una pedina avversaria metto 0 alla direzione
							//sennò moltiplico il valore di eval per tale cella-direzione per COEFF elevato al valore (assoluto) della cella di conf
							//che vedo cosicchè se c'è 0 (cella vuota) moltiplico per 1 se c'è una tessera di player (1 o -1) moltiplico per 10
							if (conf[i-n][j+n] == player*(-1)) {
								eval[i][j][2] = 0;
							} else {
								eval[i][j][2] *= Math.pow(COEFF,Math.abs(conf[i-n][j+n]));
							}
							if (conf[i-n][j  ] == player*(-1)) {
								eval[i][j][1] = 0;
							} else {
								eval[i][j][1] *= Math.pow(COEFF,Math.abs(conf[i-n][j  ]));
							}
							if (conf[i  ][j+n] == player*(-1)) {
								eval[i][j][5] = 0;
							} else {
								eval[i][j][5] *= Math.pow(COEFF,Math.abs(conf[i  ][j+n]));
							}
						}
					} else if( i >= 3 && j == 3 ){
						//se la direzione mi portasse fuori dalla matrice metto 0 a tale direzione
						eval[i][j][6] = 0; eval[i][j][7] = 0; eval[i][j][8] = 0;
						for (var n = 1; n < 4; n++) {
							//se trovo una cella nella direzione osservata dove c'è una pedina avversaria metto 0 alla direzione
							//sennò moltiplico il valore di eval per tale cella-direzione per COEFF elevato al valore (assoluto) della cella di conf
							//che vedo cosicchè se c'è 0 (cella vuota) moltiplico per 1 se c'è una tessera di player (1 o -1) moltiplico per 10
							if (conf[i-n][j+n] == player*(-1)) {
								eval[i][j][2] = 0;
							} else {
								eval[i][j][2] *= Math.pow(COEFF,Math.abs(conf[i-n][j+n]));
							}
							if (conf[i-n][j  ] == player*(-1)) {
								eval[i][j][1] = 0;
							} else {
								eval[i][j][1] *= Math.pow(COEFF,Math.abs(conf[i-n][j  ]));
							}
							if (conf[i  ][j+n] == player*(-1)) {
								eval[i][j][5] = 0;
							} else {
								eval[i][j][5] *= Math.pow(COEFF,Math.abs(conf[i  ][j+n]));
							}
							if (conf[i-n][j-n] == player*(-1)) {
								eval[i][j][0] = 0;
							} else {
								eval[i][j][0] *= Math.pow(COEFF,Math.abs(conf[i-n][j-n]));
							}
							if (conf[i  ][j-n] == player*(-1)) {
								eval[i][j][3] = 0;
							} else {
								eval[i][j][3] *= Math.pow(COEFF,Math.abs(conf[i  ][j-n]));
							}
						}
					} else if( i >= 3 && j >= 4 ){
						//se la direzione mi portasse fuori dalla matrice metto 0 a tale direzione
						eval[i][j][6] = 0; eval[i][j][7] = 0; eval[i][j][8] = 0; eval[i][j][5] = 0; eval[i][j][2] = 0;
						for (var n = 1; n < 4; n++) {
							//se trovo una cella nella direzione osservata dove c'è una pedina avversaria metto 0 alla direzione
							//sennò moltiplico il valore di eval per tale cella-direzione per COEFF elevato al valore (assoluto) della cella di conf
							//che vedo cosicchè se c'è 0 (cella vuota) moltiplico per 1 se c'è una tessera di player (1 o -1) moltiplico per 10
							if (conf[i-n][j  ] == player*(-1)) {
								eval[i][j][1] = 0;
							} else {
								eval[i][j][1] *= Math.pow(COEFF,Math.abs(conf[i-n][j  ]));
							}
							if (conf[i-n][j-n] == player*(-1)) {
								eval[i][j][0] = 0;
							} else {
								eval[i][j][0] *= Math.pow(COEFF,Math.abs(conf[i-n][j-n]));
							}
							if (conf[i  ][j-n] == player*(-1)) {
								eval[i][j][3] = 0;
							} else {
								eval[i][j][3] *= Math.pow(COEFF,Math.abs(conf[i  ][j-n]));
							}
						}
						score += eval[i][j][k];
					} else {
						alert("Error on conf evaluation!");
					}
					//alert("Sono l'evaluator");
					//alert(eval[i][j]);
				//}
			}
		}
	}*/
	//alert("evaluator");
	//alert(score);
	return score;
}

/*function minimax ( searchDepth, maxDepth, curPl, curConf, curFFP ){
	var configs = new Array( 7 );
	var ffps = new Array( 7 );
	if ( searchDepth > 0 ) {
		if (searchDepth % 2 == 0) {
			for (var i = 0; i < 7; i++) {
				configs[i] = new Array( 6 );
				for (var row = 0; row < 6; row++) {
					configs[i][row] = new Array( 7 );
					ffps[i] = new Array( 7 );
					for (var col = 0; col < 7; col++) {
						if ( i==col && curFFP[i]==row ) {
							configs[i][row][col] = curPl;
						} else {
							configs[i][row][col] = curConf[row][col];
						}
						if (i==col) {
							ffps[i][col] = curFFP[col] + 1;
						} else {
							ffps[i][col] = curFFP[col];
						}
					}
				}
			}
		} else {
			for (var i = 0; i < 7; i++) {
				configs[i] = new Array( 6 );
				for (var row = 0; row < 6; row++) {
					configs[i][row] = new Array( 7 );
					ffps[i] = new Array( 7 );
					for (var col = 0; col < 7; col++) {
						if ( i==col && curFFP[i]==row ) {
							configs[i][row][col] = curPl*(-1);
						} else {
							configs[i][row][col] = curConf[row][col];
						}
						if (i==col) {
							ffps[i][col] = curFFP[col] + 1;
						} else {
							ffps[i][col] = curFFP[col];
						}
					}
				}
			}
		}
		//alert(configs);
		//alert(ffps);
		var vals = new Array( 7 );
		for (var i = 0; i < 7; i++) {
			vals[i] = minimax( searchDepth-1, curPl, configs[i], ffps[i] );
		}
		if ( searchDepth == maxDepth ) {
			//alert(vals);
			var supp = vals;
			supp.sort();
			//alert(vals.indexOf( supp[6] ));
			return vals.indexOf( supp[6] );
		} else if ( searchDepth % 2 == 0 && searchDepth < SEARCH_DEPTH ) {
			//alert(vals);
			var supp = vals;
			supp.sort();
			//alert(vals.indexOf( supp[6] ));
			return vals.indexOf( supp[6] );
		} else {
			//alert(vals);
			var supp = vals;
			supp.sort();
			//alert(vals.indexOf( supp[0] ));
			return vals.indexOf( supp[0] );
		}
	}
	return evaluator(curConf,curPl);
}*/

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
			vals.sort();
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
			//scelgo il max
			vals.sort();
			return vals[0];
		}
		
		
	} else {
		//valuto la config che mi arriva
		alert(curConfig);
		//alert(player);
		alert(evaluator(curConfig,player));
		return evaluator(curConfig,player);
	}
	//return Math.trunc(Math.random());
}

function move( searchDepth, firstPlayer, firstConfig, firstFFP ) {
	var vals = new Array( 7 );
	for (var i = 0; i < 7; i++) {
		vals[i] = minimax( searchDepth, searchDepth, firstPlayer, firstConfig, firstFFP );
	}
	//alert(vals);
	var supp = new Array( 7 );
	for (var i = 0; i < 7; i++) {
		supp[i] = vals[i];
	}
	supp.sort();
	//alert(vals.indexOf( supp[6] ));
	return vals.indexOf( supp[6] );
}