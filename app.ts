let variable = "hello";

variable = "hi";

let age = 18;

// age="eighteen"

let agewithType: number = 22;

//ageWithType ="eighteen"
agewithType = 18;

let testString : string

testString = "hello"

let testBoolean: boolean

testBoolean = false

let testStringOrNumber: string | number

testStringOrNumber = 10 
testStringOrNumber = "10"

// testStringOrNumber = []

// ARRAY 

let names = ["john","jane","tom"]

// names.push (3)
names.push("mike")

let numbers = [11,22,35]

// numbers.push(true)
numbers.push(92)

let testStringArray : string []

testStringArray = ["one","two","three"]

let testNumberArray : number []

//testNumberArray = [true, "hi", 23]
testNumberArray = [12, 55, 23]

let testStringOrNumberArray: (string | number) []

testStringOrNumberArray = [1, "two", 3]

// OBJECTS

let user = { 
  username: "john",
  age:22,
  isdAdmin: false
}

user.username = "jane"
// user.age = "eighteen"
user.age = 29 

// user.isAdmin = "no"
user.isdAdmin = true

// user.phone ="+12345678"

let userObj : { 
  username: string
  age: number
  isAdmin: boolean
};

userObj = { 
  username: "john",
  age: 23,
  isAdmin: true,
  //phone: "+1234567"
};

let userObj2 : { 
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string
};

userObj2 = { 
  username: "jane",
  age: 43,
  isAdmin:false,
  phone: "+1234567"
}

//Any 

let testAny: any;

testAny = 12
testAny = "Hello"
testAny = true
testAny = [true]
testAny = {}

let testAnyArray : any[]

testAnyArray= [1,"two", false, []]

//FUNCTIONS 

let sayHi = () => {
  console.log("Hi, welcome")
}

// sayHi = "hi"

let funcReturnString = ():string=>{
  console.log("hi")
  return "cesar dev"
}

let multiple = (num: number) => { 
  return num * 2;
}

let multiple2 = (num: number): number => { 
  return num * 2;
}

let multiple3 = (num: number): void => { 
  //return num * 2;
  // do something but dont return 
}

let sum = (num1: number, num2: number, another?:number) => { 
  return num1 + num2;
};

sum(2,3)