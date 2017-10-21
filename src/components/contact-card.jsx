import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
    card: {
        maxWidth: 345,
        alignContent: 'center',
    },
    media: {
        height: 200,
    },
};

function ContactCard(props) {
    const {classes} = props;
    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography type="headline" component="h2">
                        Contact Us
                    </Typography>
                    <Typography component="p">
                        To receive more information about our programs please call us at 915-201-1401 or 915-201-1402
                    </Typography>
                    <Typography component="p">
                        Fax: 915-231-6034
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button dense color="primary">
                        Share
                    </Button>
                    <Button dense color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

ContactCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactCard);