# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Question.delete_all
Question.create!([
  {title: 'Question1', content: 'Who did you create Ruby language?', answer: 'Matz'},
  {title: 'Question2', content: 'Who did you create Python language?', answer: 'Guido Van Rossum'},
  {title: 'Question3', content: 'When was the year finished World at War Ⅱ ?', answer: '1945'}
                 ])