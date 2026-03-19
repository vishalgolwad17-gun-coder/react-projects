import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobs = [
  {
    brandLogo: "https://imgs.search.brave.com/JRpwYzMw_Tnp6NxstRmBDM9kw8yQlaUyAR7WbU9b-F0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEzLzU3LzMyLzQ2/LzM2MF9GXzEzNTcz/MjQ2MjhfYUd2bUxK/OE1UMmNORWtwaHda/R0R6MU5IMWpqckR2/bVguanBn",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/GUF0-RK4Cyvf1Sdvdo2YlPlA58a6Fpo7aWXz2nYY-Nk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzViL2Zj/LzM3LzViZmMzNzg3/Y2ViZTFkZDFkYTE5/M2RiNWIwMDFlMzRl/LmpwZw",
    company: "Amazon",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$130/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/3LDad9syR8HUFnA8E9jlRk1XQPqUNFAj8rrytQ0f7CA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMS8x/Mi8xMy8wNS80NC9t/ZXRhLTY4Njc2MjNf/NjQwLnBuZw",
    company: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$100/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/XO9SbDmUocGVNtPxeVjzjAP4lhnlSXpkPMmW7Np7JOM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI5MDQ1/NjAuanBn",
    company: "Apple",
    datePosted: "3 weeks ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/wYqNxLGRzAuE8359cHbwwO8nFJzwMC4KEFRf9pvPuT0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjgv/MzM5Lzk2Mi9zbWFs/bC9taWNyb3NvZnQt/aWNvbi1sb2dvLXN5/bWJvbC1mcmVlLXBu/Zy5wbmc",
    company: "Microsoft",
    datePosted: "1 week ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$140/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/lPlgd2xkgzqxivxTcOUN9Ph6xjIGD0TbPBr5GMMe4lw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMx/MDMxMTU0NjAyLzIw/MTYtbmV0ZmxpeC1s/b2dvLTYwMHgzMTku/cG5n",
    company: "Netflix",
    datePosted: "4 days ago",
    post: "UI Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/szwVYyj9nIXppAwe7H1Zy1A6DC2hAI6AaL4AIHcvVSA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0Fkb2JlLUxvZ28t/MTk5My01MDB4MzQ0/LmpwZw",
    company: "Adobe",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$90/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/2AONrVn84CWKH4JZPqiYXl69X4OfF9Qc0onZ67MjlrE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MzM2LzczNS9zbWFs/bC90ZXNsYS1sb2dv/LXRlc2xhLWljb24t/dHJhbnNwYXJlbnQt/cG5nLWZyZWUtdmVj/dG9yLmpwZw",
    company: "Tesla",
    datePosted: "6 days ago",
    post: "Web Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$80/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/3uxpw_D-kqYHFf7ra_lliW4kSNQB2seQbbUqduUpD8w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi91YmVy/LWxvZ28tdWJlci1s/b2dvLXdoaXRlLWJh/Y2tncm91bmQtdmVj/dG9yLWZvcm1hdC1h/dmFsaWFibGUtMTI3/NjAyMzU2LmpwZw",
    company: "Uber",
    datePosted: "8 days ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$100/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/DIks2Pgq-EmeOn_ma2tywF2ZhCMOflxT7OP4LJrIIco/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzEwL2FpcmJuYi1s/b2dvLTAucG5n",
    company: "Airbnb",
    datePosted: "12 days ago",
    post: "React Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Remote, India"
  }
];

console.log(jobs)

  return (
    <div className='parent'>
    {jobs.map(function(items,idx){
      return <div key={idx}>
        <Card company={items.company} post={items.post} datePosted={items.datePosted} tag1={items.tag1} tag2={items.tag2} pay={items.pay} location={items.location} logo={items.brandLogo}/>
      </div>
    })}
      </div>
  )
}

export default App
