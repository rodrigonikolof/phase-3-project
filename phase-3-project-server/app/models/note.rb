class Note < ActiveRecord::Base
    belongs_to :board
    has_one :user, through: :board
end