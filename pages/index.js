import Link from 'next/link' // HOC
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown'
import styles from '../stylesheets/pages/index-styles'

const PostLink = ({ show }) => (
  <li>
    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
      <a>{show.name}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6
      }
    `}</style>
  </li>
)

const Index = (props) => {
  return (
    <Layout>
      <ul>
        {
          props.shows.map(({ show }) => (
            <PostLink show={show} key={show.id} />
          ))
        }
      </ul>
      <style jsx>
        {styles}
      </style>
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
