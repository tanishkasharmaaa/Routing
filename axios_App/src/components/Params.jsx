import axios from "axios";

export function Param() {
  async function paramData() {
    try {
      const resp = await axios({
        method: "get",
        url: `https://reqres.in/api/users`,
        params: {
          page: 2,
        },
      });
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button onClick={paramData}>Param Data</button>
    </>
  );
}
