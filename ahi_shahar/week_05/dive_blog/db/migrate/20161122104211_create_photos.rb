class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.text :description
      t.text :year
      t.text :photographer
      t.text :image
      t.integer :site_id
      t.timestamps null: false
    end
  end
end
