class HomeController < ApplicationController

  def index

  end

  def download
    send_file Rails.root.to_s+'/app/assets/documents/Resume.pdf', :type=>"application/pdf" 
  end
end
