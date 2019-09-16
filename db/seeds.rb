# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
User.destroy_all

demo = User.create(first_name: "Nice", last_name: "Guy", email: "niceguy@yahoo.com", gender: "Male", password: "password")
demoPP = open('https://friendzone-images.s3-us-west-1.amazonaws.com/NiceGuyPP.jpg')
demoCP = open('https://friendzone-images.s3-us-west-1.amazonaws.com/NiceGuyCP.jpg')
demo.profilepic.attach(io: demoPP, filename: 'NiceGuyPP.jpg')
demo.coverpic.attach(io: demoCP, filename: 'NiceGuyCP.jpg')


