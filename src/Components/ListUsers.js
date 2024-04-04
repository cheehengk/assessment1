import React, { useState } from "react";
import {Button, Grid, Typography} from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ClearIcon from '@mui/icons-material/Clear';
import UsersDisplay from "./UsersDisplay";


const ListUsers = () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            });
        console.log(users);
    }

    return (
        <Grid
            container
            spacing={2}
            direction="column"
            alignItems="center"
        >
            <Grid item
                  sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '24px',
                    }}
            >
                <Typography variant="h4">
                    Users
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<CloudDownloadIcon />}
                    onClick={() => getUsers()}
                >
                    Get Names
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    startIcon={<ClearIcon />}
                    onClick={() => setUsers([])}
                >
                    Clear
                </Button>
            </Grid>
            <Grid item sx={{ width: '80%' }}>
                <UsersDisplay users={users} />
            </Grid>
        </Grid>
    )
}


export default ListUsers;