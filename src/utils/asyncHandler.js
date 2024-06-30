const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promie.resolve(requestHandler(req, res, next))
            .catch(err => next(err))
    }
}



export { asyncHandler }


// we will take a function as paramter, and pass it to another function
// this is a higher order function which can take another function as a paramter or return it too

// const asyncHandler = (func) =>{ async () => {}}

// const asyncHandler = (func) => async (req, res, next) => {
//     try {
//         await func(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({ success: false, message: error.message })
//     }
// }