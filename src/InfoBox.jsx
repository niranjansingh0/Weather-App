import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./InfoBox.css";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1511747779856-fd751a79aa22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmV3JTIwY2xvdWRzfGVufDB8fDB8fHww"
   const COLD_URL="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
   const HOT_URL="https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?b=1&s=170667a&w=0&k=20&c=3pJ8IywW-9H-bcZ2XNGG0EaKwYiWD3XdMLC-mAC6dFI="
   const RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?b=1&s=170667a&w=0&k=20&c=7nD_8127UoUACRboJelDa-h-g0afqyRP9h8jtJ5xvUo="
   return (
       <div className="InfoBox">
      
       <div className='cardContainer'>
       <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity > 80 ? RAIN_URL :info.temp > 18 ? HOT_URL: COLD_URL  }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
            {info.humidity > 80 ? <ThunderstormIcon/> :info.temp > 18 ? <WbSunnyIcon/>: <AcUnitIcon/>  }

          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
         <div>
           <p>Temperature= {info.temp}&deg;C</p>
           <p>Humidity= {info.humidity}</p>
           <p>Min Temp= {info.tempMin}&deg;C</p>
           <p>Min Temp= {info.tempMin}&deg;C</p>
           <p>The weather can described as <i>{info.weather}</i> and feels Like {info.feelsLike}&deg;C</p>


         </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
    </div>
       </div>
    );
};