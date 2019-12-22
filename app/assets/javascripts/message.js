$(function(){
  function buildHTML(message){
    if (message.image.url) {
      var html = `<div class="message" data-message-id=${message.id}>
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${ message.user_name }
                      </div>
                      <div class="upper-message__date">
                        ${ message.created_at }
                      </div>
                    </div>
                    <div class="lower-message">
                      <p class="lower-message__content">
                        ${ message.content }
                      </p>
                    </div>
                    <div class="lower-message__image">
                        <img src= "${ message.image.url }">
                    </div>
                  </div>`
      return html;
    } else {
      var html = `<div class="message" data-,essage-id=${message.id}>
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${ message.user_name }
                      </div>
                      <div class="upper-message__date">
                        ${ message.created_at }
                      </div>
                    </div>
                    <div class="lower-message">
                      <p class="lower-message__content">
                        ${ message.content }
                      </p>
                    </div>
                  </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      
      var html = buildHTML(data);
      console.log(html);
      $('.chat_box').append(html);
      $('.chat_box').animate({ scrollTop: $('.chat_box')[0].scrollHeight});
      $('form')[0].reset();
      $('.form_box_submit').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    })
  })
});