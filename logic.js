$( document ).ready(function() {

	$(".dropdown-trigger").dropdown();
	$("#chart2Div").hide();

	$(".brand-logo").text('Fall 2019')

	var ctx = document.getElementById('myChart').getContext('2d');
	var chart = new Chart(ctx, {
	    // The type of chart we want to create
	    type: 'line',

	    // The data for our dataset
	    data: {
	        labels: ['Aug 15 2019', 'Sept 18 2019', 'Sept 30 2019', 'Oct 10 2019', 'Oct 11 2019', 'Oct 22 2019', 'Nov 5 2019', 'Nov 19 2019'],
	        datasets: [{
	            label: 'Mat 172',
	            borderColor: "#dd2c00",
	            pointBackgroundColor: "#dd2c00",
	            pointBorderColor: "#dd2c00",
	            data: [100, 83.79, 83.89, 83.80, 89.00, 89.42, 89.30, 90.45]
	        }]
	    },

	    // Configuration options go here
	    options: {}
	});

	var ctx2 = document.getElementById('myChart2').getContext('2d');
	var chart2 = new Chart(ctx2, {
	    // The type of chart we want to create
	    type: 'line',

	    // The data for our dataset
	    data: {
	        labels: ['Aug 15 2019', 'Aug 25 2019', 'Sept 22 2019', 'Oct 21 2019', 'Oct 26 2019', 'Nov 6 2019'],
	        datasets: [{
	            label: 'Eng 231',
	            borderColor: "#dd2c00",
	            pointBackgroundColor: "#dd2c00",
	            pointBorderColor: "#dd2c00",
	            data: [100, 96.6, 89.73, 91.19, 90.97, 90.68]
	        }]
	    },

	    // Configuration options go here
	    options: {}
	});

	displayAvg(chart);

	$(".semesterSelector").on('click', function(){
		var header = $(this).text();
		$(".brand-logo").text(header)
	})

	function displayAvg(dChart){
		let len = dChart.data.datasets[0].data.length;
		$(".avg").text(dChart.data.datasets[0].label + " Current Grade: " + dChart.data.datasets[0].data[len-1] + "%");
	}

	$(".show_right").on('click', function(){
		$("#chart1Div").show();
		$("#chart2Div").hide();
		displayAvg(chart);
	})

	$(".show_left").on('click', function(){
		$("#chart2Div").show();
		$("#chart1Div").hide();
		displayAvg(chart2);
	})

})