/*$(".dd-button").on("click", (event)=>{
	console.log($(event.target))
	$(event.target).siblings("ul").slideToggle("400",()=>{
		setTimeout(()=>{
			$("#second-button").trigger("click");
		},1000)
	});
	//$(event.target).slideToggle("400");
  	//$(".custom-dd-wrapper ul")
})*/

// $(".custom-dd-wrapper").on("click",(event)=>{
// 	$(event.target).find("ul").slideToggle();
// })

// $(".list-item").click((event)=>{
// 	$(event.target).closest("ul").toggleClass("gray-background red-background")
// })

// $(".btn").click((event)=>{
// 	console.log(event.target);
// 	$(event.target).closest(".card-wrapper").fadeOut(1000,()=>{
// 		$(event.target).closest(".card-wrapper").remove()
// 	})

// })

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
	$('ul').slideToggle(2000)
})

var selectedId = "#first";
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




