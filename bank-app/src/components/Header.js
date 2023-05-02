// import React from 'react'

// const Header = () => {
//   return (
//     <div>Header</div>
//   )
// }

// export default Header

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
    return (
        <>



            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Bank app          </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default BrandExample;