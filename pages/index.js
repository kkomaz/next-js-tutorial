import Link from 'next/link' // HOC
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

const Index = (props) => {
  return (
    <Layout>
      <ul>
        {
          props.shows.map(({ show }) => (
            <li key={show.id}>
              <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                <a>{show.name}</a>
              </Link>
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`show data fetched.  Count: ${data.length}`) // Shows up on the server

  return {
    shows: data
  }
}

export default Index
