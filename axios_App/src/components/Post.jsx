import axios from "axios"

export function Post(){

 async function getPostData(){
    try {
        const resp=await axios({
            method:"post",
            url:(`https://reqres.in/api/users`),
            data:{
                id:0,
                email:"tanishka@gmail.come",
                first_name:"Tanishka",
                last_name:"Sharma",

            }
        })
        console.log(resp)
    } catch (error) {
        console.log(error)
    }
 }
return (<>
<button onClick={getPostData}>Post Data</button>
</>
)
}