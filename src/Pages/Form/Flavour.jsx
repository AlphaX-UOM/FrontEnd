import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function flavour() {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={topFlavours}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </React.Fragment>
      )}
      style={{ width: 400 }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Flavours" placeholder="Flavours" />
      )}
    />
  );
}


const topFlavours = [
  { title: 'Adventure' },
  { title: 'Luxury' },
  { title: 'Budget' },
  { title: 'History' },
  { title: 'Experiance' },
  { title: 'Nature' },
  { title: 'Coastal'},
  { title: 'Mountains'},
  { title: 'Cultural'},
  { title: 'Rural'}
];
