import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import RestaurantTable from "../Components/RestaurantTable"
import { RestaurantCard } from "../Components/RestaurantCard";
import Pagination from "../Components/Pagination";
function Dashboard() {

const{auth,logout}=useContext(AuthContext);
const[restaurant,setData]=useState([]);
const[page,setPage]=useState(1)
const[totalPages,setTotalPage]=useState(0)

async function fetchData(){
  try {
     const response=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`) ;
     const finalResponse=await response.json();
     const end =finalResponse
     setData(end.data)
     setTotalPage(end.totalPages)
     console.log(end)
  } catch (error) {
      console.error('error',error)
  }
  }
  useEffect(()=>{
    fetchData()  
  },[page])
  
     

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onChange={logout}>Logout</button>
        <p>
          Token:{auth.token}
          <b data-testid="user-token"></b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <RestaurantTable />
      </div>
      <div data-testid="pagination-container">
        <Pagination totalPages={totalPages} currentPage={page} handlePageChange={(page)=>SingleRestaurantPage(page)}/>
        </div>
    </div>
  );
}

export default Dashboard;
