class PagesController < ApplicationController
  def home
      @clients = Client.order("id DESC").first(3)
  end

  respond_to :html

  def blog
    @blogs = Blog.all
    respond_with(@blogs)
  end
end
