import * as React from 'react';
import axios from 'axios';
import Head from 'next/head'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { Container } from '@mui/material';

export async function getStaticProps() {
  const res = await axios.get('http://mockdb:9233/api/v1/wallet/getAll')
  const wallets = await res.data;

  return {
    props: {  wallets }
  }
}

export default function Home({wallets}) {

  const [id, setid] = React.useState("");
  const [transactions, setTransactions] = React.useState([]);

  const handleChange = (event) => {
    setid(event.target.value);
    console.log(id);
  };



  return (
    <div className="container">
      <Head>
        <title>EduFI QnA Transactions page</title>
      </Head>

      <main>
        <h1 className="title">
          QnA Payment Service 
        </h1>

        <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/qna"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Questions and Answer
        </Link>
      </Breadcrumbs>

      <InputLabel id="demo-simple-select-standard-label">StudentID</InputLabel>
      <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={id}
          onChange={handleChange}
          name="id"
          label="id"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          {wallets.map(wallet => (
            <MenuItem value={wallet.studentid } key={wallet.walletid}>{wallet.studentid}</MenuItem>
          ))}
        </Select>

        {
          id ? <Container>

          <h2> Track your transactions here </h2>
          <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                      <TableRow>
                          <TableCell >TransactionId</TableCell>
                          <TableCell align="right">TransactionTimeStamp</TableCell>
                          <TableCell align="right">SenderWalletId</TableCell>
                          <TableCell align="right">ReceiverWalletId</TableCell>
                          <TableCell align="right">AnswerId</TableCell>
                          <TableCell align="right">TokenId</TableCell>
                          <TableCell align="right">NumTokens</TableCell>
  
                      </TableRow>
                      </TableHead>
                      <TableBody>
                      {transaction ? transaction.map((row) => (
                          <TableRow
                          key={row.transactionid}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                          <TableCell component="th" scope="row">{row.transactionid}</TableCell>
                          <TableCell align="right">{row.transactiontimestamp}</TableCell>
                          <TableCell align="right">{row.senderwalletid}</TableCell>
                          <TableCell align="right">{row.receiverwalletid}</TableCell>
                          <TableCell align="right">{row.answerid}</TableCell>
                          <TableCell align="right">{row.tokenid}</TableCell>
                          <TableCell align="right">{row.numtokens}</TableCell>
  
                          </TableRow>
                      )) : null}
                      </TableBody>
                  </Table>
              </TableContainer>


          </Container> 
          : <h2> Please select an id </h2>
        }
       



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
