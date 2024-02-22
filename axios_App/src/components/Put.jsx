import axios from "axios"

export function Put(){
const putData =async()=>{
try {
    const resp= await axios({
        method:"put",
        url:(`https://reqres.in/api/users/2`),
        data:{
            id:123,
            email:"batman@batman.com",
            first_name:"Batman",
            last_name:"Waynes"
        }
    })
    console.log("Put request-----",resp)
} catch (error) {
    console.log(error)
}
}

    return(
        <>
        <button onClick={putData}>Put Data</button>
        </>
    )
}