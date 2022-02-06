import * as React from 'react';
import axios from 'axios';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Head from 'next/head'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router'


export async function getStaticProps() {
    const res = await axios.get('http://mockdb:9233/api/v1/Questions/GetQuestions')
    const Questions = await res.data;
    return {
      props: {  Questions }
    }
  }


export default function QNA({Questions}) {

  const router = useRouter()



  return (
    <Container component="main" maxWidth="xs">
      <Head>
        <title>EduFI QnA page</title>
      </Head>

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

      {Questions ? Questions.map(((row) => (
          <Card sx={{ minWidth: 275 }} key= {row.studentid}>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                {row.title}
            </Typography>
            <Typography sx={{ mb: 1.0 }} color="text.secondary">
            Asked by {row.studentid}
            </Typography>
            <Typography variant="body2">
                {row.content}
                <br/>
                Module : {row.module}
            </Typography>
          </CardContent>
          <CardActions>
            <Button  size="small" onClick={() => router.push({pathname : '/questions/[id]', query : {id: row.questionid, question: JSON.stringify(row), answer: JSON.stringify(row) },})} > See Answers </Button>
          </CardActions>
        </Card>
        ))): null }
      
      

    </Container>
  )
}