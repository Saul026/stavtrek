import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { login } from 'shared/api/login';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'shared/store/hooks';
import { signIn } from '../model/login';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const defaultTheme = createTheme();

export const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [formError, setFormError] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    const onSubmit = (data: any) => {
        login(data.email, data.password)
            .then(() => {
                console.log('Вы вошли!');
                dispatch(signIn());
                navigate('/home');
            })
            .catch((error) => {
                console.log(error);
                setFormError(true);
            });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component='main' maxWidth='xs' onSubmit={handleSubmit(onSubmit)}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Sign in
                    </Typography>
                    <Box component='form' noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='Email Address'
                            autoComplete='email'
                            {...register('email', {
                                required: 'Поле обязательно к заполнению!',
                                pattern: {
                                    value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                    message: 'Почта введена неверно.',
                                },
                            })}
                            autoFocus
                        />
                        {errors?.email && (
                            <Typography component='span' color={'red'}>
                                {errors?.email?.message ? String(errors.email.message) : 'Error!'}
                            </Typography>
                        )}
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            id='password'
                            label='Password'
                            type='password'
                            autoComplete='current-password'
                            {...register('password', {
                                required: 'Поле обязательно к заполнению!',
                                pattern: {
                                    value: /^\d{6}$/,
                                    message: 'Паполь - 6 символов.(только цифры)',
                                },
                            })}
                        />
                        {errors?.password && (
                            <Typography component='span' color={'red'}>
                                {errors?.password?.message ? String(errors.password.message) : 'Error!'}
                            </Typography>
                        )}
                        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                            Sign In
                        </Button>
                        <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center' }}>
                            {formError && (
                                <Typography component='span' color={'red'}>
                                    Данные введены неверно!
                                </Typography>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};
