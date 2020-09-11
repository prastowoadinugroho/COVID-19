import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import Countup from 'react-countup';
import styles from './Cards.module.css';
import cl from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if(!confirmed){
        return 'Loading...'
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cl(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={confirmed.value} duration={2.5} separator="."/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of covid19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cl(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recoverd</Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={recovered.value} duration={2.5} separator="."/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active recoveries of covid19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cl(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={deaths.value} duration={2.5} separator="."/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of death cases of covid19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;