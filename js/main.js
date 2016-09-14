// var stickyNavTop = $('.main-nav').offset().top;


// $(window).on('scroll', function() {
// 	var scrollTop = $(window).scrollTop();

//   if( scrollTop >= stickyNavTop ) {
//     $('.main-nav').addClass('scrolled');
//   } else {
//     $('.main-nav').removeClass('scrolled');
//   }
// });

var images = ["../Pictures/Cuba/Cuba1.jpg","../Pictures/Cuba/Cuba2.jpg","../Pictures/Cuba/Cuba3.jpg","../Pictures/Cuba/Cuba4.jpg", "../Pictures/Cuba/Cuba5.jpg","../Pictures/Cuba/Cuba6.jpg","../Pictures/Cuba/Cuba7.jpg","../Pictures/Cuba/Cuba8.jpg","../Pictures/Cuba/Cuba9.jpg","../Pictures/Cuba/Cuba10.jpg","../Pictures/Cuba/Cuba11.jpg"];

var currentIndex = 0;


// EVENTS ---------

// Listen for click events on the next and previous buttons
// setInterval( function () { 

// 	console.log(currentIndex);


// 	if (currentIndex === images.length - 1) {
// 		currentIndex = 0;
// 	} else {
// 		currentIndex += 1;
// 	}


// 	$('#image-to-vote-on').attr('src', images[currentIndex].src);
		

// }, 3000);

$('#next').on('click', function () {
	console.log(currentIndex, images[currentIndex]);

	// Update the current position
	if (currentIndex === images.length - 1) {
		currentIndex = 0;
	} else {
		currentIndex += 1;
	}

	// Update the src attribute of the image to the url that's stored within the
	// src property for the object at the currentIndex in the array
	$('#image-to-vote-on').attr('src', images[currentIndex].src);
});

$('#prev').on('click', function () {
	console.log(currentIndex)
	

	if (currentPosition === 0 ) {
		currentPosition = images.length - 1;
	} else {
		currentPosition -= 1;
	}

	// Update the src attribute to the urls that's stored at the currentPosition in the array
	

});