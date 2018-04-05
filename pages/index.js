import Link from 'next/link'

export default () => {
  return (
    <div>
      <h1>Welcome to NextJS!</h1>
      <Link href="/user">
        <a>Look at the time!</a>
      </Link>
    </div>
  )

}