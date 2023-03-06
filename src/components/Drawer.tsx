import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ContactForm from '../components/ContactForm';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

type Props = {
    id?: string[];
}

export default function About(props: Props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
     <div>
      <ContactForm id={props.id}/>
     </div>
    </Box>
  );


  return (
    <div>
    {(['bottom'] as const).map((anchor) => (
      <React.Fragment key={anchor}>
        <button className="p-3 bg-slate-500 rounded m-3 hover:bg-red-500 hover:text-white"  onClick={toggleDrawer(anchor, true)}>New Item</button>
        <button className="p-3 bg-slate-500 rounded m-3 hover:bg-red-500 hover:text-white" onClick={toggleDrawer(anchor, true)}>Update</button>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    ))}
  </div>
  );
}


