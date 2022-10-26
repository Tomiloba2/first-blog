import Head from "next/head";

const Footer = () => {
    const img={
        position:'relative',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
       // height:'25vh',
        //width:'25vw',
        //left:'22vw',
        filter:'brightness(0.8)',
        borderRadius:'50%',
        boxShadow:'0px 0px 2px #32274b,0px 0px 0px 5px #b2d2eb,8px 8px 15px #81a3dd,-8px -8px 15px #606ac7 '
    }
    return ( 
        <>
        <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css"/>
            
        </Head>
        <footer className="text-center m-3 p-1">
         <div>
         <p className="h6 container text-success">
            Hi There! I am <span className="h4">Omojola Tomiloba David</span> <br/><br />
            I am a front-end web developer and I specialize in HTML,CSS,
            JavaScript and React.<br/>
            I enjoy coding,writing,reading and learning new stuff daily.
         </p>
         <p className="h4">Get in Touch</p>
         <p className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-1 text-dark"><a href="" className="fa fa-twitter fa-2x"></a></div>
            <div className="col col-sm-2"><a href="" className="fa fa-linkedin fa-2x"></a></div>
            <div className="col col-sm-1"><a href="https://github.com/Tomiloba2" className="fa fa-github fa-2x"></a></div>
            <div className="col-sm-4"></div>
            
         </p>
          <a href="">Tomiloba2 &copy;2022</a>
 
         </div>
       </footer>
       </>
     );
}
 
export default Footer;