import Head from "next/head";
import Link from "next/Link";
import { code,h4,img } from "../../component/Style";

const Box_model = () => {
    return ( 
        <>
          <Head>
          <title>Css Transform property</title>
          <meta name="keywords" content="css transform property" />
          <meta name="description" content="how to use css transform property" />
          <meta httpEquiv="X-UA-Compatible" content="IE=7" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name='author' content='Omojola Tomiloba David' />
       </Head>
       <main>
       <img src='/css-transform.jpg' style={img} alt='Transform property' />
          <h1 className=''>
               How to create CSS animations using <span>"transform"</span> property
         </h1>
         <pre className=''>
            Omojola Tomiloba David <br />September 16,2022
         </pre>
          <section className="">
             <article>
                 Animations are used to add special effects to elements on a webpage.
                 Such effects may include changing the shape,size and position of the element
                 on the page. <br />
                 In this article, we will learn how to create animations using html and css.
                 We will be focusing specifically on the <span className="h5">Transform</span> property
                 and its 'methods'
             </article><br /><br />
             <article id='content-table'>
               <h4 style={h4}>What we will cover</h4><br />
               <ul>
                  <li><a href="#getting-started">Getting started</a></li>
                  <li><a href="#translate">The "translate()" method </a></li>
                  <li><a href="#rotate">The "rotate()" method </a></li>
                  <li><a href="#scale">The "scale()" method </a></li>
                  <li><a href="#conclusion">Conclusion</a></li>
               </ul>
            </article>
            <article>
               <h4 id='getting-started' style={h4}>Getting started</h4>
               <div>
                  The <span>transform</span> property alows us to translate,rotate,scale
                  and skew elements either in 2-dimensional plane or 3-dimensionally. <br />
                  This property has the following methods
                  <ul>
                    <li>translate() method</li>
                    <li>rotate() method</li>
                    <li>scale() method</li>
                  </ul>
                  
               </div>
               <div>
                  <img src="/di.png" alt="transfrom-img" style={img} />
               </div>
            </article><br /><br />
            <article>
               <h4 id="translate" style={h4}>'translate()' method</h4>
               <div>
                  This method allows to move an element either horizontally or vertically. <br />
                  It is specified with two values.The first value represents movement in the 
                  horizontal direction while the second value represents movement in the vertical direction
               </div><br />
               <div>
                <img src="/transition.png" alt="transition.jpg"  style={img}/>
               </div>
               <div className="code" >
                  <pre style={code}>
                    <code>
                      div{
                        `{transform:translate(10px 20px)}`
                      }
                    </code>
                  </pre>
                  <p>
                    Looking at the adove written code, the translate method takes in two value.
                    The first moves the div element 10px horizontally while the second moves the element 20px
                    vertically
                  </p>
               </div>
               <div>
                  <p>
                    We can also specify a single value which will take care of the dispalcement
                    in both the horizontal and vertical directions. <br /> This is shown in the code sample below
                  </p><br/>
                  <pre style={code}>
                    <code>
                      div {
                        `transform:translate(20px)`
                      }
                    </code>
                  </pre>
                  <p>
                    This moves the div element 20px both horizontally and vertically
                  </p>
               </div>
            </article>
            <article id="rotate">
              <h3 style={h4}>"rotate()" method</h3>
              <p>
                The rotate() css method as the name implies, rotates
                an element without deforming it. <br />
                <div><img src="/rotate.jpg" alt="rotate.png" style={img} /></div>
                <br />
                Its value is defined as an angle.
                <br />
                A positive angle rotates in a clockwise direction while a negative angle rotates 
                counter-clockwise. <br />This is shown in the code below
              </p> <br />
              <div className="code">
                <pre style={code}>
                  <code>
                    img {
                      'transform:rotate(90deg)'
                    } <br />
                    div{`{transform:rotate(-180deg)}`}
                  </code>
                </pre>
              </div>
            </article>
            <article id="scale">
              <h3 style={h4}>'Scale()' method</h3>
              <p>
                The scale() method resizes an element on a 2D plane.
                The amount of scaling is defined by a vector,it can resize the horizontal and vertical
                dimensions at different scales
              </p>
              {/*<p><img src="/" alt="" /></p>*/}
              <p>
                The scale() function is specified with either one or two values/number
                <ul>
                  <li>
                    When one value is specified, it applies to both horizontal and vertical dimensions
                  </li>
                  <li>
                    When two values are specified,the first value applies to the horizontal dimension 
                    while the second value applies to the vertical dimension
                  </li>
                </ul>
              </p>
              <p>
                This is shown in the code below
              </p>
              <pre style={code}>
                <code>
                  div{`{transform:scale(1.1,0.5)}`} <br /><br />
                  img{`{transform:scale(0.5)}`}
                  
                </code>
              </pre>
            </article>
            <article id="conclusion">
               <h3 style={h4}>Conclusion</h3>
               <p>I believe that by now you should have gotten a basic understanding of the Css transform
                property and its different methods.The next step in the right direction would be to
                build projects while making use of the transform property.This will help you get better at it. <br />
              If this still looks a bit confusing to you, all you need is a  bit of patience and more pratice and
              you will get to understand this much better. <br />
              If you have any questions, you can get in touch with me and I'll be happy to chat with you.
               </p>
            </article>
            <article>
               <h3>Recent Blogs</h3>
               <p>You can also read my other blogs</p>
               <ul>
                  <li>
                     <Link href="/">
                     <a>
                        How to create a grid layout using html and css
                     </a></Link>
                  </li>
                  <li>
                     <Link href="/box-model/">
                     <a>
                        Understanding the CSS Box-model
                     </a>
                     </Link>
                  </li>
               </ul>
            </article>
          </section>
       </main>
        </>
     );
}
 
export default Box_model;