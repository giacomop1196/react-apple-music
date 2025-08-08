import { useState } from 'react';
import { Navbar, Container, Nav, Button, Form, InputGroup, FormControl, ListGroup, Image, Offcanvas } from 'react-bootstrap';
import AppleLogo from '/music.svg';
import AppleMain from './AppleMain';
import AppleFooter from './AppleFooter';
import ApplePlayer from './ApplePlayer';

const AppleNavbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [searchTerm, setSearchTerm] = useState(''); // Nuovo stato per il termine di ricerca

    const handleClose = () => setShowSidebar(false);
    const handleShow = () => setShowSidebar(true);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const input = e.target.elements.search.value;
        if (input.trim() !== '') {
            setSearchTerm(input);
            handleClose(); 
        }
    };

    const SidebarContent = () => (
        <>
            {/* Search bar sidebar - Modificata per usare la funzione handleSearchSubmit */}
            <Form className="d-flex w-100 mb-3 px-3" onSubmit={handleSearchSubmit}>
                <InputGroup>
                    <InputGroup.Text className="bg-secondary bg-opacity-25 border-0 text-white">
                        <i className="bi bi-search apple-color-red"></i>
                    </InputGroup.Text>
                    <FormControl name="search" type="search" placeholder="Cerca" className="bg-secondary bg-opacity-25 border-0 text-white"/>
                </InputGroup>
            </Form>

            {/* Menu */}
            <Nav className="flex-column w-100">
                <ListGroup variant="flush">
                    <ListGroup.Item action href="#" active className="bg-secondary bg-opacity-50 border-0 apple-color-red">
                        <i className="bi bi-house-door-fill me-3"></i> Home
                    </ListGroup.Item>
                    <ListGroup.Item action href="#" className="bg-transparent border-0 apple-color-red">
                        <i className="bi bi-music-note-list me-3"></i> Novità
                    </ListGroup.Item>
                    <ListGroup.Item action href="#" className="bg-transparent border-0 apple-color-red">
                        <i className="bi bi-broadcast me-3"></i> Radio
                    </ListGroup.Item>
                </ListGroup>
            </Nav>
        </>
    );

    return (
        <>
            {/* Sidebar desktop */}
            <Navbar expand="lg"
                className="d-none d-lg-flex flex-column align-items-start position-fixed top-0 bottom-0 start-0 background-navbar border-end border-secondary"
                style={{ width: '240px', zIndex: 1030 }}>
                <Navbar.Brand href="#" className="mb-4 mx-auto">
                    <Image src={AppleLogo} height="25" alt="Apple Music Logo" />
                </Navbar.Brand>
                <SidebarContent />
            </Navbar>

            {/* Sidebar mobile - Offcanvas */}
            <Offcanvas show={showSidebar} onHide={handleClose} className="background-navbar text-white" style={{ width: '240px' }}>
                <Offcanvas.Header closeButton closeVariant="white">
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SidebarContent />
                </Offcanvas.Body>
            </Offcanvas>

            {/* Top Navbar */}
            <Navbar fixed="top" className="p-lg-3 background-navbar"
                style={{ zIndex: 1020, marginLeft: '0', width: '100%' }}>
                <Container fluid className="justify-content-between">
                    {/* Desktop */}
                    <div className="d-none d-lg-flex w-100 align-items-center justify-content-between"
                        style={{ marginLeft: '240px', width: 'calc(100% - 240px)' }} >
                        {/* Player */}
                        <Nav className="d-flex align-items-center">
                            <Nav.Link href="#" className="mx-2 text-white"><i className="bi bi-skip-backward-fill"></i></Nav.Link>
                            <Nav.Link href="#" className="mx-2 text-white"><i className="bi bi-play-circle-fill" style={{ fontSize: '1.5rem' }}></i></Nav.Link>
                            <Nav.Link href="#" className="mx-2 text-white"><i className="bi bi-skip-forward-fill"></i></Nav.Link>
                        </Nav>

                        {/* Search Desktop */}
                        <Form className="flex-grow-1 mx-3" onSubmit={handleSearchSubmit}>
                            <InputGroup>
                                <FormControl name="search" type="text" placeholder="Cerca su Apple Music" className="bg-secondary bg-opacity-25 border-0 text-white"
                                    style={{ minWidth: '400px', '--bs-bg-opacity': '.1' }} />
                            </InputGroup>
                        </Form>

                        {/* Login */}
                        <Nav className="ms-auto">
                            <Nav.Link href="#" className="me-2 text-white"><i className="bi bi-volume-up-fill"></i></Nav.Link>
                            <Button className="button-red me-2" size="sm">Accedi</Button>
                        </Nav>
                    </div>

                    {/* Mobile */}
                    <div className="d-flex d-lg-none w-100 align-items-center justify-content-between">
                        {/* Pulsante sidebar */}
                        <Button variant="outline-light" size="sm" onClick={handleShow}>
                            <i className="bi bi-list"></i>
                        </Button>
                        <Navbar.Brand href="#" className="mx-auto d-flex align-items-center">
                            <Image src={AppleLogo} height="25" alt="Apple Music Logo" className="me-2" />
                        </Navbar.Brand>
                        <Button className='button-mobile' size="sm">Accedi</Button>
                    </div>
                </Container>
            </Navbar>

            {/* Main - Passa searchTerm come prop */}
            <AppleMain searchTerm={searchTerm} />
            <ApplePlayer/>
            <AppleFooter/>
        </>
    );
};

export default AppleNavbar;