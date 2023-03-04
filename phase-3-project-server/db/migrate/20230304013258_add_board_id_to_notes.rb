class AddBoardIdToNotes < ActiveRecord::Migration[6.1]
  def change
    add_column :notes, :board_id, :integer
  end
end
