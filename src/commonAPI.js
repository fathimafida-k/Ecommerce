import axios from "axios";

const commonAPI=async(httpmMethod,url,reqBody,reqHeader)=>{
const reqConfig={
    method:httpmMethod,
    url,
    data:reqBody,
    headers:reqHeader?reqHeader:{"content-type":"application/json"}
}
return await axios(reqConfig).then(res=>{
    return res
}).catch(err=>{
    return err
})

}
export default commonAPI