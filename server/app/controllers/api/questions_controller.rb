# frozen_string_literal: true

module Api
  class QuestionsController < ApplicationController
    def index
      @questions = Question.all

      render json: @questions
    end

    def show
      @question = Question.find(params[:id])

      render json: @question
    end

    def update
      Question.find_by(params).update!(params)
    end

    def destroy
      Question.find_by(params).destroy!
    end
  end
end
