import Head from 'next/head'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export async function getStaticProps() {
  const res = await axios.get('http://localhost:9232/api/v1/fetchAllIds')
  const driversid = await res.data;
  return {
    props: { driversid }
  }
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>EduFI QnA Transactions page</title>
      </Head>

      <main>
        <h1 className="title">
          View all your transactions here 
        </h1>

        <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>TripId</TableCell>
                        <TableCell align="right">PassengerId</TableCell>
                        <TableCell align="right">DriverId</TableCell>
                        <TableCell align="right">PickUpPostalCode</TableCell>
                        <TableCell align="right">DropOffPostalCode</TableCell>
                        <TableCell align="right">TripStatus</TableCell>
                        <TableCell align="right">DateOfTrip</TableCell>
                        <TableCell align="right">End</TableCell>

                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {trips ? trips.map((row) => (
                        <TableRow
                        key={row.tripid}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.tripid}
                        </TableCell>
                        <TableCell align="right">{row.passengerid}</TableCell>
                        <TableCell align="right">{row.driverid}</TableCell>
                        <TableCell align="right">{row.pickuppostalcode}</TableCell>
                        <TableCell align="right">{row.dropoffpostalcode}</TableCell>
                        <TableCell align="right">{row.tripstatus}</TableCell>
                        <TableCell align="right">{row.dateoftrip}</TableCell>
                        <Button
                            onClick={()=>{endTrip(row.tripid)}}  sx={{ mt: 3, mb: 2 }}>
                            End
                        </Button>

                        </TableRow>
                    )) : null}
                    </TableBody>
                </Table>
            </TableContainer>




      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
