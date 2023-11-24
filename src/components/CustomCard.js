import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Skeleton } from '@mui/material';

const CustomCard = ({ text, value, color, icon }) => {
    const theme = useTheme();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    });

    return (
        <Card>
            <CardContent>
                <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
                    <Grid item>
                        <Typography
                            variant='h6'
                            color={theme.palette.text.secondary}
                            gutterBottom
                        >
                            {loading ? <Skeleton variant='text' width={70} /> : text}
                        </Typography>
                        <Typography variant='h3' color={theme.palette.text.primary}>
                            {loading ? <Skeleton variant='text' width={70} /> : value}
                        </Typography>
                    </Grid>
                    <Grid item>
                        {
                            loading ? (<Skeleton variant='circular'><Avatar /></Skeleton>)
                                : (
                                    <Avatar
                                        sx={{
                                            backgroundColor: color,
                                            height: 56,
                                            width: 56
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={icon}
                                            size='lg'
                                            color={theme.palette.common.white}
                                        />
                                    </Avatar>
                                )}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

CustomCard.propTypes = {
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default CustomCard;