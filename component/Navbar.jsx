import Link from 'next/Link'

const Navbar = () => {
    return ( 
          <nav className="navbar primary">
            <label className="navbar-brand ">
                <Link href="https://github.com/Tomiloba2">
                    <a>
                        <h2 className='text-secondary h1 text-left' style={{
                            fontFamily:'algerian',
                            textDecoration:'none'
                            }}>
                            Tomiloba<span className="text-info">2</span>
                        </h2>
                    </a>
                </Link>
            </label>
          </nav>
     );
}
 
export default Navbar;