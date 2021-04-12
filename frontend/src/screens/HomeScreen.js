import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <Container>
        <Row>
    <header id="page-header2">
    <div className="container">
      <div className="row">
        <div className="col-md-6 m-auto text-center">
          <h2>Embtec Konzultz</h2>
          <p><h5>Providing unique solution...</h5></p>
        </div>
      </div>
    </div>
  </header>
  <section id="home-heading" class="p-5">
  <div className="dark-overlay">
      <div className="row">
        <div className="col">
          <div className="container pt-5">
            <h1>JOIN US</h1>
            <p className="d-md-block">Embtec is a very nimble organization that strives to provide tailor made business enterprises.Our solutions to micro and small scale enterprises.Our ability to provide such unique solutions is born out of the realization that upstarts have different needs which can't be fulfiled by traditional one-size-fits-all solution from established corporation. Join us @ EMBTEC, providing unique solutions......</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="video-play" class="p-5">
    <div class="dark-overlay">
      <div class="row">
        <div class="col">
          <div class="container p-5">
            <Link to="#" class="video" data-video="https://www.youtube.com/watch?v=CTZUOkvAqo0" data-toggle="modal" data-target="#videoModal">
              <i class="fas fa-play fa-3x"></i>
            </Link>
            <h2>Our Services</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
    
    <section id="home-icons" class="py-5">
    <div className="container grid-3">
      <div className="row">
        <div className="col-md-4 mb-4 text-center">
        <i className="fas fa-money-check-alt fa-4x"></i>
          <h3>Agent Banking</h3>
          <p>Sending and recieving money</p>
        </div>
        <div className="col-md-4 mb-4 text-center">
        <i className="fas fa-laptop-code fa-4x"></i>
          <h3>Computer Training</h3>
          <p>Head start with basics of computer training and empowerment</p>
        </div>
        <div className="col-md-4 mb-4 text-center">
        <i className="fas fa-robot fa-4x"></i>
          <h3>Cyber Cafe</h3>
          <p>Cyber hub for daily browsing</p>
        </div>
        <div className="col-md-4 mb-4 text-center">
        <i className="far fa-save fa-4x"></i>
          <h3>Drift and savings Scheme</h3>
          <p>Start Savings for future</p>
        </div>
        <div className="col-md-4 mb-4 text-center">
        <i className="fab fa-acquisitions-incorporated fa-4x"></i>
          <h3>Corporate IT Training</h3>
          <p>Deliever training to the corporate world to enhance productivity</p>
        </div>
        <div className="col-md-4 mb-4 text-center">
        <i className="fab fa-microsoft fa-4x"></i>
          <h3>Software Development</h3>
          <p>Using the latest Technology and Archtecture to develop a world class app</p>
           </div>
          </div>
        </div>
      </section>
              </Row>
      </Container>
      <h2 className="text-center">Course Gallery</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen
