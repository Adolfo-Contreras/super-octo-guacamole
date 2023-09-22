//wrap everything in a .ready()
$(document).ready(function(){
    // let count = 0;
    //     do{
    //         $('#comments').addClass('commentContainer')
    //         $('#comments').removeClass('hidden')        
    //         count++
    //     }while (count<1)
// a function that lets you submit a comment that is then prepended
$('#submitComment').on('click mouseenter mouseleave',function(e){
    if(e.type === 'click'){
    //comment variable
    let newComment = $("<div class='comment'><img src='abstract-user-flat-1.svg' alt='Abstract Profile of a Person' class='pfp'><div class='commentData'><h5 class='username'>Anonymous</h5><div class='editButton'>Edit</div><div class='deleteButton'>Delete</div> </div><div class='commentText'>    <p class='commentorText'> </p> </div> <div class='editing hidden'>     <input type='text' placeholder='Make an Edit' class='MakeEdit'>    <div class='submitEdit'>Submit</div> </div></div>");
    //check for commentors text
    let CommentInput = $('#commentInput').val();
    if(CommentInput){
        newComment.find('.commentorText').text($('#commentInput').val());
        //check for commentor username
        let NameInput = $('#nameInput').val() ;
        if(NameInput){
        newComment.find('.username').text($('#nameInput').val());
            }
    //make the comment
    $('.commentContainer').prepend(newComment);
    }else {
        alert('OI! MAKE A COMMENT >:(');
    }
    }
    //highlight submit button
    if(e.type === 'mouseenter'){
        $('#submitComment').toggleClass('buttonHighlight');
    }
    if(e.type === 'mouseleave'){
        $('#submitComment').toggleClass('buttonHighlight');
    }
});
//the delete comment button also some dude on stack overflow recommended .closest and from my understanding it is going from the .deleteButton and finding the closest .comment which is its direct ancestor and yes i went to go find a post that can solve my problem and not just straight up ask
$('.commentContainer').on('click mouseenter mouseleave','.deleteButton', function(event){
    if(event.type === 'click'){
        $(this).closest('.comment').remove();
    }
    if(event.type === 'mouseenter'){
        $(this).closest('.deleteButton').toggleClass('buttonHighlight');
    }
    if(event.type === 'mouseleave'){
        $(this).closest('.deleteButton').toggleClass('buttonHighlight');
    }
});
//the edit button also i love the .siblings it made this so much easier thanks random stack overflow guy
$('.commentContainer').on('click mouseenter mouseleave','.editButton', function(e){
    if(e.type === 'click'){
    let editInput = $(this).parent().siblings('.editing').children()[0];
    let currentText = $(this).parent().siblings('.commentText').children().text();
    $(editInput).val(`${currentText}`);
    $(this).parent().siblings('.editing').removeClass('hidden');
    }
    if(e.type === 'mouseenter'){
        $(this).closest('.editButton').toggleClass('buttonHighlight');
    }
    if(e.type === 'mouseleave'){
        $(this).closest('.editButton').toggleClass('buttonHighlight');
    }
});
//edit submit button
$('.commentContainer').on('click mouseenter mouseleave','.submitEdit',function(e){
    if(e.type === 'click'){
    let editVal = $(this).siblings('.MakeEdit').val();
    if(!editVal){ // i flipped a coin on if there is no value it will either delete the comment or make no change and the delete was heads change was tails so you know what happened
        $(this).closest('.comment').remove();
    }
    else {
    $(this).parent().siblings('.commentText').children().text(`${editVal}`);
    }
    $(this).parent('.editing').addClass('hidden');
    }
    if(e.type === 'mouseenter'){
        $(this).closest('.submitEdit').toggleClass('buttonHighlight');
    }
    if(e.type === 'mouseleave'){
        $(this).closest('.submitEdit').toggleClass('buttonHighlight');
    }
});
}); ///END OF READY
