$( document ).ready(function() {

	$(".dropdown-trigger").dropdown();

	$(".brand-logo").text('Fall 2019');

	var indexOuter = 0;
	var indexInner = 0;

	var dates = [
		[
			['Aug 15 2019', 'Sept 18 2019', 'Sept 30 2019', 'Oct 10 2019', 'Oct 11 2019', 'Oct 22 2019', 'Nov 5 2019', 'Nov 19 2019', 'Nov 26 2019', 'Dec 6 2019', 'Dec 13 2019'],
			['Aug 15 2019', 'Aug 25 2019', 'Sept 22 2019', 'Oct 21 2019', 'Oct 26 2019', 'Nov 6 2019', 'Nov 22 2019', 'Dec 2 2019', 'Dec 14 2019']
		],
		[
			['Jan 6 2020', 'Jan 15 2020', 'Jan 20 2020', 'Jan 21 2020', 'Jan 21 2020', 'Feb 2 2020', 'Feb 7 2020'],
			['Jan 6 2020', 'Jan 14 2020', 'Jan 16 2020', 'Jan 20 2020', 'Jan 21 2020', 'Jan 27 2020', 'Feb 4 2020', 'Feb 10 2020', 'Feb 11 2020', 'Feb 18 2020']
		],
		[
			['Date'],
			['Date']
		],
		[
			['Date'],
			['Date']
		],
		[
			['Date'],
			['Date']
		],
		[
			['Date'],
			['Date']
		],
		[
			['Date'],
			['Date']
		],
		[
			['Date'],
			['Date']
		],
		[
			['Date'],
			['Date']
		]
	];

	var labels = [
		[
			'Mat 172', 'Eng 231'
		],
		[	
			'Mat 271', 'Eng 232'
		], 
		[	
			'Class', 'Class'
		],
		[	
			'Class', 'Class'
		],
		[
			'Class', 'Class'
		],
		[	
			'Class', 'Class'
		], 
		[	
			'Class', 'Class'
		],
		[	
			'Class', 'Class'
		],
		[
			'Class', 'Class'
		]
	];

	var data = [
		[
			[100, 83.79, 83.89, 83.80, 89.00, 89.42, 89.30, 90.45, 90.59, 91.77, 94.27],
			[100, 96.6, 89.73, 91.19, 90.97, 90.68, 90.79, 92.47, 92.74]
		],
		[
			[100, 100, 100, 98.41, 94.7, 97.05, 96.23],
			[100, 100, 100, 96.6, 97.5, 98.33, 97.5, 94.44, 95.45, 95.83]
		],
		[
			[100],
			[100]
		],
		[
			[100],
			[100]
		],
		[
			[100],
			[100]
		],
		[
			[100],
			[100]
		],
		[
			[100],
			[100]
		],
		[
			[100],
			[100]
		],
		[
			[100],
			[100]
		]
	]

	var ctx = document.getElementById('myChart').getContext('2d');
	chartObj = {
	    // The type of chart we want to create
	    type: 'line',

	    // The data for our dataset
	    data: {
	        labels: dates[indexOuter][indexInner],
	        datasets: [{
	            label: labels[indexOuter][indexInner],
	            borderColor: "#dd2c00",
	            pointBackgroundColor: "#dd2c00",
	            pointBorderColor: "#dd2c00",
	            data: data[indexOuter][indexInner]
	        }]
	    },

	    // Configuration options go here
	    options: {} 
	}

	var chart = new Chart(ctx, chartObj);

	displayAvg(chart);

	$(".semesterSelector").on('click', function(){
		indexInner = 0;
		var header = $(this).text();
		$(".brand-logo").text(header);
		var semesterIndex = $(this).data("index");
		console.log(semesterIndex);
		indexOuter = semesterIndex;
		chartObj.data.datasets[0].label = labels[indexOuter][indexInner];
		chartObj.data.labels = dates[indexOuter][indexInner];
		chartObj.data.datasets[0].data = data[indexOuter][indexInner];
		chart = new Chart(ctx, chartObj);
		displayAvg(chart);
	})

	function displayAvg(dChart){
		let len = dChart.data.datasets[0].data.length;

		if(indexOuter < 1){

			switch (true) {
			  	case (dChart.data.datasets[0].data[len-1] >= 90): 
				 	$(".avg").text(dChart.data.datasets[0].label + " Final Grade: A"); 
				 	break;
			 	case (dChart.data.datasets[0].data[len-1] < 90 && dChart.data.datasets[0].data[len-1] >= 80): 
			  		$(".avg").text(dChart.data.datasets[0].label + " Final Grade: B"); 
			  		break;
			}

		}else{
			$(".avg").text(dChart.data.datasets[0].label + " Current Grade: " + dChart.data.datasets[0].data[len-1] + "%");
		}

	}

	$(".show_right").on('click', function(){

		if(indexInner < 1){
			indexInner++;
			chartObj.data.datasets[0].label = labels[indexOuter][indexInner];
			chartObj.data.labels = dates[indexOuter][indexInner];
			chartObj.data.datasets[0].data = data[indexOuter][indexInner];
			chart = new Chart(ctx, chartObj);
			displayAvg(chart);
		}
	})

	$(".show_left").on('click', function(){

		if(indexInner > 0){
			indexInner--;
			chartObj.data.datasets[0].label = labels[indexOuter][indexInner];
			chartObj.data.labels = dates[indexOuter][indexInner];
			chartObj.data.datasets[0].data = data[indexOuter][indexInner];
			chart = new Chart(ctx, chartObj);
			displayAvg(chart);
		}
	})

})