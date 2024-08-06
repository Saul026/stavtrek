import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Drawer } from 'app/styles/mui';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HomeIcon from '@mui/icons-material/Home';
import { styled, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const DrawerItem = ({ open, setOpen }: any) => {
    const navigate = useNavigate();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: `${open ? 'flex-end' : 'center'}`,
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    }));

    return (
        <Drawer variant='permanent' open={open}>
            <DrawerHeader>
                {!open ? (
                    <IconButton aria-label='open drawer' onClick={handleDrawerOpen} sx={{ color: 'white' }}>
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <IconButton onClick={handleDrawerClose} aria-label='close drawer' sx={{ color: 'white' }}>
                        <ChevronLeftIcon />
                    </IconButton>
                )}
            </DrawerHeader>
            <List sx={{ color: 'white' }}>
                {['Devices', 'Home'].map((text, index) => (
                    <ListItem
                        key={text}
                        disablePadding
                        sx={{ display: 'block' }}
                        onClick={() => navigate(`/${text.toLowerCase()}`)}
                    >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <Tooltip title={text}>
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                        color: 'white',
                                    }}
                                >
                                    {index % 2 === 0 ? <DirectionsCarIcon /> : <HomeIcon />}
                                </ListItemIcon>
                            </Tooltip>
                            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};
