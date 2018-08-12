class Question < ApplicationRecord
  # has_one :answer, dependent: :destroy

  validates :title, presence: true
  validates :content, presence: true
  validates :answer, presence: true

  def check_answer(answer_value)
    if answer_value == self.answer
      {
        result: true,
        value: self.answer
      }
    else
      {
        result: false,
        value: self.answer
      }
    end
  end
end
