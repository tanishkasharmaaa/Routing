import axios from "axios"

export function Delete(){

   async function deleteData(){
try {
    const resp=await axios({
        method:"delete",
        url:(`https://reqres.in/api/users/2`)
    })
    console.log(resp)
} catch (error) {
    console.log(error)
}
    }
    return(<>
    <button onClick={deleteData}>Delete Data</button>
    </>)
}