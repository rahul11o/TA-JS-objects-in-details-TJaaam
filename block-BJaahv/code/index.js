// # 🎖 Object Creation Patterns

// - [ ] Using function to create object

// function user(name,id,noOfProjects = 0){
//     let userObj = {};
//     userObj.name = name;
//     userObj.id = id;
//     userObj.noOfProjects = noOfProjects;

//     userObj.getProjects = function(){
//         return userObj.noOfProjects;
//     };
//     userObj.changeName = function(newName){
//         let oldName = userObj.name;
//         userObj.name = newName;
//         return oldName;
//     };
//     userObj.incrementProject = function(val) {
//         userObj.noOfProjects = userObj.noOfProjects + val
//         return userObj.noOfProjects
        
//     };
//     userObj.decrementProject = function(val) {
//         userObj.noOfProjects = userObj.noOfProjects - val
//         return userObj.noOfProjects
        
//     }
//     return userObj;
// }


// - [ ] Using Object.create (prototypal pattern)

// let userMethod = {
//     getProjects : function(){
//         return userObj.noOfProjects;
//     },
//     changeName : function(newName){
//         let oldName = this.name;
//         this.name = newName;
//         return oldName;
//     },
//     incrementProject : function(val) {
//         this.noOfProjects = this.noOfProjects + val
//         return this.noOfProjects
        
//     },
//     decrementProject : function(val) {
//         this.noOfProjects = this.noOfProjects - val
//         return this.noOfProjects
        
//     }
// }

// function user(name,id, noOfProjects = 0){
//     let userObj = Object.create(userMethod);
//     userObj.name = name;
//     userObj.id = id;
//     userObj.noOfProjects = noOfProjects;

//     return userObj;
// }

// - [ ] Using Pseudoclassical Way

// function User(name,id, noOfProjects=0){
//     this.name = name;
//     this.id = id;
//     this.noOfProjects = noOfProjects;

// }
// User.prototype = {
//     getProjects : function(){
//         return this.noOfProjects;
//     },
//     changeName : function(newName){
//         let oldName = this.name;
//         this.name = newName;
//         return oldName;
//     },
//     incrementProject : function(val) {
//         this.noOfProjects = this.noOfProjects + val
//         return this.noOfProjects
        
//     },
//     decrementProject : function(val) {
//         this.noOfProjects = this.noOfProjects - val
//         return this.noOfProjects
        
//     }
// }

// - [ ] Using Class

class User {
    constructor(name,id, noOfProjects=0){
      this.name = name;
      this.id = id;  
      this.noOfProjects = noOfProjects;
    }
    getProjects(){
        return this.noOfProjects;
    }
    changeName(newName){
        let oldName = this.name;
        this.name = newName;
        return oldName;
    }
    incrementProject(val) {
        this.noOfProjects = this.noOfProjects + val
        return this.noOfProjects
        
    }
    decrementProject(val) {
        this.noOfProjects = this.noOfProjects - val
        return this.noOfProjects
        
    }

}

// Write 2 tests for all the different ways of creating object. Test all the methods on these objects.
let UserOne = new User("rahul","rahul11o", 9)