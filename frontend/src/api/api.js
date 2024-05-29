import axios from "axios";

const fetchUsers = () => axios.get("/api/users");

export { fetchUsers };
