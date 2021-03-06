class MessagesController < ApplicationController
  before_action :set_message, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @messages = Message.all
    respond_with(@messages)
  end

  def show
    respond_with(@message)
  end

  def new
    @message = Message.new
    respond_with(@message)
  end

  def edit
  end

  def create
    @message = Message.new(message_params)
    @message.save
    respond_with(@message, :location => request_done_path)
  end

  # respond_to do |format|
  #   if @message.save
  #     ContactMailer.message(@message).deliver
  #     format.html { redirect_to request_done_path }
  #     format.json { render :show, status: :created, location: @message }
  #   else
  #     format.html { render :new }
  #     format.json { render json: @message.errors, status: :unprocessable_entity }
  #   end
  # end


  def update
    @message.update(message_params)
    respond_with(@message)
  end

  def destroy
    @message.destroy
    respond_with(@message)
  end

  private
    def set_message
      @message = Message.find(params[:id])
    end

    def message_params
      params.require(:message).permit(:name, :email, :phone, :contact, :message)
    end
end
