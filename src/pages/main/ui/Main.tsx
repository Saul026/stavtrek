import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBarItem } from 'widgets/appBarItem';
import { FC, ReactNode, useState } from 'react';
import { DrawerItem } from 'widgets/drawer';

interface Props {
    children: ReactNode;
}

export const Main: FC<Props> = ({ children }) => {
    const [open, setOpen] = useState(false);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBarItem open={open} />
            <DrawerItem open={open} setOpen={setOpen} />
            <Box component='main' sx={{ padding: '16px' }}>
                <Box sx={{ paddingLeft: '1vw' }}>{children}</Box>
            </Box>
        </Box>
    );
};
