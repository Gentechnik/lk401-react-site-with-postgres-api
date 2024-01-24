import express from "express";
import * as config from "../config";
import cors from "cors";
import * as tools from "../tools";
import axios from "axios";

interface IEmployee {
	first_name: string;
	last_name: string;
	age: number;
}

const app = express();
app.use(cors());
const port = 4882;

app.get("/employees", (_req, res) => {
	const employees: IEmployee[] = [
		{
			first_name: "first1",
			last_name: "last1",
			age: 11,
		},
		{
			first_name: "first2",
			last_name: "last2",
			age: 22,
		},
	];
	res.json(employees);
});

app.listen(port, () => {
	console.log(`server is running at http://localhost:${port}`);
});
