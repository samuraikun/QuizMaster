# frozen_string_literal: true

class Answer < ApplicationRecord
  belongs_to :question

  validate :value, presence: true, length: { minimum: 1 }
end
