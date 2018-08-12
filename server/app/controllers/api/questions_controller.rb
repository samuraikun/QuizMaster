# frozen_string_literal: true

module Api
  class QuestionsController < ApplicationController
    before_action :set_question, only: %i(show update destroy)

    def index
      @questions = Question.all

      render json: @questions
    end

    def answer

    end

    def show
      render json: @question, status: :ok
    end

    def create
      @question = Question.new(question_params)

      if @question.save
        render json: @question, status: :created
      else
        render json: @question.errors, status: :bad_request
      end
    end

    def update
      if @question.update(question_params)
        render json: @question, status: :ok
      else
        render json: @question.errors, status: :bad_request
      end
    end

    def destroy
      @question.destroy!
    end

    private

    def set_question
      @question = Question.find(params[:id])
    end

    def question_params
      params.permit(:title, :content, :answer)
    end
  end
end
