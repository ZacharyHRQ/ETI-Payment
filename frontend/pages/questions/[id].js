import { useRouter } from 'next/router'

export default function Question(){
  const router = useRouter()
  const { qid } = router.query

  return <p>Post: {qid}</p>
}
