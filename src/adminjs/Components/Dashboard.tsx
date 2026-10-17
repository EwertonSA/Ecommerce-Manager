import React, { useEffect, useState } from "react"
import {H1,H2, Table, TableBody, TableCell, TableHead, TableRow} from '@adminjs/design-system'
import { ApiClient ,useCurrentAdmin} from "adminjs"
export default function Dashboard(){
const api= new ApiClient()
const [resources,setResources]=useState<{[key:string]:number}>()
const [currentAdmin]= useCurrentAdmin()
useEffect(()=>{
fetchDashboard()
},[])
async function fetchDashboard(){
const res=await api.getDashboard() as { data: { [key: string]: number }} 
setResources(res.data)

}
return(
    <section style={{padding:'2rem'}}>
        <H1>Seja Bem vindo(a), {currentAdmin?.name}</H1>
         <section style={{ backgroundColor: '#FFF', padding: '1.5rem' }}>
        <H2>Resumo</H2>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: '#FF0043' }}>
              <TableCell style={{ color: "#FFF" }}>Recurso</TableCell>
              <TableCell style={{ color: "#FFF" }}>Registros</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              resources ?
                Object.entries(resources).map(([resource, count]) => (
                  <TableRow key={resource}>
                    <TableCell>{resource}</TableCell>
                    <TableCell>{count}</TableCell>
                  </TableRow>
                ))
                :
                <></>
            }
          </TableBody>
        </Table>
      </section>
    </section>
)
}