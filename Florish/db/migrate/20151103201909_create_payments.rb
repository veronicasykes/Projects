class CreatePayments < ActiveRecord::Migration
  def change
    create_table :payments do |t|
      t.string :first_name
      t.string :last_name
      t.string :last4
      t.integer :amount
      t.boolean :success
      t.string :authorization_code

      t.timestamps
    end
  end
end
