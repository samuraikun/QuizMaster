require "rails_helper"

RSpec.describe 'Questions', type: :request do
  let(:question) { create(:question) }

  describe 'GET /api/questions' do
    let(:questions) { Question.all.to_json }

    before do
      create(:question)
    end

    subject { get '/api/questions', headers: { CONTENT_TYPE: 'application/json', ACCEPT: 'application/json' } }

    specify do
      subject

      expect(response.status).to eq(200)
      expect(response.body).to eq(questions)
    end
  end

  describe 'GET /api/questions/:id' do
    let(:question) { create(:question) }

    subject { get "/api/questions/#{question.id}" }

    specify do
      subject

      expect(response.status).to eq(200)
      expect(response.body).to eq(question.to_json)
    end
  end

  describe 'POST /api/questions' do
    subject { post '/api/questions', params: params }

    context 'params is valid' do
      let(:params) { {title: 'Question1', content: 'Are you Programmer?', answer: 'Yes'} }

      specify do
        subject

        expect(response.status).to eq(201)
        expect(response.body).to be_present
      end
    end

    context 'params is invalid' do
      let(:params) { {tilte: 'Question2', content: 'Where are you from?', answer: ''} }

      specify do
        subject

        expect(response.status).to eq(400)
      end
    end
  end

  describe 'PUT /api/questions' do
    let(:question) { create(:question) }

    subject { put "/api/questions/#{question.id}", params: params }

    context 'update success' do
      let(:params) { {title: 'Question1', content: 'Who did you create Python language?', answer: 'Guido Van Rossum'} }

      specify do
        subject

        expect(response.status).to eq(200)
        expect(response.body).to be_present
      end
    end
  end

  describe 'DELETE /api/questions' do
    let(:question) { create(:question) }

    subject { delete "/api/questions/#{question.id}" }

    specify do
      expect(Question.count).to eq(0)
    end
  end
end