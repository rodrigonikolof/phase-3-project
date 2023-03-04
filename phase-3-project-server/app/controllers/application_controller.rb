class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
    get '/users' do
      User.all.to_json
    end


    post '/users' do
      user = User.create(
        name: params[:name]
      ).to_json
    end

    get '/user/:id' do
      User.find(params[:id]).boards.to_json
    end

    get '/boards/:board_id' do
      Board.find(params[:board_id]).notes.to_json
    end

    get '/notes/user/:id' do 
     Note.where(user_id: params[:id]).to_json
    end

    delete '/notes/:id' do
      Note.find(params[:id]).destroy
    end

    post '/notes' do
      # User.find(1).boards.find_by(board_name: "Work")
     note = Note.create(
      title: params[:title],
      details: params[:details],
      category: params[:category],
      board_id: params[:user]
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

    get '/boards' do
      Board.all.to_json
    end

end
