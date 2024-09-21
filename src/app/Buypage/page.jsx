import Bcard from "@/components/Buypage/Bcard/Bcard";
import Buyhero from "@/components/Buypage/BuyHome/Buyhero";
import Buypergrid from "@/components/Buypage/Buypagegrid/Buypergrid";
import Poster from "@/components/Buypage/buysec/Poster";
import Client from "@/components/Buypage/client/Client";


const Buyus =()=> {
    return(
<div>
  
 <Buyhero />
 <Poster />
 <Buypergrid />
 <Client />
 <Bcard />
 
 
 
</div>
    )
}
export default Buyus;