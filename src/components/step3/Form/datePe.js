//affichage de donnée de formulaire
//   return(
//     <div className="wrapper">
//       <h1>How About Them Apples</h1>
//       {submitting &&
//        <div>
//          You are submitting the following:
//          <ul>
//            {Object.entries(formData).map(([name, value]) => (
//              <li key={name}><strong>{name}</strong>:{value.toString()}</li>
//            ))}
//          </ul>
//        </div>
//       }
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <label>
//             <p>Name</p>
//             <input name="name" onChange={handleChange}/>
//           </label>
//         </fieldset>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App;

import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePi() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
      sx={{ width: 100 }}
        label="Date Permis"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}