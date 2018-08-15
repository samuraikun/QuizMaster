require 'rails_helper'

RSpec.describe Question, type: :model do
  describe '#check_answer' do
    let(:question) { create(:question) }

    subject { question.check_answer(answer) }

    context 'answer is correct' do
      let(:answer) { question.answer }
      let(:result) { { result: true, value: question.answer } }

      it { is_expected.to eq(result) }
    end

    context 'answer is wrong' do
      let(:answer) { 'wrong answer' }
      let(:result) { { result: false, value: question.answer } }

      it { is_expected.to eq(result) }
    end

    context 'include number in answer' do
      let(:question) { create(:question, content: 'When finished World at War Ⅱ?', answer: '1945') }

      context 'answer is number' do
        let(:answer) { '1945' }
        let(:result) { { result: true, value: question.answer } }

        it { is_expected.to eq(result) }
      end

      context 'answer is number word' do
        let(:answer) { 'One thousand nine hundred forty-five' }
        let(:result) { { result: true, value: question.answer } }

        it { is_expected.to eq(result) }
      end
    end
  end
end
