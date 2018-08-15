class Question < ApplicationRecord
  # has_one :answer, dependent: :destroy

  validates :title, presence: true
  validates :content, presence: true
  validates :answer, presence: true

  def check_answer(answer_value)
    if answer_value.downcase == normalize_answer(answer_value).downcase
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

  private

  def normalize_answer(answer_value)
    # NOTE 解答に数字を含む かつ 回答(ユーザーの入力値)に数字を含まない
    if self.answer.match?(/\d+/) && !answer_value.match?(/\d+/)
      answer_with_number_word = convert_number_to_word

      answer_with_number_word
    else
      self.answer
    end
  end

  def convert_number_to_word
    self.answer.gsub(/\d+/, self.answer.match(/\d+/)[0].to_i.to_words)
  end
end
