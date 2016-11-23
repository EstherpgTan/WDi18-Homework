class CreateSites < ActiveRecord::Migration
  def change
    create_table :sites do |t|
      t.text :name
      t.text :location
      t.text :tide
      t.text :level
      t.text :depth
      t.text :image

      t.timestamps null: false
    end
  end
end
