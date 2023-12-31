import Footer from './footer'
import Header from './header'


export default function Layout (
    {children}
){
    return (
       
        <>
       
<Header link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"></Header>

  {children}
<Footer/>

        </>
      

    )
}