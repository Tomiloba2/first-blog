import Head from "next/head";
import Link from 'next/Link';
import { code,h4,img } from "../../component/Style";

const Box_model = () => {
    return ( 
        <>
          <Head>
          <title>Css Box Model</title>
          <meta name="keywords" content="The css Box Model" />
          <meta name="description" content="explaning the css box model" />
          <meta httpEquiv="X-UA-Compatible" content="IE=7" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name='author' content='Omojola Tomiloba David' />
       </Head>
       <main>
         <img src='/box-model.png' style={img} alt='box-model img' />
          <h1 className=''>
               Css Box Model
         </h1>
         <pre className=''>
            Omojola Tomiloba David <br />September 15,2022
         </pre>
          <section className="">
             <article>
                 The box model is the foundation of website layout design.Before you can become an expert
                 at web layout design, one must have a solid understanding of the  Css box model.
                 In this article, we will be focusing on the fundamental principles of the box model
             </article><br /><br />
             <article id='content-table'>
               <h4>What we will cover</h4><br />
               <ul>
                  <li><a href="#getting-started">Getting started</a></li>
                  <li><a href="#border-box">Border-box property </a></li>
                  <li><a href="#conclusion">Conclusion</a></li>
               </ul>
            </article>
            <article>
               <h4 id='getting-started' style={h4}>Getting started</h4>
               <div>
                  To begin with, we must understand that each element on a webpage is represented as a
                  simple box or a rectangular box. Each box consist of the following properties
                  <dl>
                    <dt>Content</dt>
                    <dd>
                      The content area is where the actual content is displayed
                    </dd>
                    <dt>Padding</dt>
                    <dd>
                      This is the area between the content and the border.It is transparent
                    </dd>
                  <dt>Border</dt>
                    <dd>
                      This represents the area between the margin and the padding.
                      its width, style and color can be changed.
                    </dd>
                    <dt>Margin</dt>
                    <dd>
                      This is the area outside the border or outside the css box.It is transparent
                    </dd>
                  </dl>
               </div>
               <div>
                To better understand the box model, here is an illustration
               </div>
               <div>
                  <img src="/css-box.gif" alt="css-box" style={img} />
               </div>
            </article><br /><br />
            <article>
               <h4 id="border-box" style={h4}>'border-box' property</h4>
               <div>
                  When setting the width and the height of a box,the css properties only sets the width/height
                  of the content without including the margin and the border.
                   <p>This is illustrated in the diagram below</p>
                   <img src="/width-box.jpg" alt='box-model img' style={img} /><br />
                  This will result in the total height/width being more than the set height/width.<br/>
                  As a result of this situation, a few problems may arise in som cases.
                  For example if we only want a CSS box to occupy 300px width or height,
                  <pre style={code}>
                     <code>
                        div{`{width:300px; height:300px}`}
                     </code>
                  </pre>
                  we can set the width or height property to 300px. But what will be displayed on the browser may be more than
                  300px.
                  This is because the width/height of the border and the padding will be added to the set width/height
                  of 300px<br/>
               </div><br />
               <div>
                  To solve this problem, we need to set the <span style={{fontWeight:'900'}}>box sizing</span> css
                   property of the element to  <span style={{fontWeight:'900'}}>border-box</span><br />
                   This will set the width and the height of the image to include not only the
                   content but both the padding and border <br />
                   <pre style={code}>
                     <code>
                        div{`{box-sizing:border-box}`}
                     </code>
                   </pre>
                   <img src="/box-sizing.png" alt="illustration"  style={img}/><br />
                   Now the final rendered width/height of the entire box of the element will
                   be set to 300px
               </div>
            </article>
            <article id="">
               <h3 style={h4} id='conclusion'>Wrapping up</h3>
               <p>I believe that by now you should have gotten a basic understanding of the Css Box Model.
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
                        </a>
                     </Link>
                  </li>
                  <li>
                     <Link href="/animation/">
                     <a>
                        How to create animations using Css "transform" property
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