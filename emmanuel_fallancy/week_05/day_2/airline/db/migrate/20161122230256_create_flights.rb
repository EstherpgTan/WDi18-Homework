class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.text :flight_num
      t.text :origin
      t.text :destination

      t.timestamps
    end
  end
end
