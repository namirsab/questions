function buildChartNominal(question){
	var answers = [];
	_.each(question.answers,function(answer,index){
		answers.push({name: answer.label,data: [answer.count]});
	});
	$("#chart-nominal").highcharts({
		chart: {
			type: 'column'
		},
		title: {
			text: question.title +" (Nominal)",
		},
		xAxis: {
			categories: ["Answers"],
			crosshair: true
		},
		yAxis: {
			min: 0,
			allowDecimals:false,

			title: {
				text: 'Nominal Count'
			}
		},
		tooltip: {
			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
			'<td style="padding:0"><b>{point.y} times chosen</b></td></tr>',
			footerFormat: '</table>',
			shared: true,
			useHTML: true
		},
		plotOptions: {
			column: {
				pointPadding: 0.2,
				borderWidth: 0
			}
		},
		series: answers,
	});
}

function buildChartPercentage(question){
	var answers = [];
	var totalCount = question.answered_by;
	_.each(question.answers,function(answer,index){
		answers.push({name: answer.label,data: [(answer.count/totalCount)*100]});
	});

	$("#chart-percentage").highcharts({
		chart: {
			type: 'column'
		},
		title: {
			text: question.title + " (%)"
		},
		xAxis: {
			categories: ["Answers"],
			crosshair: true
		},
		yAxis: {
			min: 0,
			allowDecimals:true,

			title: {
				text: 'Percentage(%)'
			}
		},
		tooltip: {
			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
			'<td style="padding:0"><b>{point.y:.2f} %</b></td></tr>',
			footerFormat: '</table>',
			shared: true,
			useHTML: true
		},
		plotOptions: {
			column: {
				pointPadding: 0.2,
				borderWidth: 0
			}
		},
		series: answers,
	});
}




Template.ViewQuestion.rendered = function () {
	//Create the chart
	Highcharts.charts.length = 0;
	var question = this.data.question;
	this.autorun(function(c,ViewQuestion){
		buildChartNominal(question());
		buildChartPercentage(question());
	});
	
};



Template.ViewQuestion.helpers({
});
