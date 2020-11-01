let totaleCasi = document.getElementById('totaleCasi').getContext('2d'),
	totalePositivi = document.getElementById('totalePositivi').getContext('2d'),
	percTamponiPositivi = document.getElementById('percTamponiPositivi').getContext('2d'),
	nuoviPositivi = document.getElementById('nuoviPositivi').getContext('2d'),
	casiTestati = document.getElementById('chartCasiTestati').getContext('2d'),
	tamponi = document.getElementById('chartTamponi').getContext('2d'),
	healtStatus = document.getElementById('chartHealtStatus').getContext('2d'),
	pieScreeningDiagnostico = document.getElementById('chartPieScreeningDiagnostico').getContext('2d'),
	pieHealtStatus = document.getElementById('chartPieHealtStatus').getContext('2d');

//Settimanali
let nuoviPositiviSettimanale = document.getElementById('nuoviPositivi--settimanale').getContext('2d'),
	tamponiSettimanale = document.getElementById('chartTamponi--settimanale').getContext('2d');

Chart.defaults.animation = true;
Chart.defaults.global.animation.duration = 5000;
Chart.defaults.global.legend.display = true;

function printNationalCharts() {
	let chartTotaleCasi = new Chart(totaleCasi, {
		type    : 'line',
		data    : {
			labels   : covidData['data'],
			datasets : [
				{
					label           : 'Morti',
					data            : covidData['deceduti'],
					backgroundColor : '#252525ee',
					borderColor     : '#303030'
				},
				{
					label           : 'Guariti',
					data            : covidData['dimessi_guariti'],
					backgroundColor : '#07c18088',
					borderColor     : '#efefef'
				},
				{
					label           : 'Casi Totali',
					data            : covidData['totale_casi'],
					backgroundColor : '#fda2aabb',
					borderColor     : '#fc747f'
				}
			]
		},
		options : {
			responsive          : true,
			maintainAspectRatio : false,
			elements            : {
				line : {
					tension : 0
				}
			},

			scales              : {
				xAxes : [
					{
						gridLines : {
							display    : false,
							drawBorder : false
						}
					}
				],
				yAxes : [
					{
						ticks : {
							callback : function(value) {
								return numeral(value).format('0,0');
							}
						}
					}
				]
			}
		}
	});

	let chartTotalePositivi = new Chart(totalePositivi, {
		type    : 'bar',
		data    : {
			labels   : covidData['data'],
			datasets : [
				{
					label           : 'Casi Attivi',
					data            : covidData['totale_positivi'],
					backgroundColor : function(context) {
						let index = context.dataIndex;
						let value = context.dataset.data[index];
						return value < 15000 ? '#07c180aa' : value < 50000 ? '#ff9931aa' : value < 250000 ? '#e65651aa' : value < 750000 ? '#a60a05bb' : '#303030bb';
					},
					borderColor     : function(context) {
						let index = context.dataIndex;
						let value = context.dataset.data[index];
						return value < 15000 ? '#07c180aa' : value < 50000 ? '#ff9931aa' : value < 250000 ? '#e65651aa' : value < 750000 ? '#a60a05bb' : '#303030bb';
					}
				}
			]
		},
		options : {
			responsive          : true,
			maintainAspectRatio : false,
			elements            : {
				line : {
					tension : 0
				}
			},

			scales              : {
				xAxes : [
					{
						gridLines : {
							display    : false,
							drawBorder : false
						}
					}
				],
				yAxes : [
					{
						ticks : {
							callback : function(value) {
								return numeral(value).format('0,0');
							}
						}
					}
				]
			}
		}
	});

	let chartNuoviPositivi = new Chart(nuoviPositivi, {
		type    : 'bar',
		data    : {
			labels   : covidData['data'],
			datasets : [
				{
					label           : 'Nuovi Positivi',
					data            : covidData['nuovi_positivi'],
					backgroundColor : function(context) {
						let index = context.dataIndex;
						let value = context.dataset.data[index];
						return value < 5000 ? '#07c180aa' : value < 15000 ? '#ff9931aa' : value < 30000 ? '#e65651aa' : value < 60000 ? '#a60a05bb' : '#303030bb';
					},
					borderColor     : function(context) {
						let index = context.dataIndex;
						let value = context.dataset.data[index];
						return value < 5000 ? '#07c180aa' : value < 15000 ? '#ff9931aa' : value < 30000 ? '#e65651aa' : value < 60000 ? '#a60a05bb' : '#303030bb';
					}
				}
			]
		},
		options : {
			responsive          : true,
			maintainAspectRatio : false,
			elements            : {
				line : {
					tension : 0
				}
			},

			scales              : {
				xAxes : [
					{
						gridLines : {
							display    : false,
							drawBorder : false
						}
					}
				],
				yAxes : [
					{
						ticks : {
							callback : function(value) {
								return numeral(value).format('0,0');
							}
						}
					}
				]
			}
		}
	});

	let chartPercTamponiPositivi = new Chart(percTamponiPositivi, {
		type    : 'bar',
		data    : {
			labels   : covidData['data'],
			datasets : [
				{
					label           : 'Percentuale Tamponi/Positivi',
					data            : covidData['tamponi_perc_positivi'],
					backgroundColor : function(context) {
						let index = context.dataIndex;
						let value = context.dataset.data[index];
						return value < 5 ? '#07c180aa' : value < 10 ? '#ff9931aa' : value < 15 ? '#e65651aa' : value < 25 ? '#a60a05bb' : '#303030bb';
					},
					borderColor     : function(context) {
						let index = context.dataIndex;
						let value = context.dataset.data[index];
						return value < 5 ? '#07c180aa' : value < 10 ? '#ff9931aa' : value < 20 ? '#e65651aa' : value < 30 ? '#a60a05bb' : '#303030bb';
					}
				}
			]
		},
		options : {
			responsive          : true,
			maintainAspectRatio : false,
			elements            : {
				line : {
					tension : 0
				}
			},

			scales              : {
				xAxes : [
					{
						gridLines : {
							display    : false,
							drawBorder : false
						}
					}
				],
				yAxes : [
					{
						ticks : {
							callback : function(value) {
								return value.toString() + '%';
							}
						}
					}
				]
			}
		}
	});

	let chartCasiTestati = new Chart(casiTestati, {
		type    : 'bar',
		data    : {
			labels   : covidData['data'],
			datasets : [
				{
					label           : 'Casi Testati',
					data            : covidData['casi_testati_giornalieri'],
					backgroundColor : '#1d355799',
					borderColor     : '#eaeaea'
				}
			]
		},
		options : {
			responsive          : true,
			maintainAspectRatio : false,
			elements            : {
				line : {
					tension : 0
				}
			},

			scales              : {
				xAxes : [
					{
						gridLines : {
							display    : false,
							drawBorder : false
						},
						ticks     : {
							suggestedMax : '1 Mag',
							beginAtZero  : true
						}
					}
				],
				yAxes : [
					{
						ticks : {
							callback : function(value) {
								return numeral(value).format('0,0');
							}
						}
					}
				]
			}
		}
	});

	let chartTamponi = new Chart(tamponi, {
		type    : 'bar',
		data    : {
			labels   : covidData['data'],
			datasets : [
				{
					label           : 'Tamponi',
					data            : covidData['tamponi_giornalieri'],
					backgroundColor : '#1d355799',
					borderColor     : '#eaeaea'
				}
			]
		},
		options : {
			responsive          : true,
			maintainAspectRatio : false,
			elements            : {
				line : {
					tension : 0
				}
			},

			scales              : {
				xAxes : [
					{
						gridLines : {
							display    : false,
							drawBorder : false
						}
					}
				],
				yAxes : [
					{
						ticks : {
							callback : function(value) {
								return numeral(value).format('0,0');
							}
						}
					}
				]
			}
		}
	});

	let chartHealtStatus = new Chart(healtStatus, {
		type    : 'line',
		data    : {
			labels   : covidData['data'],
			datasets : [
				{
					label           : 'In Terapia Intensiva',
					data            : covidData['terapia_intensiva'],
					backgroundColor : '#fda2aabb',
					borderColor     : '#fc747f'
				},
				{
					label           : 'Ricoverati',
					data            : covidData['ricoverati_con_sintomi'],
					backgroundColor : '#ebab51dd',
					borderColor     : '#efefef'
				},

				{
					label           : 'Isolamento Domiciliare',
					data            : covidData['isolamento_domiciliare'],
					backgroundColor : '#07c180aa',
					borderColor     : '#efefef'
				}
			]
		},
		options : {
			responsive          : true,
			maintainAspectRatio : false,
			elements            : {
				line : {
					tension : 1
				}
			},

			scales              : {
				xAxes : [
					{
						gridLines : {
							display    : false,
							drawBorder : false
						}
					}
				],
				yAxes : [
					{
						ticks : {
							callback    : function(value) {
								return numeral(value).format('0,0');
							},

							min         : 0, // it is for ignoring negative step.
							beginAtZero : true,
							stepSize    : 25000 // if i use this it always set it '1', which look very awkward if it have high value  e.g. '100'.
						}
					}
				]
			}
		}
	});

	let chartPieScreeningDiagnostico = new Chart(pieScreeningDiagnostico, {
		type    : 'pie',
		data    : {
			labels   : [ 'Screening', 'Sospetto Diagnostico' ],

			datasets : [
				{
					data            : [
						(covidData['casi_da_screening'][covidData.data.length - 1] *
							100 /
							covidData['totale_casi'][covidData.data.length - 1]).toFixed(1),
						(covidData['casi_da_sospetto_diagnostico'][covidData.data.length - 1] *
							100 /
							covidData['totale_casi'][covidData.data.length - 1]).toFixed(1)
					],
					backgroundColor : [ '#7b79eedd', '#ebab51dd' ],
					borderColor     : '#eaeaea'
				}
			]
		},
		options : {
			layout              : {
				padding : {
					left   : 0,
					right  : 0,
					top    : 0,
					bottom : 0
				}
			},
			responsive          : true,
			maintainAspectRatio : false,
			elements            : {
				line : {
					tension : 0
				}
			},

			scales              : {
				xAxes : [
					{
						display : false
					}
				],
				yAxes : [
					{
						display : false
					}
				]
			}
		}
	});

	let chartPieHealtStatus = new Chart(pieHealtStatus, {
		type    : 'pie',
		data    : {
			labels   : [ 'Isolamento', 'Ricoveri', 'Terapia Intensiva' ],

			datasets : [
				{
					data            : [
						(covidData['isolamento_domiciliare'][covidData.data.length - 1] *
							100 /
							covidData['totale_positivi'][covidData.data.length - 1]).toFixed(1),
						(covidData['ricoverati_con_sintomi'][covidData.data.length - 1] *
							100 /
							covidData['totale_positivi'][covidData.data.length - 1]).toFixed(1),
						(covidData['terapia_intensiva'][covidData.data.length - 1] *
							100 /
							covidData['totale_positivi'][covidData.data.length - 1]).toFixed(1)
					],
					backgroundColor : [ '#07c180aa', '#ebab51dd', '#e65651aa' ],
					borderColor     : '#eaeaea'
				}
			]
		},
		options : {
			layout              : {
				padding : {
					left   : 0,
					right  : 0,
					top    : 0,
					bottom : 0
				}
			},
			responsive          : true,
			maintainAspectRatio : false,
			elements            : {
				line : {
					tension : 0
				}
			},

			scales              : {
				xAxes : [
					{
						display : false
					}
				],
				yAxes : [
					{
						display : false
					}
				]
			}
		}
	});

	//SETTIMANALI
	let chartNuoviPositiviSettimanale = new Chart(nuoviPositiviSettimanale, {
		type    : 'bar',
		data    : {
			labels   : weeklyData['data'],
			datasets : [
				{
					label           : 'Nuovi Positivi',
					data            : weeklyData['nuovi_positivi'],
					backgroundColor : function(context) {
						let index = context.dataIndex;
						let value = context.dataset.data[index];
						return value < 5000 ? '#07c180aa' : value < 15000 ? '#ff9931aa' : '#e65651aa';
					},
					borderColor     : function(context) {
						let index = context.dataIndex;
						let value = context.dataset.data[index];
						return value < 5000 ? '#07c180aa' : value < 15000 ? '#ff9931aa' : '#e65651aa';
					}
				}
			]
		},
		options : {
			responsive          : true,
			maintainAspectRatio : false,
			elements            : {
				line : {
					tension : 0
				}
			},

			scales              : {
				xAxes : [
					{
						gridLines : {
							display    : false,
							drawBorder : false
						}
					}
				],
				yAxes : [
					{
						ticks : {
							callback : function(value) {
								return numeral(value).format('0,0');
							}
						}
					}
				]
			}
		}
	});

	let chartTamponiSettimanale = new Chart(tamponiSettimanale, {
		type    : 'bar',
		data    : {
			labels   : weeklyData['data'],
			datasets : [
				{
					label           : 'Tamponi',
					data            : weeklyData['tamponi_giornalieri'],
					backgroundColor : '#1d355799',
					borderColor     : '#eaeaea'
				}
			]
		},
		options : {
			responsive          : true,
			maintainAspectRatio : false,
			elements            : {
				line : {
					tension : 0
				}
			},

			scales              : {
				xAxes : [
					{
						gridLines : {
							display    : false,
							drawBorder : false
						}
					}
				],
				yAxes : [
					{
						ticks : {
							callback : function(value) {
								return numeral(value).format('0,0');
							}
						}
					}
				]
			}
		}
	});
}

function printRegionCharts() {
	let chartTotaleCasi = new Chart(totaleCasi, {
		type    : 'line',
		data    : {
			labels   : covidData['data'],
			datasets : [
				{
					label           : 'Morti',
					data            : covidData['deceduti'],
					backgroundColor : '#252525cc',
					borderColor     : '#303030'
				},
				{
					label           : 'Guariti',
					data            : covidData['dimessi_guariti'],
					backgroundColor : '#07c18088',
					borderColor     : '#efefef'
				},
				{
					label           : 'Casi Totali',
					data            : covidData['totale_casi'],
					backgroundColor : '#fda2aabb',
					borderColor     : '#fc747f'
				}
			]
		},
		options : {
			responsive          : true,
			maintainAspectRatio : false,
			elements            : {
				line : {
					tension : 0
				}
			},

			scales              : {
				xAxes : [
					{
						gridLines : {
							display    : false,
							drawBorder : false
						}
					}
				],
				yAxes : [
					{
						ticks : {
							callback : function(value) {
								return numeral(value).format('0,0');
							}
						}
					}
				]
			}
		}
	});

	let chartTotalePositivi = new Chart(totalePositivi, {
		type    : 'bar',
		data    : {
			labels   : covidData['data'],
			datasets : [
				{
					label           : 'Casi Attivi',
					data            : covidData['totale_positivi'],
					backgroundColor : function(context) {
						let index = context.dataIndex;
						let value = context.dataset.data[index];
						return value < 15000 ? '#07c180aa' : value < 30000 ? '#ff9931aa' : '#e65651aa';
					},
					borderColor     : function(context) {
						let index = context.dataIndex;
						let value = context.dataset.data[index];
						return value < 15000 ? '#07c180aa' : value < 30000 ? '#ff9931aa' : '#e65651aa';
					}
				}
			]
		},
		options : {
			responsive          : true,
			maintainAspectRatio : false,
			elements            : {
				line : {
					tension : 0
				}
			},

			scales              : {
				xAxes : [
					{
						gridLines : {
							display    : false,
							drawBorder : false
						}
					}
				],
				yAxes : [
					{
						ticks : {
							callback : function(value) {
								return numeral(value).format('0,0');
							}
						}
					}
				]
			}
		}
	});

	let chartNuoviPositivi = new Chart(nuoviPositivi, {
		type    : 'bar',
		data    : {
			labels   : covidData['data'],
			datasets : [
				{
					label           : 'Nuovi Positivi',
					data            : covidData['nuovi_positivi'],
					backgroundColor : function(context) {
						let index = context.dataIndex;
						let value = context.dataset.data[index];
						return value < 500 ? '#07c180aa' : value < 1500 ? '#ff9931aa' : '#e65651aa';
					},
					borderColor     : function(context) {
						let index = context.dataIndex;
						let value = context.dataset.data[index];
						return value < 500 ? '#07c180aa' : value < 1500 ? '#ff9931aa' : '#e65651aa';
					}
				}
			]
		},
		options : {
			responsive          : true,
			maintainAspectRatio : false,
			elements            : {
				line : {
					tension : 0
				}
			},

			scales              : {
				xAxes : [
					{
						gridLines : {
							display    : false,
							drawBorder : false
						}
					}
				],
				yAxes : [
					{
						ticks : {
							callback : function(value) {
								return numeral(value).format('0,0');
							}
						}
					}
				]
			}
		}
	});

	let chartPercTamponiPositivi = new Chart(percTamponiPositivi, {
		type    : 'bar',
		data    : {
			labels   : covidData['data'],
			datasets : [
				{
					label           : 'Percentuale Tamponi/Positivi',
					data            : covidData['tamponi_perc_positivi'],
					backgroundColor : function(context) {
						let index = context.dataIndex;
						let value = context.dataset.data[index];
						return value < 2.5 ? '#07c180aa' : value < 10 ? '#ff9931aa' : '#e65651aa';
					},
					borderColor     : function(context) {
						let index = context.dataIndex;
						let value = context.dataset.data[index];
						return value < 2.5 ? '#07c180aa' : value < 10 ? '#ff9931aa' : '#e65651aa';
					}
				}
			]
		},
		options : {
			responsive          : true,
			maintainAspectRatio : false,
			elements            : {
				line : {
					tension : 0
				}
			},

			scales              : {
				xAxes : [
					{
						gridLines : {
							display    : false,
							drawBorder : false
						}
					}
				],
				yAxes : [
					{
						ticks : {
							callback    : function(value) {
								return value.toString() + '%';
							},

							min         : 0,
							beginAtZero : true,
							stepSize    : 2.5
						}
					}
				]
			}
		}
	});

	let chartCasiTestati = new Chart(casiTestati, {
		type    : 'bar',
		data    : {
			labels   : covidData['data'],
			datasets : [
				{
					label           : 'Casi Testati',
					data            : covidData['casi_testati_giornalieri'],
					backgroundColor : '#1d355799',
					borderColor     : '#eaeaea'
				}
			]
		},
		options : {
			responsive          : true,
			maintainAspectRatio : false,
			elements            : {
				line : {
					tension : 0
				}
			},

			scales              : {
				xAxes : [
					{
						gridLines : {
							display    : false,
							drawBorder : false
						},
						ticks     : {
							suggestedMax : '1 Mag',
							beginAtZero  : true
						}
					}
				],
				yAxes : [
					{
						ticks : {
							callback : function(value) {
								return numeral(value).format('0,0');
							}
						}
					}
				]
			}
		}
	});

	let chartTamponi = new Chart(tamponi, {
		type    : 'bar',
		data    : {
			labels   : covidData['data'],
			datasets : [
				{
					label           : 'Tamponi',
					data            : covidData['tamponi_giornalieri'],
					backgroundColor : '#1d355799',
					borderColor     : '#eaeaea'
				}
			]
		},
		options : {
			responsive          : true,
			maintainAspectRatio : false,
			elements            : {
				line : {
					tension : 0
				}
			},

			scales              : {
				xAxes : [
					{
						gridLines : {
							display    : false,
							drawBorder : false
						}
					}
				],
				yAxes : [
					{
						ticks : {
							callback : function(value) {
								return numeral(value).format('0,0');
							}
						}
					}
				]
			}
		}
	});

	let chartHealtStatus = new Chart(healtStatus, {
		type    : 'line',
		data    : {
			labels   : covidData['data'],
			datasets : [
				{
					label           : 'In Terapia Intensiva',
					data            : covidData['terapia_intensiva'],
					backgroundColor : '#fda2aabb',
					borderColor     : '#fc747f'
				},
				{
					label           : 'Ricoverati',
					data            : covidData['ricoverati_con_sintomi'],
					backgroundColor : '#ebab51dd',
					borderColor     : '#efefef'
				},

				{
					label           : 'Isolamento Domiciliare',
					data            : covidData['isolamento_domiciliare'],
					backgroundColor : '#07c180aa',
					borderColor     : '#efefef'
				}
			]
		},
		options : {
			responsive          : true,
			maintainAspectRatio : false,
			elements            : {
				line : {
					tension : 1
				}
			},

			scales              : {
				xAxes : [
					{
						gridLines : {
							display    : false,
							drawBorder : false
						}
					}
				],
				yAxes : [
					{
						ticks : {
							callback    : function(value) {
								return numeral(value).format('0,0');
							},

							min         : 0, // it is for ignoring negative step.
							beginAtZero : true,
							stepSize    : 5000 // if i use this it always set it '1', which look very awkward if it have high value  e.g. '100'.
						}
					}
				]
			}
		}
	});

	let chartPieScreeningDiagnostico = new Chart(pieScreeningDiagnostico, {
		type    : 'pie',
		data    : {
			labels   : [ 'Screening', 'Sospetto Diagnostico' ],

			datasets : [
				{
					data            : [
						(covidData['casi_da_screening'][covidData.data.length - 1] *
							100 /
							covidData['totale_casi'][covidData.data.length - 1]).toFixed(1),
						(covidData['casi_da_sospetto_diagnostico'][covidData.data.length - 1] *
							100 /
							covidData['totale_casi'][covidData.data.length - 1]).toFixed(1)
					],
					backgroundColor : [ '#7b79eedd', '#ebab51dd' ],
					borderColor     : '#eaeaea'
				}
			]
		},
		options : {
			responsive          : true,
			maintainAspectRatio : false,
			elements            : {
				line : {
					tension : 0
				}
			},

			scales              : {
				xAxes : [
					{
						display : false
					}
				],
				yAxes : [
					{
						display : false
					}
				]
			}
		}
	});

	let chartPieHealtStatus = new Chart(pieHealtStatus, {
		type    : 'pie',
		data    : {
			labels   : [ 'Isolamento', 'Ricoveri', 'Terapia Intensiva' ],

			datasets : [
				{
					data            : [
						(covidData['isolamento_domiciliare'][covidData.data.length - 1] *
							100 /
							covidData['totale_positivi'][covidData.data.length - 1]).toFixed(1),
						(covidData['ricoverati_con_sintomi'][covidData.data.length - 1] *
							100 /
							covidData['totale_positivi'][covidData.data.length - 1]).toFixed(1),
						(covidData['terapia_intensiva'][covidData.data.length - 1] *
							100 /
							covidData['totale_positivi'][covidData.data.length - 1]).toFixed(1)
					],
					backgroundColor : [ '#07c180aa', '#ebab51dd', '#e65651aa' ],
					borderColor     : '#eaeaea'
				}
			]
		},
		options : {
			layout              : {
				padding : {
					left   : 0,
					right  : 0,
					top    : 0,
					bottom : 0
				}
			},
			responsive          : true,
			maintainAspectRatio : false,
			elements            : {
				line : {
					tension : 0
				}
			},

			scales              : {
				xAxes : [
					{
						display : false
					}
				],
				yAxes : [
					{
						display : false
					}
				]
			}
		}
	});

	//SETTIMANALI
	let chartNuoviPositiviSettimanale = new Chart(nuoviPositiviSettimanale, {
		type    : 'bar',
		data    : {
			labels   : weeklyData['data'],
			datasets : [
				{
					label           : 'Nuovi Positivi',
					data            : weeklyData['nuovi_positivi'],
					backgroundColor : function(context) {
						let index = context.dataIndex;
						let value = context.dataset.data[index];
						return value < 5000 ? '#07c180aa' : value < 15000 ? '#ff9931aa' : '#e65651aa';
					},
					borderColor     : function(context) {
						let index = context.dataIndex;
						let value = context.dataset.data[index];
						return value < 5000 ? '#07c180aa' : value < 15000 ? '#ff9931aa' : '#e65651aa';
					}
				}
			]
		},
		options : {
			responsive          : true,
			maintainAspectRatio : false,
			elements            : {
				line : {
					tension : 0
				}
			},

			scales              : {
				xAxes : [
					{
						gridLines : {
							display    : false,
							drawBorder : false
						}
					}
				],
				yAxes : [
					{
						ticks : {
							callback : function(value) {
								return numeral(value).format('0,0');
							}
						}
					}
				]
			}
		}
	});

	let chartTamponiSettimanale = new Chart(tamponiSettimanale, {
		type    : 'bar',
		data    : {
			labels   : weeklyData['data'],
			datasets : [
				{
					label           : 'Tamponi',
					data            : weeklyData['tamponi_giornalieri'],
					backgroundColor : '#1d355799',
					borderColor     : '#eaeaea'
				}
			]
		},
		options : {
			responsive          : true,
			maintainAspectRatio : false,
			elements            : {
				line : {
					tension : 0
				}
			},

			scales              : {
				xAxes : [
					{
						gridLines : {
							display    : false,
							drawBorder : false
						}
					}
				],
				yAxes : [
					{
						ticks : {
							callback : function(value) {
								return numeral(value).format('0,0');
							}
						}
					}
				]
			}
		}
	});
}
