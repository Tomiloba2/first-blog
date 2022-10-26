import Head from 'next/head'
import Link from 'next/Link'
import { code,img,h4 } from '../component/Style';
const Home = () => {
  return ( 
    <>
       <Head>
          <title>CSS Grid</title>
          <meta name="keywords" content=" Grid Layout" />
          <meta name="description" content="creating grid layout using html and css" />
          <meta httpEquiv="X-UA-Compatible" content="IE=7" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name='author' content='Omojola Tomiloba David' />
       </Head>
       <main>
          <h1 className=''>
               How to create a Grid layout using html and css
         </h1>
         <pre className=''>
            Omojola Tomiloba David <br />September 30,2022
         </pre>
          <section className="">
          <img src="/grids.jpg" alt="grid-layout" style={img} />
             <article>
                 When talking about buliding a website layout, it is very difficult to avoid mentioning the 
                 grid layout. More than 70% of modern websites on the internet  make use of the grid system one
                 way or the other. This goes to show how important grids are when it comes to front-end web
                 development.
                 <br />
                 Alot of junior web developers still find it difficult to create a grid layout without depending
                 on a framework like bootstrap or materialize.
                 <br />
                 In this article, we will be creating a simple grid layout using html and Css. <br />
                 <img src='/css-grid.png' alt='grid' style={img} />
             </article><br /><br />
             <article id='content-table'>
               <h4>What we will cover</h4><br />
               <ul>
                  <li><a href="#getting-started">Getting started</a></li>
                  <li><a href="#html-markup">Creating the html markup</a></li>
                  <li><a href="#display">The "Display" property </a></li>
                  <li><a href="#columns">The 'grid-template-columns' property</a></li>
                  <li><a href="#rows">The 'grid-template-rows' property</a></li>
                  <li><a href="#justify">The 'Justify-content' property</a></li>
                  <li><a href="#align">The 'align-content' property</a></li>
                  <li><a href="#conclusion">Conclusion</a></li>
               </ul>
            </article>
            <article>
               <h4 id='getting-started' style={h4}>Getting started</h4>
               <div>
                  Before we dive into the code, it is imperative that we understand the following key
                  concept
                  <ol>
                     <li>
                        Grids are made up of rows and columns. the horizontal line are the rows while the 
                        vertical lines are called columns
                     </li>
                     <li>
                        The space between rows and columns are called grid-gaps
                     </li>
                  </ol>
                  After going through this article, you  should have a better understanding of the grid layout.
                  Lets dive right in.
               </div>
            </article><br /><br />
            <article>
               <h4 id="html-markup" style={h4}>Creating the markup</h4>
               <div>
                  A grid layout is made up of a parent element with one or more children element
                  which are nested within the parent element.This is shown in the code below
                  <br />
                  <pre style={code}>
                     <code>
                        &lt;section class='grid-container'&gt; <br />
                              &lt;div class="item"&gt;  item1   &lt;/div&gt; <br />
                              &lt;div class="item"&gt;  item2   &lt;/div&gt; <br />
                              &lt;div class="item"&gt;  item3   &lt;/div&gt;<br />
                              &lt;div class="item"&gt;  item4   &lt;/div&gt;<br />
                              &lt;div class="item"&gt;  item5  &lt;/div&gt;<br />
                              &lt;div class="item"&gt;  item6   &lt;/div&gt;<br />
                        &lt;/section&gt;
                     </code>
                  </pre>
               </div>
            </article>
            <article>
               <h4 id="display" style={h4}>The Display property</h4>
               <p>The "section' tag becomes a grid container when we set the <span>display</span> property 
               to <span>grid</span> or <span>inline-grid</span></p>
               <pre style={code}>
                  <code>
                     section{`{display:grid}`}
                  </code>
               </pre>
               <p>
                  At this point, no visible change occurs because we are yet
                  to define the number of rows and columns.This brings us to the next property.
               </p>
            </article>
            <article>
               <h4 id="columns" style={h4}>The 'grid-template-columns' property</h4>
               <p>We can specify the number of columns we want our grid layout to have
                  using the "grid-template-columns" property
                  <pre style={code}>
                     <code>
                        section{`{grid-template-columns:auto auto auto}`}
                     </code>
                  </pre>
                  from the above written code,we have defined three columns with a width of auto. Likewise,
                  we can also set a fixed width to each columns. 
                  <pre style={code}>
                     <code>
                       section{`{grid-template-columns:100px 200px 300px}`}
                     </code>
                  </pre>
               </p>
            </article>
            <article>
               <h4 id="rows" style={h4}>The 'grid-template-rows' property</h4>
               <p>Likewise, we can also specify the number of columns we want our grid layout to have
                  using the "grid-template-rows" property
                  <pre style={code}>
                     <code>
                        section{`{grid-template-rows:auto auto auto}`}
                     </code>
                  </pre>
                  from the above written code,we have defined three rows with an assigned width of auto. Likewise,
                  we can also set a fixed width to each row. 
                  <pre style={code}>
                     <code>
                       section{`{grid-template-rows:100px 200px 300px}`}
                     </code>
                  </pre>
               </p>
            </article>
            <article>
               <h4 id="justify" style={h4}>The 'Justify-content' property</h4>
               <p>
               The 'Justify-content' property aligns the entire grid inside the container.
               The 'Justify-content' property is defined with the following values
               <ul>
                  <li>
                     start <br />
                     <pre style={code}>
                        <code>
                           section{`{justify-content:start}`}
                        </code>
                     </pre>
                  </li>
                  <li>
                     end <br />
                     <pre style={code}>
                        <code>
                           section{`{justify-content:end}`}
                        </code>
                     </pre>
                  </li>
                  <li>
                     center <br />
                     <pre style={code}>
                        <code>
                           section{`{justify-content:center}`}
                        </code>
                     </pre>
                  </li>
                  <li>
                     space-between <br />
                     <pre style={code}>
                        <code>
                           section{`{justify-content:space-between}`}
                        </code>
                     </pre>
                  </li>
                  <li>
                     space-around <br />
                     <pre style={code}>
                        <code>
                           section{`{justify-content:space-around}`}
                        </code>
                     </pre>
                  </li>
                  <li>
                     space-evenly <br />
                     <pre style={code}>
                        <code>
                           section{`{justify-content:space-evenly}`}
                        </code>
                     </pre>
                  </li>
               </ul>
               </p>
            </article>
            <article>
               <h4 id="align" style={h4}>The 'align-content' property</h4>
               <p>
               The 'align-content' property vertically aligns the entire grid inside the container.
               The 'align-content' property is defined with the following values <br />
               <div style={{
                  textDecoration:'underline',
               }}>
               Note:The grid total eight has to be less than the container's height
                for the align content property to have any effect
               </div>
               <ul>
                  <li>
                     start <br />
                     <pre style={code}>
                        <code>
                           section{`{align-content:start}`}
                        </code>
                     </pre>
                  </li>
                  <li>
                     end <br />
                     <pre style={code}>
                        <code>
                           section{`{align-content:end}`}
                        </code>
                     </pre>
                  </li>
                  <li>
                     center <br />
                     <pre style={code}>
                        <code>
                           section{`{align-content:center}`}
                        </code>
                     </pre>
                  </li>
                  <li>
                     space-between <br />
                     <pre style={code}>
                        <code>
                           section{`{align-content:space-between}`}
                        </code>
                     </pre>
                  </li>
                  <li>
                     space-around <br />
                     <pre style={code}>
                        <code>
                           section{`{align-content:space-around}`}
                        </code>
                     </pre>
                  </li>
                  <li>
                     space-evenly <br />
                     <pre style={code}>
                        <code>
                           section{`{align-content:space-evenly}`}
                        </code>
                     </pre>
                  </li>
               </ul>
               </p>
               <img src="grid2.png" alt="grid-layout" style={img}/>
            </article>
            <article>
               <h4 id="conclusion" style={h4}>Conclusion</h4>
               <p>I believe that by now you should have gotten a basic understanding of the Css grid layout.
                  If this still looks a bit confusing to you, all you need is a  bit of patience and  more pratice 
                  and you will get to understand this much better. <br />
                  If you have any questions, you can get in touch with me and I'll be happy to chat with you.
               </p>
            </article>
            <article>
               <h3>Recent Blogs</h3>
               <p>You can also read my other blogs</p>
               <ul>
                  <li>
                     <Link href="/box-model">
                       <a>
                       Understanding the CSS Box-model
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
 
export default Home;