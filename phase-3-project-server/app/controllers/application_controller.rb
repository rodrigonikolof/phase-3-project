class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
    get '/users' do
      User.all.to_json
    end

    get '/notes/user/:id' do 
      Note.where(user_id: params[:id]).to_json
    end

    delete '/notes/:id' do
      Note.find(params[:id]).destroy
    end

    post '/notes' do
     note = Note.create(
      title: params[:title],
      details: params[:details],
      category: params[:category],
      user_id: params[:user]
     )
    end

    patch '/notes/:id' do
      note = Note.find(params[:id])
      note.update(
        title: params[:title],
      details: params[:details],
      category: params[:category]
      )
      note.to_json
    end

end
