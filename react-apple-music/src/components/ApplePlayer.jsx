import { Navbar, Nav, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const ApplePlayer = () => {

    // Leggo lo stato della canzone corrente dal nuovo store
    const currentSong = useSelector((state) => state.player.currentSong);
    console.log(currentSong)

    return (
        <Navbar fixed="bottom" className="background-navbar py-2 d-flex d-lg-none m-3 rounded-3 shadow-lg">
            <Nav className="w-100 justify-content-between align-items-center px-2">
                {/* Immagine e titolo */}
                <div className="d-flex align-items-center">
                    <Image 
                        src={currentSong ? currentSong.album.cover : ''} 
                        height="40" 
                        rounded 
                    />
                    <div className="ms-2 d-sm-block">
                        <p className="mb-0 text-white" style={{ fontSize: '0.8rem' }}>
                            {currentSong ? currentSong.title : 'Nessuna canzone'}
                        </p>
                        <p className="mb-0 text-white-50" style={{ fontSize: '0.7rem' }}>
                            {currentSong ? currentSong.artist.name : 'Nessun artista'}
                        </p>
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