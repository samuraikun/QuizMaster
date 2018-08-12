class RemoveAnswerFromQuestions < ActiveRecord::Migration[5.2]
  def up
    remove_column :questions, :answer
  end

  def down
    add_column :questions, :answer
  end
end
