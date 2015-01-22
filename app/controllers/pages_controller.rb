class PagesController < ApplicationController
  def home
  end

  respond_to :html

  def blog
    @blogs = Blog.all
    respond_with(@blogs)
  end
end
