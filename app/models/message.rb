class Message < ActiveRecord::Base
  validates_presence_of :name, :phone, :message
  validates_format_of :email, :with => /^(\S+)@(\S+)\.(\S+)$/, :multiline => true
end
