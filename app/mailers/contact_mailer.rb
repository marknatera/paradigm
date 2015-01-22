class ContactMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contact_mailer.message.subject
  #

  def message(message)
    mail(subject: "Paradigm SM Contact Form", body: message.message, recipients: CONTACT_RECIPIENT, from: message.email, sent_on: Time.now)
  end
end
