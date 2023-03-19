# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Creating questions"
questions = Question.create([
    {
        title: "What is Ruby's method for creating arrays?",
        tag: "Ruby"
    },
    {
        title: "How do you define a method in Ruby?",
        tag: "Ruby"
    },
    {
        title: "What is a block in Ruby?",
        tag: "Ruby"
    },
    {
        title: "How do you install a gem in Ruby?",
        tag: "Ruby"
    },
    {
        title: "What is the difference between 'puts' and 'print' in Ruby?",
        tag: "Ruby"
    },
    {
        title: "How do you handle errors in Ruby?",
        tag: "Ruby"
    },
    {
        title: "What is a class in Ruby?",
        tag: "Ruby"
    }
])
puts "Created #{questions.count} questions"
