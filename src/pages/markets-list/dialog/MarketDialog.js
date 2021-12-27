import DialogTitle from '@mui/material/DialogTitle';
import {Dialog, DialogContent, Grid, IconButton, Divider} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import _ from 'lodash';
import './MarketDialog.css'

const MarketDialog = ({onCloseDialog, openDialog, market}) => {
    return (
        <Dialog onClose={onCloseDialog} open={openDialog} fullWidth maxWidth="xs">
            <IconButton
                aria-label="close"
                onClick={onCloseDialog}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}>
                <CloseIcon/>
            </IconButton>
            <DialogTitle>{market.shortName}:</DialogTitle>
            <Divider/>
            <DialogContent>
                {Object.keys(market).map((key) => {
                    const value = typeof (market[key]) === 'object' ? market[key].fmt : market[key];
                    return (
                        <Grid container key={key}>
                            <Grid item xs={8} className="label"> {_.kebabCase(key).split('-').join(" ")}:</Grid>
                            <Grid item xs={4} className="text"> {value.toString()}</Grid>
                        </Grid>
                    )
                })}
            </DialogContent>
        </Dialog>
    );
}
export default MarketDialog;
