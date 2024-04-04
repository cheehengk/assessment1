import React from "react";
import { AppBar, Typography } from "@mui/material";

const AppHeader = () => {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: '#444',
                marginBottom: '3rem'
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '2rem'
                }}
            >
                Assessment 1 App
            </Typography>
        </AppBar>
    )
}

export default AppHeader;