$( document ).ready(function() {

	$(".dropdown-trigger").dropdown();

	$(".brand-logo").text('Fall 2019');

	var indexOuter = 0;
	var indexInner = 0;

	var dates = [
		[
			['Aug 15 2019', 'Sep 18 2019', 'Sep 30 2019', 'Oct 10 2019', 'Oct 11 2019', 'Oct 22 2019', 'Nov 5 2019', 'Nov 19 2019', 'Nov 26 2019', 'Dec 6 2019', 'Dec 13 2019'],
			['Aug 15 2019', 'Aug 25 2019', 'Sep 22 2019', 'Oct 21 2019', 'Oct 26 2019', 'Nov 6 2019', 'Nov 22 2019', 'Dec 2 2019', 'Dec 14 2019']
		],
		[
			['Jan 6 2020', 'Jan 15 2020', 'Jan 20 2020', 'Jan 21 2020', 'Jan 21 2020', 'Feb 2 2020', 'Feb 7 2020', 'Feb 24 2020', 'Mar 4 2020', 'Mar 8 2020', 'Mar 11 2020', 'Apr 6 2020', 'Apr 13 2020', 'Apr 15 2020', 'May 14 2020'],
			['Jan 6 2020', 'Jan 14 2020', 'Jan 16 2020', 'Jan 20 2020', 'Jan 21 2020', 'Jan 27 2020', 'Feb 4 2020', 'Feb 10 2020', 'Feb 11 2020', 'Feb 18 2020', 'Feb 26 2020', 'Mar 3 2020', 'Mar 5 2020', 'Mar 15 2020', 'Apr 2 2020', 'Apr 14 2020', 'Apr 20 2020', 'May 13 2020']
		],
		[
			['May 20 2020', 'Jun 2 2020', 'Jun 16 2020', 'Jun 26 2020', 'Jul 10 2020', 'Jul 25 2020']
		],
		[
			['Aug 26 2020', 'Sep 4 2020', 'Sep 13 2020', 'Sep 16 2020', 'Oct 1 2020', 'Oct 8 2020', 'Oct 22 2020', 'Nov 3 2020', 'Nov 14 2020', 'Nov 19 2020', 'Dec 1 2020', 'Dec 8 2020', 'Dec 15 2020' ]
		],
		[
			['Jan 7 2021', 'Jan 18 2021'],
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
			'Mat 272'
		],
		[	
			'Mat 273'
		],
		[
			'PHY 251'
		],
		[	
			'POL 120', 'PSY 150'
		], 
		[	
			'COM 231', 'PHY 252'
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
			[100, 100, 100, 98.41, 94.7, 97.05, 96.23, 96.44, 93.33, 93.12, 93.07, 92.9, 94.85, 94.72, 92.87],
			[100, 100, 100, 96.6, 97.5, 98.33, 97.5, 94.44, 95.45, 95.83, 98.21, 95.71, 89.99, 89.67, 89.87, 89.99, 90.11, 93.02]
		],
		[
			[100, 94.99, 91.99, 93.14, 94.98, 96.7]
		],
		[
			[100, 94.85, 84.91, 86.5, 90.07, 91.45, 90.48, 89.21, 91.17, 91.03, 91.25, 90.03, 92.27]
		],
		[
			[100, 100]
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

		if(indexOuter < 3){

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