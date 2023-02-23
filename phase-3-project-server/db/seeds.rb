puts "🌱 Seeding users..."

User.create(name: 'Ringo')
User.create(name: 'Paul')
User.create(name: 'John')
User.create(name: 'George')

puts "✅ Done seeding users!"


puts "🌱 Seeding notes..."

Note.create(title:'Make a Cake', details: 'Go to the shop and buy ingredients', category:'Urgent', user_id:1)
Note.create(title:'Make cupcakes', details: 'Go to the shop and buy ingredients', category:'Urgent', user_id:2)
Note.create(title:'Make a Banana Bread', details: 'Go to the shop and buy ingredients', category:'Urgent', user_id:3)
Note.create(title:'Make a Mess', details: 'Go to the shop and buy ingredients', category:'Urgent', user_id:4)
Note.create(title:'Buy Toilet Paper', details: 'We are running desperatly low', category:'Urgent', user_id:1)
Note.create(title:'Buy Peanut Butter', details: 'We are running desperatly low', category:'Urgent', user_id:2)
Note.create(title:'Buy Jam', details: 'We are running desperatly low', category:'Urgent', user_id:3)
Note.create(title:'Buy More Milk', details: 'We are running desperatly low', category:'Urgent', user_id:4)

puts "✅ Done seeding users!"