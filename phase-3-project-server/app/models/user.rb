class User < ActiveRecord::Base
    has_many :boards
    has_many :notes, through: :boards
end