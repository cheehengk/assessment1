import React from 'react';
import { Table, TableHead, TableBody, TableCell, TableRow, Typography, Button } from '@mui/material';


const UsersDisplay = ({ users }) => {
    const elements = [
        {
            label: 'Name',
            value: (user) => `${user.name}`,
        },
        {
            label: 'Username',
            value: (user) => `${user.username}`,
        },
        {
            label: 'Email',
            value: (user) => `${user.email}`,
        },
        {
            label: 'Phone',
            value: (user) => `${user.phone}`,
        },
        {
            label: 'Website',
            value: (user) => `${user.website}`,
        },
        {
            label: 'Address',
            value: (user) => `${user.address.city}, ${user.address.street}, ${user.address.suite}, ${user.address.zipcode}`,
        },
        {
            label: 'Company',
            value: (user) => `${user.company.name}`,
        },
        {
            label: 'Company Catchphrase',
            value: (user) => `${user.company.catchPhrase}`,
        }
    ];

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '6rem',
        }}>
            <div style={{
                width: '100%',
                overflowX: 'auto',
                marginTop: '2rem',
                border: '1px solid #ccc',
            }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {elements.map((element, index) => (
                                <TableCell
                                    key={index}
                                    sx={{ fontWeight: 'bold'}}
                                >
                                    {element.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user, index) => (
                            <TableRow key={index}>
                                {elements.map((element, index) => (
                                    <TableCell
                                        key={index}
                                    >
                                        {element.value(user)}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}


export default UsersDisplay;