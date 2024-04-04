import React, { useState } from "react";
import { Button, TextField, Grid } from "@mui/material";
import AuthorNameDisplay from "./AuthorNameDisplay";

const NameChanger = () => {
    const [name, setName] = useState('');
    const [displayNames, setDisplayNames] = useState([]);
    const [error, setError] = useState(false);

    const handleSubmit = (name) => {
        if (name === '') {
            setError(true);
            return;
        }
        setDisplayNames([...displayNames, name]);
        setName('');
    }

    const handleChange = (value) => {
        setError(false);
        setName(value);
    }

    const removeName = (index) => {
        const newNames = displayNames.filter((name, i) => i !== index);
        setDisplayNames(newNames);
    }

    return (
        <Grid
            container
            spacing={2}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid #ccc'}}
        >
            <Grid item sx={{ width: { xs: '80%', lg: '40%' } }}>
                <AuthorNameDisplay
                    authorNames={displayNames}
                    removeName={removeName}
                />
            </Grid>
            <Grid
                container
                spacing={2}
                direction="row"
                alignItems="center"
                justifyContent="center"
            >
                <Grid item>
                    <TextField
                        label="Author Name"
                        variant="outlined"
                        fullWidth
                        size="small"
                        value={name}
                        onChange={(e) => handleChange(e.target.value)}
                        error={error} // Set error state
                        helperText={error ? 'Name cannot be empty' : ''}
                    />
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="success"
                        fullWidth
                        onClick={() => handleSubmit(name)}
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default NameChanger;