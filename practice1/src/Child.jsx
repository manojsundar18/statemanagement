import React,{createContext,useContext,useState} from 'react'

const UserContext = createContext()

function Child() {
    const [user]= useState("React")
    return (
      <UserContext.Provider value={user }>
        <h1>Parent</h1>
        <Component user={user}/>
      </UserContext.Provider>
    )
}

function Component(){ 
    return  (
        <>
        <h3>Component</h3>
        <Component1/>
        </>
    )
}

function Component1(){
    return  (
        <>
        <h3>Component 1</h3>
        <Component2 />
        </>
    )
}

function Component2(){
    return  (
        <>
        <h3>Component 2</h3>
        <Component3 />
        </>
    )
}

function Component3(){
    return  (
        <>
        <h3>Component 3</h3>
        <Component4 />
        </>
    )
}

function Component4(){

    const user =useContext(UserContext)
    return  (
        <>
        <h3>Component 4</h3>
        <h1>{`user is ${user}`} </h1>
        </>
    )
}

export default Child
