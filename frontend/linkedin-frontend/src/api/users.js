import ajax from "../utils/ajax";

export async function  getUsersByFilter(params)  {
    const result = await ajax.get("http://localhost:8080/user/filter?", {
    params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  console.log(result);
  return result;
}
