import React from 'react';
import { Table, TableHead, TableBody, TableCell, TableRow, Typography, Button } from '@mui/material';


const AuthorNameDisplay = ({ authorNames, removeName }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '3rem',
        }}>
            <Typography variant="h4">
                Author Names
            </Typography>
            <div style={{
                width: '100%',
                height: '400px',
                overflowY: 'auto',
                marginTop: '2rem',
            }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: '30%' }}>Index</TableCell>
                            <TableCell>Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {authorNames.map((name, index) => (
                            <TableRow key={index}>
                                <TableCell style={{ width: '30%' }}>{index}</TableCell>
                                <TableCell>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span>{name}</span>
                                        <Button
                                            color="error"
                                            variant="text"
                                            onClick={() => removeName(index)}
                                        >
                                            X
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Typography
                    variant="h6"
                    sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
                >
                    {authorNames.length === 0 ? 'No names to display, begin adding names!' : 'Continue adding names!'}
                </Typography>
            </div>
        </div>
    );
}


export default AuthorNameDisplay;