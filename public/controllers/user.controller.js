import { asyncehandler } from "../../src/db/utls/asyncHandler";


const registerUser = asyncHandler( async (req, res) => {
    res.status(200).json({
        message: "ok"
    })
})


export {registerUser} 