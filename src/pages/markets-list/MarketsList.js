import {useEffect, useState} from "react";
import {getCookie} from "../../helpers/helpers";
import {DataGrid} from '@mui/x-data-grid';
import {useNavigate} from "react-router-dom";
import baseServerApi from "../../api/baseServerApi";
import MarketDialog from './dialog/MarketDialog';

const MarketsList = () => {
    const navigate = useNavigate();
    const [marketList, setMarketList] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedMarket, setSelectedMarket] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!getCookie("token")) {
            navigate("/");
        }

        const getMarketSummary = async () => {
            try {
                const {data} = await baseServerApi.get();
                setMarketList(data.marketSummaryResponse.result);
            } catch (error) {
                setError(true);
            }
        }
        getMarketSummary();
    }, []);

    const tableColumns = [
        {field: 'shortName', headerName: 'Name', width: 400},
        {field: 'market', headerName: 'Market', width: 250},
        {field: 'exchange', headerName: 'Exchange', width: 200},
        {field: 'marketPrice', headerName: 'Market Price', width: 200},
        {field: 'symbol', headerName: 'Market Symbol', width: 200}
    ];

    const tableRows = marketList?.map((market) => {
        return {
            id: market.symbol,
            shortName: market.shortName,
            market: market.market,
            exchange: market.exchange,
            marketPrice: market.regularMarketPrice.fmt,
            symbol: market.symbol
        }
    });

    const handleRowClick = (row) => {
        const selected = marketList.filter((market) => market.symbol === row.id);
        setSelectedMarket(selected[0]);
        setOpenDialog(true);
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <div style={{height: '100%', padding: "30px"}}>
            {!error ? (<div style={{height: '100%'}}>
                <DataGrid
                    rows={tableRows}
                    columns={tableColumns}
                    onRowClick={(row) => handleRowClick(row)}
                />
                <MarketDialog openDialog={openDialog} market={selectedMarket}
                              onCloseDialog={handleCloseDialog}/>
            </div>) : (<h1>Error occurred while fetching data, try again later.</h1>)}
        </div>
    );
}
export default MarketsList;



