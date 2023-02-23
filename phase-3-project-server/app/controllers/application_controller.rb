class ApplicationController < Sinatra::Base
  # set :default_content_type, 'application/json'
  
  # Add routes

  get '/' do
    "HELLO WORLD!!!"
  end

  get '/users' do
    User.all.to_json
  end

end
