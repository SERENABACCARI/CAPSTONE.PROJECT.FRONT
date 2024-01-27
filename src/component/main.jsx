
import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function main(){
    const [user, setUser] = useEffect;
    const Navigate= useNavigate()

    useEffect(() =>{
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem("token");
        if(!userId || !token){

            Navigate("/login");
        }

        fetch(`http://localhost:3020/api/users ${userId}`,
        {
            headers: {
                'Authorization': `Bearer  + ${token}`},
            }).then(user => {
                setUser(user);

        })
        .catch(()=>{
            Navigate("/login");
        })
 },[]);

return !user ?(
    <span>LOADING....</span>
):(

<div>congratulazioni!accesso avvenuto con successo{user}</div>

)


}