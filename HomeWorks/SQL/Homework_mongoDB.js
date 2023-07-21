use homework

db.createCollection("users")

db.users.insertMany([
    {
        id: 1,
        name: 'Анатолий',
        age:28,
        gender: 'm'
    },
    {
        id: 2,
        name: 'Светлана',
        age:25,
        gender: 'f'
    },
    {
        id: 3,
        name: 'Никита',
        age:33,
        gender: 'm'
    },
    {
        id: 4,
        name: 'Ольга',
        age:22,
        gender: 'f'
    }
])

db.users.find({gender: 'f'})

db.users.find({$and: [
    {gender: 'f'},
    {age: {$gt:30}}
]})

db.users.find({
    name: {$in:['Анатолий', 'Дмитрий', 'Ольга', 'Семен']},
})

db.users.find({id: 3})

db.users.find({age: { $gte: 30, $lte: 40 }})

