class Client < ActiveRecord::Base
  mount_uploader :picture, PictureUploader
end
