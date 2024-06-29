//Este componente mostrará información detallada sobre una criptomoneda en particular.
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from 'react';

const Coin = () => {
    const [data, setData] = useState();
    const [favCoins, setFavCoins] = useState([]);

    const {id} = useParams();

    const getCoinDetail = async () => {
        try{
            const response = await axios.get(`https://api.coincap.io/v2/assets/${id}`)
            setData(response.data.data);
        }catch(error){
            console.error('Error : ', error);
        }
    };
    const getFavs = () =>{
        const favs = localStorage.getItem("favCoins");
        if(favs) setFavCoins(favs);
        console.log(favCoins);
    } 
          
    useEffect(()=>{
        getCoinDetail();
        getFavs();
    },[])
   
    const addFavourite = () => {
        if(!favCoins.find((fav)=>{return fav==id})) setFavCoins([...favCoins,id]);
        // localStorage.setItem("favCoins",JSON.stringify([...favCoins]));
        console.log(favCoins);
    }

    const deleteFavourite = () => {
        let newFavs = [...favCoins];
   
        newFavs = newFavs.forEach((fav)=>{
            console.log("fav",fav)
            if(fav != id) return fav
        })
        setFavCoins(newFavs);
        console.log(newFavs)
        // localStorage.removeItem("favCoins")
        localStorage.setItem("favCoins",[...favCoins]);
    }
    
    return (
        <>
            <h1>Coin</h1>
            {data &&
                <>
                    <h2>{data.name}</h2>
                    <p>{data.symbol}</p>
                    <p>{data.priceUsd}</p>
                    <button onClick={addFavourite}>Añadir favorito</button>
                    <button onClick={deleteFavourite}>Quitar favorito</button>
                </>
            }
                    
        </>
        
    )
}

export default Coin;