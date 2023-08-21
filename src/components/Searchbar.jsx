import * as React from 'react';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

export default function BasicTextFields(props) {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {},
            }}
            style={{ display: 'flex', justifyContent: 'center', padding: '0px', borderBottom: '0.5px solid' }}
            noValidate
            autoComplete="off"
        >
            <IconButton sx={{ p: '10px' }} aria-label="menu" disabled>
                <EmailIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Email Address"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <Button onClick={props.click} color='inherit'>Submit</Button>
            </IconButton>
        </Box>
    );
}