import { Navbar, Nav, Image } from 'react-bootstrap';
import SongPlaceholder from '/images/2f.png';

const ApplePlayer = () => {
    return (
        <Navbar fixed="bottom" className="background-navbar py-2 d-flex d-lg-none m-3 rounded-4 shadow-lg">
            <Nav className="w-100 justify-content-between align-items-center px-2">

                <div className="d-flex align-items-center">
                    <Image src={SongPlaceholder} height="40" rounded className='cursor-pointer' />
                    <div className="ms-2 d-sm-block">
                        <p className="mb-0 text-white" >Titolo Brano</p>
                        <p className="mb-0 text-white-50">Nome Artista</p>
                    </div>
                </div>

                {/* Controlli del player */}
                <div className="d-flex align-items-center">
                    <Nav.Link href="#" className="text-white mx-2"><i className="bi bi-play-circle-fill" style={{ fontSize: '1.5rem' }}></i></Nav.Link>
                    <Nav.Link href="#" className="text-white mx-2"><i className="bi bi-skip-forward-fill"></i></Nav.Link>
                </div>
            </Nav>
        </Navbar>
    );
};

export default ApplePlayer;