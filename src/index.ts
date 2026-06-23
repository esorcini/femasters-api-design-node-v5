import { app } from "./server.ts";
import { env } from "../env.ts";

// Starts the server
app.listen(env.PORT, () => {
  console.log(`Server running on port: ${env.PORT}`);
});
