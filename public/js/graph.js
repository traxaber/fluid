let average = (array) => array.reduce((a, b) => a + b) / array.length;

function showChart(){
	google.charts.load('current', {'packages':['bar']});
	google.charts.setOnLoadCallback(drawChart);
	graph.style.display = "block";
}

function drawChart() {
	chunk = Math.ceil(wpmArr.length/10)

	var graphArr = [];
	var count = 0;
	for (var i=0; i<wpmArr.length; i+=chunk){
		graphArr.push([(i/wpmArr.length*100).toFixed(0)+"%", average(wpmArr.slice(i,i+chunk))]);
	}

    var data = google.visualization.arrayToDataTable([['progress', 'WPM']].concat(graphArr));
  
    var options = {
		backgroundColor: '',
		bars: 'vertical',
		height: 300,
		legend: {position: 'none'},
		fontName: 'Inconsolata',
		colors: ['#70a9ff'],
		vAxis: {
			gridlines: {
				count: 0
			}
		}
	};
  
    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.charts.Bar(document.getElementById('graphwrapper'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}