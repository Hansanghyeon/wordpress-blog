// import Image from 'next/image'

const Image = ({ src, ...props }) => {
  const domain = process.env.NODE_ENV === 'production' ? '' : process.env.NEXT_PUBLIC_WORDPRESS_URL;
  return (
    <img src={`${domain}${src}`} {...props} />
  )
}

export default Image