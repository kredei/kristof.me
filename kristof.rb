require 'sinatra'

get '/' do
  erb :index
end

get '/resume' do
  erb :resume
end

get '/intro' do
  erb :intro
end

get '/code' do
  erb :code
end
