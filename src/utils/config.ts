if(process.env.NODE_ENV === "dev")
    require("dotenv").config();

export const PORT = process.env.PORT || 3000;

