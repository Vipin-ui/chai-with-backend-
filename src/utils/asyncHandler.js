
const asyncHandler= (fn)=> (req,res,next)=>{
    (req,res,next)=> {
        Promise.resolve(requesHandler(req,res)).catch((error)=>next(error))
    }
}





export {asyncHandler}

// const asyncHandler= (fn)=> async (req,res,next)=>{
//     try{
//           await fn(req,res,next)   
//     }
//     catch(error){
//         resizeBy.status(error.code || 500).json({
//             success:false,
//             message:error.message})
//     }
// }