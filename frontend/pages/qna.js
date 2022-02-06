import * as React from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';


export async function getStaticProps() {
    const res = await axios.get('http://mockdb:9233/api/v1/Questions/GetQuestions')
    const Questions = await res.data;
    const res2 = await axios.get('http://mockdb:9233/api/v1/Answers/GetAnswers/1')
    const Answers = await res2.data;
    console.log(res2.data)
    return {
      props: {  Questions , Answers }
    }
  }

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


export default function QNA({Questions,Answers}) {
  const router = useRouter()
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  async function makePayment(answer) {
    const jsonString = JSON.stringify({
        senderwalletid : "S10185319",
        receiverwalletid : answer.studentid,
        answerid : answer.answerid,
        tokenid : "CM", 
        numtokens : 1,
    });
    console.log(answer.Paid)
    console.log(jsonString);
    const res = await fetch('http://localhost:9232/api/v1/payment/reveal/', {
      body : jsonString,
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',

      },
      mode : 'no-cors',
    })
    console.log(res.status);
    const res1 = await fetch("http://localhost:9233/api/v1/Answers/ChangeStatus/" + answer.answerid, {
      method: 'POST',
    })
    console.log(res1.status)
    if (res.status === 0){ 
      alert("Payment Successful");
      router.push('/')
    }
}
  
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
          <Card sx={{ minWidth: 345 }} key= {row.studentid}>
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
            <CardActions disableSpacing>

                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                <ExpandMoreIcon />

                </ExpandMore>
                
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                {Answers ? Answers.map((row) => (
                    <Card sx={{ minWidth: 180 }} key= {row.answerid}>
                    <CardContent>
                      <Typography sx={{ mb: 1.0 }} color="text.secondary">
                      Answered by {row.studentid}
                      </Typography>

                      {row.paid === 1 ?  <Typography variant="body2">
                          {row.content}
                      </Typography>
                      : <Button
                      onClick={()=> makePayment(row)}
                    >
                      Pay
                    </Button>
                      }

                    </CardContent>
                    </Card>
                )) : null}
              </CardContent>
            </Collapse>
        </Card>
        ))): null }
      
      

    </Container>
  )
}