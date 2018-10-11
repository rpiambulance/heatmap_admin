$(function() {
	$.getJSON('js/locations.json', function(locations) {
		for (x = 0; x < locations.locations.length; x++) {
			var current = locations.locations[x];
			$("select").append('<option value="' + current.lat + "x" + current.lng + '">' + current.name + "</option>")
		}
		$("select").trigger("chosen:updated");
	});
});

$("#submit").click(function() {
	$("#lookgood").css("display","none");
	var data = $("#location").val();
	var count = $("#count").val();
	data = data.split("x");
	lat = data[0];
	lng = data[1];
	$.getJSON('../js/points.json', function(points) {
		for (var x = 0; x < count; x++) {
			points.points.push({"lat":parseFloat(lat),"lng":parseFloat(lng)});
		}
		$.ajax({
			url: info.uploadsite,
			method: 'post',
			data: {json: JSON.stringify(points)},
			success: function(data) {
				if (data.status = "success") {
					var name = $("#location option:selected").text();
					$(".success_location").text(name);
					$(".countnum").text(count);
					if (count != 1) {
						$(".plural").text("s");
					} else {
						$(".plural").text("");
					}
					$("#success").show();
				} else if (data.status = "failed") {
					var name = $("#location option:selected").text();
					$(".fail_location").text(name);
					$(".countnum").text(count);
					if (count =! 1) {
						$(".plural").text("s");
					} else {
						$(".plural").text("");
					}
					$("#failed").show();
				}
			}
		});
	});
});

$(".floatright").click(function() {
	$(this).parent().css("display","none");
});

$("#submit_address").click(function() {
	var address = $("#address_input").val();
	address = address.replace(/ /g, "+");
	var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + info.key;
	$.getJSON(url, function(result) {
		var lat = result.results[0].geometry.location.lat;
		var lng = result.results[0].geometry.location.lng;
		lat = lat.toPrecision(6);
		lng = lng.toPrecision(6);
		console.log(lat + " " + lng);
		var iframe = "<iframe src='https://www.google.com/maps/embed/v1/place?q=" + lat + "," + lng + "&zoom=17&key=" + info.key2 + "'></iframe>";
		$("#iframe_map").empty();
		$("#iframe_map").append(iframe);
		$("#lat").val(lat);
		$("#lng").val(lng);
		$("#failed").css("display","none");
		$("#success").css("display","none");
		$("#lookgood").show()
	});
});

$("#submit_latlng").click(function() {
	$("#lookgood").css("display","none");
	var lat = $("#lat").val();
	var lng = $("#lng").val();
	var count = $("#address_count").val();
	$.getJSON('../js/points.json', function(points) {
		for (var x = 0; x < count; x++) {
			points.points.push({"lat":parseFloat(lat),"lng":parseFloat(lng)});
		}
		$.ajax({
			url: info.uploadsite,
			method: 'post',
			data: {json: JSON.stringify(points)},
			success: function(data) {
				if (data.status = "success") {
					var name = $("#address_input").val();
					$(".success_location").text(name);
					$(".countnum").text(count);
					if (count != 1) {
						$(".plural").text("s");
					} else {
						$(".plural").text("");
					}
					$("#success").show();
				} else if (data.status = "failed") {
					var name = $("#address_input").val();
					$(".fail_location").text(name);
					$(".countnum").text(count);
					if (count =! 1) {
						$(".plural").text("s");
					} else {
						$(".plural").text("");
					}
					$("#failed").show();
				}
			}
		});
	});
});

$("#address_input").keyup(function(event){
	if(event.keyCode == 13){
		$("#submit_address").click();
	}
});
