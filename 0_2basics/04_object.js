const myObject={}

myObject.name="suraj pandey"
myObject.rollno=45
myObject.num=2134
myObject.id=5392

console.log(myObject)

const text={
    name:"suraj",
    fullname:{
        name:"suraj pandey"
    }
}

console.log(text)


const  course={
    mycourse:"python",
    favcourse:"js"
}

const {mycourse:favcourse}=course
// console.log(mycourse)
console.log(favcourse)
