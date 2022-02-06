import { useRouter } from 'next/router'
import * as React from 'react';
import axios from 'axios';
import Head from 'next/head'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Question(){
  const router = useRouter()
  const { id,Question,Answers } = router.query



  return <Container component="main" maxWidth="xs">
      <Head>
        <title>EduFI QnA {id} </title>
      </Head>
  </Container>
}
