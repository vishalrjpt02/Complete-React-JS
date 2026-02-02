import { useEffect, useState } from "react";
import {
    Container,
    TextField,
    Typography,
    Box,
    CircularProgress,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

function App() {
    const [medicines, setMedicines] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        fetch("http://localhost:5231/api/Getmedicine")
            .then((res) => res.json())
            .then((data) => {
                setMedicines(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const today = new Date();

    const filtered = medicines.filter((m) =>
        m.name.toLowerCase().includes(search.toLowerCase())
    );
debugger
    const columns = [
        { field: "name", headerName: "Name", flex: 1 },
        { field: "brand", headerName: "Brand", flex: 1 },
        
        {
            field: "expiry",
            headerName: "Expiry",
            flex: 1,
            valueFormatter: ( params) =>
                params?.value ? params.value.toLocaleDateString("en-IN") : params.value,
        },
        { field: "quantity", headerName: "Quantity", flex: 1 },
        {
            field: "price",
            headerName: "Price ($)",
            flex: 1,
            valueFormatter: (params) => params?.value !== undefined ? `$${params.value.toFixed(2)}` : params.value,
        },
    ];

    const getRowColor = (params) => {
        const expiry = new Date(params.row.expiry);
        const diffDays = (expiry - today) / (1000 * 60 * 60 * 24);
        if (diffDays < 30) return "rgba(255, 0, 0, 0.2)"; // Red
        if (params.row.quantity < 10) return "rgba(73, 73, 52, 0.3)"; // Yellow
        return "white";
    };

    return (
        <Container sx={{ mt: 5 }}>
            <Typography variant="h4" gutterBottom align="center">
                💊 Medicine Inventory
            </Typography>

            <TextField
                label="Search by Medicine Name"
                variant="outlined"
                fullWidth
                sx={{ mb: 3 }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {loading ? (
                <Box sx={{ textAlign: "center", mt: 5 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <Box sx={{ height: 500, width: "100%" }}>
                    <DataGrid
                        rows={filtered.map((m, i) => ({ id: i + 1, ...m }))}
                        columns={columns}
                        pageSize={5}
                        getRowClassName={(params) => {
                            const color = getRowColor(params);
                            return color;
                        }}
                        sx={{
                            "& .MuiDataGrid-row": {
                                "&.MuiDataGrid-row--editing": { bgcolor: "#fff" },
                            },
                            "& .MuiDataGrid-row": {
                                bgcolor: "background.paper",
                                "&:hover": { bgcolor: "rgba(0,0,0,0.04)" },
                            },
                            "& .MuiDataGrid-row:nth-of-type(odd)": {
                                backgroundColor: "rgba(0,0,0,0.02)",
                            },
                            "& .MuiDataGrid-row.Mui-selected": {
                                backgroundColor: "rgba(25, 118, 210, 0.12) !important",
                            },
                            "& .MuiDataGrid-row": {
                                "&[style*='rgba(255, 0, 0, 0.2)']": { bgcolor: "#ffebee" },
                                "&[style*='rgba(255, 255, 0, 0.3)']": { bgcolor: "#fffde7" },
                            },
                        }}
                        getRowStyle={(params) => ({
                            backgroundColor: getRowColor(params),
                        })}
                    />
                </Box>
            )}
        </Container>
    );
}

export default App;
