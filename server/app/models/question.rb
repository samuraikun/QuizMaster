class Question < ApplicationRecord
  validates :title, presence: true
  validates :content, presence: true
  validates :answer, presence: true
end
