import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { AdminContext } from "../context/AdminProvider";

const AllFitbacks = () => {
  const { getFitbacks, fitbacks } = useContext(AdminContext);

  useEffect(() => {
    getFitbacks();
  },[]);

  if (!fitbacks) {
    return <h2>loading...</h2>;
  }
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ background: "darkgrey" }}>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Message</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fitbacks.map((row) => (
              <React.Fragment key={row.id}>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.message}</TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllFitbacks;
