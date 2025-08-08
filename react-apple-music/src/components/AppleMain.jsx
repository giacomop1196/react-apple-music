import { Container, Image, Spinner, Alert, Row, Col } from 'react-bootstrap';
import ChillImg from '/images/1a.png';
import MusicaUnoImg from '/images/1b.png';
import PrologoImg from '/images/2a.png';
import WandererImg from '/images/2b.png';
import BubbleImg from '/images/2c.png';
import StephanImg from '/images/2d.png';
import JuliaImg from '/images/2e.png';

import { useState, useEffect } from 'react'




const AppleMain = ({ searchTerm }) => {

    const apiLink = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchTerm || 'linkin park'}`

    const [results, setResults] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        // La chiamata all'API viene eseguita solo se searchTerm non è vuoto
        if (searchTerm) {
            getResults();
        } else {
            // Se searchTerm è vuoto, mostra i risultati predefiniti (es. 'linkin park')
            getResults('linkin park');
        }
    }, [searchTerm]);

    //Funzione per recuperare i dati dall'api
    const getResults = (query = searchTerm) => {

        const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`;

        fetch(url, {
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error('Errore nel recupero dei dati')
            })
            .then((song) => {
                console.log(song, 'canzoni arrivate')
                setResults(song)
                setIsLoading(false)
            })
            .catch((error) => {

                console.error("Errore nel recupero dei dati:", error);
                setIsLoading(false)
                setIsError(true)
            })
    }



    return (
        <>

            {/* Spinner */}
            {isLoading && (
                <Container fluid className='background-main mt-5 pt-5 min-vh-100'>
                    <div className="text-center mb-3">
                        <Spinner animation="grow" />
                    </div>
                </Container>
            )}
            {/* Errore se vado nel catch */}
            {isError && (
                <Container fluid className='background-main mt-5 pt-5 min-vh-100'>
                    <Alert variant="danger" className="text-center">
                        Errore nel recupero dei dati
                    </Alert>
                </Container>
            )}
            {results && (
                <Container fluid className='background-main mt-5 pt-5'>
                    <div className='main-content-wrapper'>

                        {/* Sezione Novità */}
                        <div className="mb-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h2 className="mb-0">Novità</h2>
                            </div>
                            <div className="d-flex flex-column flex-lg-row gap-3">
                                {/* Carta 1: Apple Music Chill */}
                                <div style={{ minWidth: '300px' }}>
                                    <p className="text-white-50 mt-2 mb-0">NUOVA STAZIONE RADIO</p>
                                    <h3 className="text-white">Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill</h3>
                                    <p className="text-white-50">Apple Music Radio</p>
                                    <Image src={ChillImg} rounded fluid className='cursor-pointer' />

                                </div>
                                {/* Carta 2: Música Uno */}
                                <div style={{ minWidth: '300px' }}>
                                    <p className="text-white-50 mt-2 mb-0">NUOVA STAZIONE RADIO</p>
                                    <h3 className="text-white">Ecco la nuova casa della musica latina</h3>
                                    <p className="text-white-50">Apple Music Radio</p>
                                    <Image src={MusicaUnoImg} rounded fluid className='cursor-pointer' />
                                </div>
                            </div>
                        </div>

                        {/* Sezione Nuovi episodi radio */}
                        <div className="mb-5">
                            <h2 className="mb-3">Nuovi episodi radio &gt;</h2>
                            <div className="d-flex overflow-auto gap-3">
                                <div style={{ minWidth: '180px' }}>
                                    <Image src={PrologoImg} rounded fluid className='cursor-pointer' />
                                    <p className="mt-2 mb-0">Prologos con Abuelo</p>
                                </div>
                                <div style={{ minWidth: '180px' }}>
                                    <Image src={WandererImg} rounded fluid className='cursor-pointer' />
                                    <p className="mt-2 mb-0">The Wanderer</p>
                                </div>
                                <div style={{ minWidth: '180px' }}>
                                    <Image src={BubbleImg} rounded fluid className='cursor-pointer' />
                                    <p className="mt-2 mb-0">Michael Bublé & Carly Pearce</p>
                                    <p className="text-white-50">Michael Bublé & Zane Lowe</p>
                                </div>
                                <div style={{ minWidth: '180px' }}>
                                    <Image src={StephanImg} rounded fluid className='cursor-pointer' />
                                    <p className="mt-2 mb-0">Stephan Moccio & Zane Lowe</p>
                                    <p className="text-white-50">Stephan Moccio: The Zane Lowe Interview</p>
                                </div>
                                <div style={{ minWidth: '180px' }}>
                                    <Image src={JuliaImg} rounded fluid className='cursor-pointer' />
                                    <p className="mt-2 mb-0">Guest Julia Michaels</p>
                                    <p className="text-white-50">Chart Spotlight: Julia Michaels</p>
                                </div>
                            </div>
                        </div>

                        {/* Sezione Nuove uscite */}
                        <div>
                            <h2 className="mb-3">
                                {searchTerm ? `Risultati per "${searchTerm}"` : 'Novità'}
                            </h2>
                            <Row className="g-0">
                                {results.data.map((song) => (
                                    <Col key={song.id} xs={6} sm={4} md={3} lg={2} className="p-1">
                                        <div style={{ aspectRatio: '1 / 1', width: '100%', position: 'relative' }}>
                                            <Image src={song.album.cover} alt={song.title} rounded fluid style={{ top: 0, left: 0, }}
                                                className='cursor-pointer h-100 w-100 object-fit-cover position-absolute' />
                                        </div>
                                        <p className="mt-2 mb-0 text-truncate" title={song.title}>{song.title}</p>
                                        <p className="text-white-50 text-truncate" title={song.artist.name}>{song.artist.name}</p>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                        {/* Alert per ricerca senza risultati */}
                        {results && results.data && results.data.length === 0 && (
                            <Container fluid className='background-main pt-5'>
                                <Alert variant="info" className="text-center">
                                    Nessun risultato per "{searchTerm}".
                                </Alert>
                            </Container>
                        )}

                        {/* Sezione Altro da esplorare - INSERITA QUI */}
                        <div className="my-5">
                            <h2 className="mb-4">Altro da esplorare</h2>
                            <Row className="g-3">
                                <Col xs={12} sm={6} md={4}>
                                    <div className="explore-card">
                                        Esplora per genere
                                        <span className="arrow-icon">&gt;</span>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="explore-card">
                                        Worldwide
                                        <span className="arrow-icon">&gt;</span>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="explore-card">
                                        Video musicali
                                        <span className="arrow-icon">&gt;</span>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="explore-card">
                                        Decenni
                                        <span className="arrow-icon">&gt;</span>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="explore-card">
                                        Classifiche
                                        <span className="arrow-icon">&gt;</span>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="explore-card">
                                        Nuovi artisti
                                        <span className="arrow-icon">&gt;</span>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="explore-card">
                                        Attività e stati d'animo
                                        <span className="arrow-icon">&gt;</span>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="explore-card">
                                        Audio spaziale
                                        <span className="arrow-icon">&gt;</span>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="explore-card">
                                        Hit del passato
                                        <span className="arrow-icon">&gt;</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container >
            )}
        </>
    )
}

export default AppleMain