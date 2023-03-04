class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.string :title
      t.string :details
      t.string :category
      t.integer :board_id
    end
  end
end
