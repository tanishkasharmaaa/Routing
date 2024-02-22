import axios from "axios"

export function Patch(){

    async function patchData(){
        try {
            const resp=await axios({
                method:"patch",
                url:(`https://reqres.in/api/users/2`),
                data:{
                    avatar:"https://volunteers.girlscoutsrv.org/wp-content/uploads/2018/05/GirlScoutAmbassadors.jpg"
                }
            })
            console.log(resp)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <>
        <button onClick={patchData}>Patch Data</button>
        </>
    )
}