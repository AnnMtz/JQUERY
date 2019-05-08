$('ul').hide()

$('.dd-button').on('click', ()=> {
	$('ul').slideDown(800);
})

$('ul li').on('click', function(e) {
	$('ul li').removeClass('active');
	e.preventDefault();
	$(this).addClass('active');
})

$('ul li').on('click', ()=> {
	$('ul').slideToggle(900)
})

// var selectedId = "#first";
const showMentor = (mentorId)=> {
	$('.info-wrapper .mentor-info').hide()
	$(mentorId).show()
}



// const showMentor = (event.target)=> {
	// var selectedMentor = $(event.target).data(first)
	// selectedMentor.show();
//}
// $(selectedId).show()

// console.log($('.info-wrapper')
// $('.container').on('click', ()=> {
// 	if()
// })




