import { Hono } from "hono";

const routes = new Hono()

routes.all("/", (c)=>c.json("asdasda"))

export default routes