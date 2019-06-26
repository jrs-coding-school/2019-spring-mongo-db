const mongoose = require('mongoose')

const connect = () => {
    return mongoose.connect('mongodb://localhost:27017/todos')
}

const student = new mongoose.Schema({
    //firstName: String,
    firstName: {
        type: String,
        required: true,
        unique: true
    },
    info: {
        school: {
            type: String
        },
        shoeSie: {
            type: Number
        }
    },
    favFoods: [{ type: String }],
    
    age: Number

}, {timestamps: true})

const Student = mongoose.model('student', student)

connect()
    .then(async connection => {
        const student = await Student.create({ firstName: 'Harry', age: 24, favFoods: ['pizza', 'favfoodhere'] })
        //const found = await Student.find({ firstName: 'Larry' })
        //const foundById = await Student.findById('')
        //const updated  =  await Student.findByIdAndUpdate('deed', {})
        console.log(student)
    })
    .catch(e => console.error(e))

