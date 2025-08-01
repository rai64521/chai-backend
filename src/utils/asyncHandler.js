const asyncHandler = (requestHandler) =>{
        (req, res, next) => {
            Promise.resolve(requestHandler(req,res,next))
            .catch((err) => next(err))
        }


}




export {asyncHandler}



// const asyncHandler = (fun) => async (req, res, res) => {
//     try {
//         await fun(req,res,next)

//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }