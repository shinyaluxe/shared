$(function() {
    var sortOrder = 1;
    
    //when clicked
    $("th").click(function () {
		var $rows = $("tbody > tr");
		
		//sort
		$rows.sort(function(a,b) {
			var _a = $(a).find("td").text() *1;
			var _b = $(b).find("td").text() *1;
			return (_a - _b) * sortOrder;
		});
		
		//refresh row
		$('tbody').empty().append($rows);
	
		//sort otherwise
		sortOrder *= -1; 
		
		$("th > span").text("");
		
		if (sortOrder == 1) {
			$("th > span").text("▼");
		} else {
			$("th > span").text("▲");
		}
	});
});

//count
$(function() {
	var LIMIT = 30;
	var WARNING = 10;
	
	$("#count").html(LIMIT);
	
	$("#memo").keydown(function() {
		var REMAINING = LIMIT - $(this).val().length;
		$("#count").html(REMAINING);
		
		if (REMAINING <= WARNING) {
			$("#count").css("color", "red");
		} else {
			$("#count").css("color", "");
		}
	});


});

//scrollTop
$(function() {
	$("#go-to-top").hide();

	$(window).scroll(function(){		
		var pos = $(window).scrollTop();
		if (pos > 0) {
			$("#go-to-top").fadeIn();
		} else {
			$("#go-to-top").fadeOut();
		}
	});
	
	$("#go-to-top a").click(function () {
		$("body").animate({
			scrollTop: 0
		},500)
	});
});


//escape
/*$(function(){

    $(window).on('beforeunload', function() {
		
        return "このページを離れると、入力したデータが削除されます。修正の場合には、「修正ボタン」をクリックしてください。";

    });

});*/


//slideshow
$(function () {
	var thumbs = [
		"http://a.ichiba.jp.rakuten-static.com/com/img/thumb/200309/message/flash/201312/20131210_point10_195x60_03.gif",
		"http://a.ichiba.jp.rakuten-static.com/com/img/thumb/200309/message/flash/201312/20131101_toshikoshi_153_195x60.jpg",
		"http://a.ichiba.jp.rakuten-static.com/com/img/thumb/200309/message/flash/201311/20131101_xmas_48_195x60a.jpg",
		"http://a.ichiba.jp.rakuten-static.com/com/img/thumb/200309/message/flash/201311/20131101_oseibo_40_195x60.jpg"
	];
	for (i=0; i < thumbs.length; i++) {
		var img = $("<img>").attr("src",thumbs[i]).addClass("thumbs");
		var li = $("<li>").html(img);
		$(".thumbnail").append(li);
	}
	
	var currentNum = 0;
	$(".thumbs:first").addClass("current")
	
	$("#main").append(
		$("<img>").attr("src",thumbs[0])
	);
	$(".thumbs").click(function(){
		$("#main img").attr("src",$(this).attr("src"));
		currentNum = $(this).index();
		$(".thumbs").removeClass("current");		
		$(this).addClass("current");
	});
	
	$("#prev").click(function() {
		currentNum --;
		if (currentNum < 0) {
			currentNum = $(".thumbs").length - 1;
		}
		$("#main img").attr("src",thumbs[currentNum]);
		$(".thumbs").removeClass("current");		
		$(".thumbs").eq(currentNum).addClass("current");
	});
	$("#next").click(function() {
		currentNum ++;
		if (currentNum > $(".thumbs").length - 1) {
			currentNum = 0;
		}
		$("#main img").attr("src",thumbs[currentNum]);
		$(".thumbs").removeClass("current");		
		$(".thumbs").eq(currentNum).addClass("current");
	});
	function autoplay() {
		setTimeout(function () {
			$("#next").click();
			autoplay();
		}, 1500);
	}	
	$(document).ready(function() {
		autoplay();
	});
		
});

//slideshow2
/*var currentNum = 0;

$(function () {
	
	$(".thumbnail2 li img").click(function(){
		$("#main2 img").attr("src",$(this).attr("src"));
		currentNum = $(this).index()
	});
	
	$("#prev").click(function() {
		currentNum --;
		if (currentNum < 0) {
			currentNum = $(".thumbnail2 li").length - 1;
		}
		$("#main img").attr("src", $(".thumbnail2 li img").eq(currentNum).attr("src"));
	});
	$("#next").click(function() {
		currentNum ++;
		if (currentNum > $(".thumbnail2 li").length - 1) {
			currentNum = 0;
		}
		$("#main img").attr("src", $(".thumbnail2 li img").eq(currentNum).attr("src"));
	});
	
});
*/
// toushin
$(function () {
	$(document).ready(function() {
		$("#tabs li:first a").addClass("current");
	});
	$("#tabs li a").click (function() {
		if ($(this).hasClass("current") == false) {
			if ($(this).attr("href") == "#tab0") {
						alert(location.pathname);
			} else {
				alert(location.pathname + $(this).attr("href"));
			};
		};
		$("#tabs li a").removeClass("current");
		$(this).addClass("current");
	});
});


//Parallax

$(function () {
/*
	var pos1 = $("#box1").offset();
	var pos2 = $("#box2").offset();
	var pos3 = $("#box3").offset();	
	
	$(window).scroll(function(){
		var dy = $(window).scrollTop();
		if (dy < 600) {
			$("#box1").css("left", pos1.left + dy/2);
			$("#box2").css("top", pos2.top + dy/2);
			$("#box3").css("left", pos3.left + dy/3);
		};
	});
*/	
	$(window).scroll(function(){
		var dy = $(window).scrollTop();
		
		$("#img1").css({
			"position": "fixed",
			"top": dy,
			"z-index": 100
		});
		if (dy > 800) {
			$("#img2").css({
				"position": "fixed",
				"top": dy - 800,
				"z-index": 99
			});
		} else {
			$("#img2").css({
				"position": "fixed",
				"top": 0,
				"z-index": 99
			});
		};			
		if (dy > 1600) {
			$("#img3").css({
				"position": "fixed",
				"top": dy - 1600
			});
		} else {
			$("#img3").css({
				"position": "fixed",
				"top": 0
			});
		};			
	});
	
});