import { useState } from "react";
import Input from './input'
import Input2 from "./imput2";
function MyForm() {
  const [inputs, setInputs] = useState({});


  return (
    <form>
     
      <div><label>Compagnie aérienne</label>
      { Input2()}
      </div>
        
       <div><label> N° de vol :</label>
        {Input()}
       </div>

    </form>
  )
}
export default MyForm;
