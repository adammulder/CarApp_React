import Modal from "./Modal"
import Drawer from "./Drawer";
import { useState } from 'react'
import { server_calls } from "../api/server";
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useGetData } from "../custom-hooks/FetchData";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const columns: GridColDef[]= [
    {field: 'id', headerName: "ID", width:90, hideable:true },
    {field: 'year', headerName: 'Year', flex:1},
    {field: 'make', headerName: 'Make', flex:1},
    {field: 'model', headerName: 'Model', flex:1},
    {field: 'color', headerName: 'Color', flex:2}
]


function DataTable() {
    const [open, setOpen] = useState(false);
    const { contactData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ]= useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose= () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()},500)
    }

  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1489008777659-ad1fc8e07097?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover h-screen">
        
        <Drawer
            id={selectionModel}
            
         />
        
        <div className={ open ? "hidden": "container mx-10 my-5 flex flex-col bg-white"}
            style={{ height:400, width: '100%' }}>
            <h2 className="p-3 bg-slate-300 my-2 rounded">My Inventory</h2>
            <DataGrid rows={contactData} columns={columns} pageSizeOptions={[5]}
            checkboxSelection={true}
            onRowSelectionModelChange={ (item:any) =>{
                setSelectionModel(item)
            }}
            />
        </div>
        <button onClick={deleteData} className="p-3 bg-slate-500 rounded m-3 hover:bg-red-500 hover:text-white">Delete</button>
    </div>
  )
}
export default withAuthenticationRequired(DataTable)