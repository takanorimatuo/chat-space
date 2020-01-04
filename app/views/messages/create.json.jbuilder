json.id           @message.id
json.content      @message.content
json.image        @message.image.url
json.created_at   @message.created_at.strftime("%y/%m/%d %H:%M")
json.user_name    @message.user.name