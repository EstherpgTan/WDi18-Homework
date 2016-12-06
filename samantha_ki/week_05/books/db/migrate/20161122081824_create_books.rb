class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.text :title
      t.text :language
      t.integer :pages
      t.text :genre
      t.text :image

      t.timestamps null: false
    end
  end
end
