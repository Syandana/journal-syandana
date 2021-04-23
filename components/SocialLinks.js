import data from '../lib/data/contact.json'

const SocialLinks = () => (
  <div>
    {data.map(data => (
      <a href={data.link} target="_blank" className={data.className} key={data.id}>
        <i className={data.type}></i>
      </a>
    ))}
  </div>
)

export default SocialLinks;