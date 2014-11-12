$(document).ready(function(){
  // $('.course').click(function(){
  //   $(this).children('.details').toggle ();
  // });

  // $('.courses').click(function(event){
  //   if $(event.target){
  //     $(this).children('.details').toggle ();
  //   }
  // })
  $('.courses').on('click', '.course', function(event){
    if($(this).find('.details').length === 0){
      var $li = $(this);
      var details = $li.data('details');
      var template = '<div class="details">' +
      details +
      '</div>';
      $li.append(template);
    } else {
      $(this).find('.details').remove();
    }
  })

  $('.new-course input[type=submit]').click(function(){
    // From the submit button
    var $submitButton = $(this);
    // find the first input, assign its value to a variable
    var input = $submitButton.siblings('.course-input').val();
    // find the second input, assign its value to a variable
    var details = $submitButton.siblings('.course-details').val();
    //Add some html to the ul in the same format as the other list items
    var template = '<li class="course" data-details="' +
    details +
    '">' +
    input +
    '</li>';
    $('.courses').append(template);
    $submitButton.siblings('.course-input').val("");
    $submitButton.siblings('.course-details').val("");
  });
});
