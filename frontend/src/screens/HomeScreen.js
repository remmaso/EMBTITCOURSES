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
   <section id="home-heading" class="p-5"></section>
    <section id="home-heading" class="p-5">
    <div className="dark-overlay">
      <div className="row">
        <div className="col">
          <div className="container pt-5">
            <h1>JOIN US</h1>
            <p className="d-md-block">EMBTEC is a very nimble organization that strives to provide tailor-made business solutions to micro and small-scale enterprises.Our ability to provide such unique solutions is born out of the realization that upstarts have different needs which can't be fulfiled by traditional one-size-fits-all solution from established corporations. Join us @ EMBTEC ...Providing Unique Solutions</p>
            <section id="icon-boxes" class="p-5">
    <div className="container">
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card bg-danger text-white text-center">
            <div className="card-body">
              <i className="fas fa-building fa-3x"></i>
              <h1>Vision</h1>
              To serve the mini, micro and small-scale enterprises (MMSE) and persons whose needs may not adequately be met by/through conventional Institutions/practices
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-dark text-white text-center">
            <div className="card-body">
              <i className="fas fa-bullhorn fa-3x"></i>
              <h1>Mission</h1>
              To provide cutting-edge, tailor-made but unique solutions to our varied clientele in a timely manner; always aware that one-size-fits-all don’t work in this segment of the market
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-danger text-white text-center">
            <div className="card-body">
              <i className="fas fa-comments fa-3x"></i>
              <h1>Core Values</h1>
              Excellence Modeled on Beauty, Transparency, Ethical values and good Conscience
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
        
            </div>
          </div>
        </div>
      </div>
      </section>
  
  
   <section id="our-services" class="p-5">
    <div class="dark-overlay">
      <div class="row">
        <div class="col">
          <div class="container p-5">
          <h2 className="text-center">Please be patient we are updating this Page</h2>
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
          <p>Send / Receive Money, Pay Bills etc</p>
        </div>
        <div className="col-md-4 mb-4 text-center">
        <i className="fas fa-laptop-code fa-4x"></i>
          <h3>Computer Training</h3>
          <p>Head-start with basics of computer training</p>
        </div>
        <div className="col-md-4 mb-4 text-center">
        <i className="fas fa-robot fa-4x"></i>
          <h3>Cyber Cafe</h3>
          <p>Cyber hub for daily browsing</p>
        </div>
        <div className="col-md-4 mb-4 text-center">
        <i className="far fa-save fa-4x"></i>
          <h3>Thrift and savings Scheme</h3>
          <p>Save for the future</p>
        </div>
        <div className="col-md-4 mb-4 text-center">
        <i className="fab fa-acquisitions-incorporated fa-4x"></i>
          <h3>Corporate IT Training</h3>
          <p>Deliver training to the corporate world </p>
        </div>
        <div className="col-md-4 mb-4 text-center">
        <i className="fab fa-microsoft fa-4x"></i>
          <h3>Software Development</h3>
          <p>Using the latest Technology and Architecture to develop a world class App</p>
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
