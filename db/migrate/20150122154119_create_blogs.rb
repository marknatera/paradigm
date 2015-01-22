class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :picture
      t.text :body

      t.timestamps null: false
    end
  end
end
