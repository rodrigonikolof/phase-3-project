class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
    get '/users' do
      User.all.to_json
    end

    get '/user/:id' do
      User.find(params[:id]).boards.to_json
    end

    post '/users' do
      user = User.create(
        name: params[:name]
      )
      Board.create(board_name: 'Personal', user_id: user.id)
      Board.create(board_name: 'Work', user_id: user.id)
      user.to_json
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
      # board = User.find(1).boards.find_by(board_name: "Work")
      board_id = User.find(params[:user]).boards.find_by(board_name: params[:board]).id
     note = Note.create(
      title: params[:title],
      details: params[:details],
      category: params[:category],
      board_id: board_id
     )
    end

    

    patch '/notes/:id' do
      board_id = User.find(params[:user]).boards.find_by(board_name: params[:board]).id
      note = Note.find(params[:id])
      note.update(
        title: params[:title],
      details: params[:details],
      category: params[:category],
      board_id: board_id
      )
      note.to_json
    end

    get '/boards' do
      Board.all.to_json
    end

end
