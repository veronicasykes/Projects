# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Product.delete_all
Product.create! id: 1, name: "Key Lime Pie Adromischus", price: 6.50, active:true, image: "https://goo.gl/wvvlAJ", description: "Likes bright light and well-drained soil with moderate water."
Product.create! id: 2, name: "Agave Blue Glow", price: 6.50, active: true, image:	"https://goo.gl/qKiInS", description: "Likes bright light and well-drained soil with moderate water."
Product.create! id: 3, name: "Star Cactus", price: 6.50, active: true, image: "https://goo.gl/AWikPt", description: "Likes bright light and well-drained soil with moderate water."
Product.create! id: 4, name: "Calico Kitten Crassula", price: 6.50, active: true, image: "https://goo.gl/tL0t9c", description: "Likes bright light and well-drained soil with moderate water."
Product.create! id: 5, name: "Painted Lady Echeveria", price: 6.50, active: true, image: "https://goo.gl/btLnlM", description: "Likes bright light and well-drained soil with moderate water."
Product.create! id: 6, name: "Woolly Rose	Echeveria", price: 6.50, active: true, image: "https://goo.gl/6WI8vh", description: "Likes bright light and well-drained soil with moderate water."
Product.create! id: 7, name: "Rainbow Hedgehog Cactus", price: 6.50, active: true, image: "https://goo.gl/hRkNLP", description: "Likes bright light and well-drained soil with moderate water."
Product.create! id: 8, name: "Tanzanian Zipper Plant", price: 6.50, active: true, image: "https://goo.gl/C0Tb9p", description: "Likes bright light and well-drained soil with moderate water."
Product.create! id: 9, name: "Baby Toes", price: 6.50, active: true, image:	"https://goo.gl/OPJzpL", description: "Likes bright light and well-drained soil with moderate water."
Product.create! id: 10,	name: "Thumb Cactus", price: 6.50, active: true, image:	"https://goo.gl/ZxieC1", description: "Likes bright light and well-drained soil with moderate water."


OrderStatus.delete_all
OrderStatus.create! id: 1, name: "In Progress"
OrderStatus.create! id: 2, name: "Placed"
OrderStatus.create! id: 3, name: "Shipped"
OrderStatus.create! id: 4, name: "Cancelled"
