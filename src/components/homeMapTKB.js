import { axiosWithAuth } from "../utilities/axiosWithAuth";

const homePage = axiosWithAuth().get('https://potluck-planner-api.herokuapp.com/api/potlucks/odst0016/testPass')
.then(res => {
    res.data.map(pt => {
        return <div>{res.items}</div>
    })

}).catch(err =>{
    console.log(err)
})