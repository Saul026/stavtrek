import { selectIsLogin, signOut } from 'pages/login/model/login';
import { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/store/hooks';
import {
    Button,
    ButtonGroup,
    ClickAwayListener,
    Grow,
    MenuItem,
    MenuList,
    Paper,
    Popper,
    Toolbar,
    Typography,
} from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useNavigate } from 'react-router-dom';
import { AppBar } from 'app/styles/mui';

export const AppBarItem = ({ open }: any) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const anchorRef = useRef<HTMLDivElement>(null);
    const isAuth = useAppSelector(selectIsLogin);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const options = [
        {
            title: 'Профиль',
            handler: () => {
                alert('В разработке (´。＿。｀)');
            },
        },
        {
            title: `${isAuth ? 'Выйти' : 'Войти'}`,
            handler: authHandler,
        },
    ];

    function authHandler() {
        if (isAuth) {
            dispatch(signOut());
        } else {
            navigate('/');
        }
    }

    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
    };

    const handleToggle = () => {
        setIsMenuOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }

        setIsMenuOpen(false);
    };

    return (
        <AppBar open={open}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='h6' component='div'>
                    Autotracker
                </Typography>
                <ButtonGroup variant='contained' ref={anchorRef}>
                    <Button
                        sx={{ backgroundColor: '#FFF', border: '1px solid black' }}
                        color='inherit'
                        onClick={handleToggle}
                    >
                        <AccountCircleOutlinedIcon />
                    </Button>
                </ButtonGroup>
                <Popper
                    sx={{
                        zIndex: 10000,
                    }}
                    open={isMenuOpen}
                    role={undefined}
                    transition
                    anchorEl={anchorRef.current}
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                            }}
                        >
                            <Paper elevation={4} sx={{ marginRight: '24px', marginTop: '8px' }}>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList id='split-button-menu'>
                                        {options.map((option) => (
                                            <MenuItem
                                                key={option.title}
                                                onClick={handleMenuItemClick}
                                                onClickCapture={option.handler}
                                            >
                                                {option.title}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </Toolbar>
        </AppBar>
    );
};
