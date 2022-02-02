import React from "react";
import {
  BrowserRouter as Router,
  Link,
  matchPath,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import { Blog } from "./pages/blog";
import { Register } from "./pages/register";
import { Navigation } from "./shared-components/header";
import { Banner } from "./shared-components/banner";
import { Slider } from "./shared-components/slider";
import { Col, Row } from "react-bootstrap";
import { Services } from "./shared-components/services";
import { CustomFooter } from "./shared-components/footer";

function App() {
  return (
    <>
      {/* Page loading spinner*/}
      <div className="page-loading active">
        <div className="page-loading-inner">
          <div className="page-spinner" />
          <span>Loading...</span>
        </div>
      </div>
      {/* Main content*/}
      {/* Wraps everything except footer to push footer to the bottom of the page if there is little content */}
      <main className="page-wrapper position-relative">
        {/* Navbar */}
        {/* Remove .navbar-sticky class to detach .navbar from page scroll */}
        <header className="header navbar navbar-expand-lg navbar-light bg-light navbar-sticky navbar-floating">
          <div className="container px-0 px-xl-3">
            <a
              className="navbar-brand order-lg-1 me-lg-5 me-0 pe-lg-2"
              href="index.html"
            >
              <img
                src="../assets/img/construction/logo-dark.svg"
                alt="Createx Logo"
                width={130}
              />
            </a>
            <div className="d-flex align-items-center order-lg-3">
              <a className="navbar-tool d-flex" href="tel:(405)555-0128">
                <i className="navbar-tool-icon ci-iphone" />
                <div className="ms-2 ps-1">
                  <h6 className="navbar-tool-title">Call us</h6>
                  <span className="navbar-tool-label d-xl-inline-block d-none">
                    (405) 555-0128
                  </span>
                </div>
              </a>
              <a className="navbar-tool d-flex" href="mailto:hello@example.com">
                <i className="navbar-tool-icon ci-chat" />
                <div className="ms-2 ps-1">
                  <h6 className="navbar-tool-title">Talk to us</h6>
                  <span className="navbar-tool-label d-xl-inline-block d-none">
                    hello@example.com
                  </span>
                </div>
              </a>
              <button
                className="navbar-toggler ms-2 me-n3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse1"
                aria-expanded="false"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>
            <nav
              className="collapse navbar-collapse order-lg-2"
              id="navbarCollapse1"
            >
              <ul className="navbar-nav me-auto text-nowrap">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle active"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Home
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="index.html">
                        Homepage v.1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="index-v2.html">
                        Homepage v.2
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Services
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="services.html">
                        Services List
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="services-single-v1.html"
                      >
                        Single Service v.1
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="services-single-v2.html"
                      >
                        Single Service v.2
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Works
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="projects.html">
                        Projects Grid
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="project-single-v1.html"
                      >
                        Single Project v.1
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="project-single-v2.html"
                      >
                        Single Project v.2
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    About
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="about.html">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="careers.html">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="contacts.html">
                        Contacts
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    News
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="news.html">
                        News Grid
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="news-single.html">
                        Single Post
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {/* Page content*/}
        {/* Hero slider */}
        <section className="tns-carousel-wrapper tns-controls-onhover min-vh-100 mb-4">
          <div
            className="tns-carousel-inner"
            data-carousel-options='{
    "navContainer": "#hero-pager",
    "responsive": {
      "0": {
        "controls": false
      },
      "1500": {
        "controls": true
      }
    }
  }'
          >
            {/* Slide 1 */}
            <div
              className="d-flex min-vh-100 position-relative pt-6 bg-size-cover bg-position-center-top"
              style={{
                backgroundImage:
                  "url(../assets/img/construction/home/hero-alt/carousel/01.jpg)",
              }}
            >
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-60" />
              <div className="position-relative container d-flex align-items-center text-light zindex-2">
                <div className="mt-md-n6" style={{ maxWidth: 595 }}>
                  <h1 className="display-1 text-uppercase text-light">
                    Create<span className="text-primary">x</span> construction
                  </h1>
                  <p className="mb-lg-5 pb-md-2 lead text-light">
                    Are you looking for a reliable construction company to make
                    your dream come true? Createx Construction Bureau is your
                    best choice.
                  </p>
                  <a
                    href="about.html"
                    className="btn btn-lg btn-outline-light me-4 mb-3 text-uppercase"
                  >
                    Learn more about us
                  </a>
                  <a
                    href="contacts.html"
                    className="btn btn-lg btn-primary me-4 mb-3 text-uppercase"
                  >
                    Submit request
                  </a>
                </div>
              </div>
            </div>
            {/* Slide 2 */}
            <div
              className="d-flex min-vh-100 position-relative pt-6 bg-size-cover bg-position-center-top"
              style={{
                backgroundImage:
                  "url(../assets/img/construction/home/hero-alt/carousel/02.jpg)",
              }}
            >
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-60" />
              <div className="position-relative container d-flex align-items-center text-light zindex-2">
                <div className="mt-md-n6" style={{ maxWidth: 595 }}>
                  <h1 className="display-1 text-uppercase text-light">
                    Create<span className="text-primary">x</span> construction
                  </h1>
                  <p className="mb-lg-5 pb-md-2 lead text-light">
                    Are you looking for a reliable construction company to make
                    your dream come true? Createx Construction Bureau is your
                    best choice.
                  </p>
                  <a
                    href="about.html"
                    className="btn btn-lg btn-outline-light me-4 mb-3 text-uppercase"
                  >
                    Learn more about us
                  </a>
                  <a
                    href="contacts.html"
                    className="btn btn-lg btn-primary me-4 mb-3 text-uppercase"
                  >
                    Submit request
                  </a>
                </div>
              </div>
            </div>
            {/* Slide 3 */}
            <div
              className="d-flex min-vh-100 position-relative pt-6 bg-size-cover bg-position-center-top"
              style={{
                backgroundImage:
                  "url(../assets/img/construction/home/hero-alt/carousel/03.jpg)",
              }}
            >
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-60" />
              <div className="position-relative container d-flex align-items-center text-light zindex-2">
                <div className="mt-md-n6" style={{ maxWidth: 595 }}>
                  <h1 className="display-1 text-uppercase text-light">
                    Create<span className="text-primary">x</span> construction
                  </h1>
                  <p className="mb-lg-5 pb-md-2 lead text-light">
                    Are you looking for a reliable construction company to make
                    your dream come true? Createx Construction Bureau is your
                    best choice.
                  </p>
                  <a
                    href="about.html"
                    className="btn btn-lg btn-outline-light me-4 mb-3 text-uppercase"
                  >
                    Learn more about us
                  </a>
                  <a
                    href="contacts.html"
                    className="btn btn-lg btn-primary me-4 mb-3 text-uppercase"
                  >
                    Submit request
                  </a>
                </div>
              </div>
            </div>
            {/* Slide 4 */}
            <div
              className="d-flex min-vh-100 position-relative pt-6 bg-size-cover bg-position-center-top"
              style={{
                backgroundImage:
                  "url(../assets/img/construction/home/hero-alt/carousel/04.jpg)",
              }}
            >
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-60" />
              <div className="position-relative container d-flex align-items-center text-light zindex-2">
                <div className="mt-md-n6" style={{ maxWidth: 595 }}>
                  <h1 className="display-1 text-uppercase text-light">
                    Create<span className="text-primary">x</span> construction
                  </h1>
                  <p className="mb-lg-5 pb-md-2 lead text-light">
                    Are you looking for a reliable construction company to make
                    your dream come true? Createx Construction Bureau is your
                    best choice.
                  </p>
                  <a
                    href="about.html"
                    className="btn btn-lg btn-outline-light me-4 mb-3 text-uppercase"
                  >
                    Learn more about us
                  </a>
                  <a
                    href="contacts.html"
                    className="btn btn-lg btn-primary me-4 mb-3 text-uppercase"
                  >
                    Submit request
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Pager */}
          <div className="container position-relative mt-lg-n4">
            <div className="position-relative" style={{ maxWidth: 595 }}>
              <div className="tns-pager pb-sm-4 pb-3" id="hero-pager">
                <button type="button" data-nav={0}>
                  01
                </button>
                <button type="button" data-nav={1}>
                  02
                </button>
                <button type="button" data-nav={2}>
                  03
                </button>
                <button type="button" data-nav={3}>
                  04
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Presentation */}
        <section className="container mb-4 py-lg-6 py-5">
          <h2 className="h1 text-center">We are Createx Construction Bureau</h2>
          <p className="mb-lg-5 pb-3 fs-lg text-muted text-center">
            We are rightfully considered to be the best construction company in
            the USA.
          </p>
          <div
            className="position-relative bg-size-cover bg-position-center bg-repeat-0 text-center mb-0 py-sm-6 py-5 rounded overflow-hidden"
            style={{
              backgroundImage:
                "url(../assets/img/construction/home/video-cover.jpg)",
            }}
          >
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-60" />
            <div className="position-relative my-5 py-5 zindex-2">
              <a
                className="btn-video btn-video-lg my-3"
                href="https://www.youtube.com/watch?v=imtHMFpeAj8&ab_channel=Unicoo"
                data-gallery-video
              />
              <div className="pt-1" />
            </div>
          </div>
        </section>
        {/* Core values */}
        <section className="container position-relative">
          <h2 className="h1 text-center">Our core values</h2>
          <p className="mb-5 pb-3 fs-lg text-muted text-center">
            Our mission is to set the highest standards for construction sphere.
          </p>
          <div className="row g-0 pb-lg-6 pb-sm-5 pb-4">
            <div className="col-sm-4 mb-sm-0 mb-4 pb-sm-0 pb-2">
              <div className="px-lg-5 px-4 text-center">
                <img
                  className="mb-4"
                  src="../assets/img/construction/icons/ic-like.svg"
                  width={48}
                  alt="Icon box image"
                />
                <h5 className="h5 mb-2">Quality</h5>
                <p className="mb-0 text-muted">
                  Culpa nostrud commodo ea consequat aliquip reprehenderit.
                  Veniam velit nostrud aliquip sunt.
                </p>
              </div>
            </div>
            <span className="divider-vertical d-sm-block d-none" />
            <div className="col-sm-4 mb-sm-0 mb-4 pb-sm-0 pb-2">
              <div className="px-lg-5 px-4 text-center">
                <img
                  className="mb-4"
                  src="../assets/img/construction/icons/ic-hand.svg"
                  width={48}
                  alt="Icon box image"
                />
                <h5 className="h5 mb-2">Safety</h5>
                <p className="mb-0 text-muted">
                  Anim reprehenderit sint voluptate exercitation adipisicing
                  laborum adipisicing. Minim empor est ea.
                </p>
              </div>
            </div>
            <span className="divider-vertical d-sm-block d-none" />
            <div className="col-sm-4 mb-sm-0 mb-4 pb-sm-0 pb-2">
              <div className="px-lg-5 px-4 text-center">
                <img
                  className="mb-4"
                  src="../assets/img/construction/icons/ic-slippers.svg"
                  width={48}
                  alt="Icon box image"
                />
                <h5 className="h5 mb-2">Comfort</h5>
                <p className="mb-0 text-muted">
                  Sit veniam aute dolore adipisicing nulla sit culpa. Minim
                  mollit voluptate ullamco proident ea ad.
                </p>
              </div>
            </div>
          </div>
          <div className="p-md-5 p-4 bg-light shadow-sm rounded">
            <h3 className="pb-2 text-center">
              Want to know more? Ask us a question:
            </h3>
            {/* Question form */}
            <form className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="form-group mb-lg-0">
                  <label htmlFor="question-name" className="form-label-lg">
                    Name*
                  </label>
                  <input
                    id="question-name"
                    className="form-control"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="form-group mb-lg-0">
                  <label htmlFor="question-tel" className="form-label-lg">
                    Phone
                  </label>
                  <input
                    id="question-tel"
                    className="form-control"
                    type="tel"
                    placeholder="Your phone"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="form-group mb-sm-0">
                  <label htmlFor="question-email" className="form-label-lg">
                    Message*
                  </label>
                  <input
                    id="question-email"
                    className="form-control"
                    type="text"
                    placeholder="Your message"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 d-flex align-items-end pt-sm-0 pt-4">
                <button type="submit" className="btn btn-primary d-block w-100">
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
        {/* Services */}
        <section className="mt-md-n6 mt-n5 pt-md-6 pt-5 bg-secondary">
          <div className="container mt-4 pt-lg-6 py-5">
            <h2 className="h1 text-center">Our services</h2>
            <p className="mb-lg-5 pb-3 fs-lg text-muted text-center">
              Createx Construction Bureau is a construction giant with a full
              range of construction services.
            </p>
            <div className="row mb-lg-5 mb-4">
              <div className="col-lg-3 col-sm-6 mb-sm-grid-gutter mb-3">
                <a
                  className="image-fade h-100 card card-hover shadow py-3"
                  href="services-single-v1.html"
                  style={{
                    backgroundImage:
                      "url(../assets/img/construction/home/services/01.jpg)",
                  }}
                >
                  <div className="image-inner py-5">
                    <div className="card-body">
                      <img
                        className="inner-img d-block mx-auto mb-4"
                        src="../assets/img/construction/icons/ic-construction.svg"
                        width={52}
                        alt="Construction"
                      />
                      <h5 className="inner-text mb-0 text-center">
                        Construction
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-sm-6 mb-sm-grid-gutter mb-3">
                <a
                  className="image-fade h-100 card card-hover shadow py-3"
                  href="services-single-v1.html"
                  style={{
                    backgroundImage:
                      "url(../assets/img/construction/home/services/02.jpg)",
                  }}
                >
                  <div className="image-inner py-5">
                    <div className="card-body">
                      <img
                        className="inner-img d-block mx-auto mb-4"
                        src="../assets/img/construction/icons/ic-project.svg"
                        width={52}
                        alt="Project Development"
                      />
                      <h5 className="inner-text mb-0 text-center">
                        Project Development
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-sm-6 mb-sm-grid-gutter mb-3">
                <a
                  className="image-fade h-100 card card-hover shadow py-3"
                  href="services-single-v2.html"
                  style={{
                    backgroundImage:
                      "url(../assets/img/construction/home/services/03.jpg)",
                  }}
                >
                  <div className="image-inner py-5">
                    <div className="card-body">
                      <img
                        className="inner-img d-block mx-auto mb-4"
                        src="../assets/img/construction/icons/ic-pantone.svg"
                        width={52}
                        alt="Interior Design"
                      />
                      <h5 className="inner-text mb-0 text-center">
                        Interior Design
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-sm-6 mb-sm-grid-gutter mb-3">
                <a
                  className="image-fade h-100 card card-hover shadow py-3"
                  href="services-single-v2.html"
                  style={{
                    backgroundImage:
                      "url(../assets/img/construction/home/services/04.jpg)",
                  }}
                >
                  <div className="image-inner py-5">
                    <div className="card-body">
                      <img
                        className="inner-img d-block mx-auto mb-4"
                        src="../assets/img/construction/icons/ic-repair.svg"
                        width={52}
                        alt="Repairs"
                      />
                      <h5 className="inner-text mb-0 text-center">Repairs</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <h4 className="h3 d-flex flex-md-row flex-column align-items-center justify-content-center text-center">
              Learn more about our services
              <a
                href="services.html"
                className="btn btn-lg btn-primary mt-md-0 mt-sm-4 mt-3 ms-md-5 text-uppercase"
              >
                View services
              </a>
            </h4>
          </div>
        </section>
        {/* Recent projects */}
        <section className="container mt-md-4 py-lg-6 py-5">
          <div className="row align-items-end mb-5 pb-md-3">
            <div className="col-lg-7 col-md-8 col-sm-9">
              <h2 className="h1 mb-0 text-sm-start text-center">
                Browse our selected projects and learn more about our work
              </h2>
            </div>
            <div className="col d-sm-block d-none">
              {/* Carousel custom controls */}
              <div
                className="tns-custom-controls tns-controls-inverse ms-auto"
                id="tns-projects-controls"
                tabIndex={0}
              >
                <button type="button" data-controls="prev" tabIndex={-1}>
                  <i className="ci-arrow-left" />
                </button>
                <button type="button" data-controls="next" tabIndex={-1}>
                  <i className="ci-arrow-right" />
                </button>
              </div>
            </div>
          </div>
          {/* Carousel */}
          <div className="tns-carousel-wrapper tns-nav-inverse">
            <div
              className="tns-carousel-inner"
              data-carousel-options='{
      "gutter": 30,
      "controlsContainer": "#tns-projects-controls",
      "responsive": {
        "0": {
          "items": 1,
          "nav": true
        },
        "576": {
          "items": 2,
          "nav": false
        },
        "992": {
          "items": 3
        }
      }
    }'
            >
              <article className="mb-5 pt-2 pb-sm-3 pb-2">
                <a
                  className="portfolio-card-slide"
                  href="project-single-v1.html"
                >
                  <div className="portfolio-card-img">
                    <img
                      src="../assets/img/construction/work/projects/07.jpg"
                      alt="Card image"
                    />
                  </div>
                  <div className="portfolio-card-body">
                    <h3 className="portfolio-card-title">
                      Red Finger Building
                    </h3>
                    <div className="fs-sm text-muted">Business Centers</div>
                    <div className="btn btn-outline-primary text-uppercase">
                      View project
                    </div>
                  </div>
                </a>
              </article>
              <article className="mb-5 pt-2 pb-sm-3 pb-2">
                <a
                  className="portfolio-card-slide"
                  href="project-single-v2.html"
                >
                  <div className="portfolio-card-img">
                    <img
                      src="../assets/img/construction/work/projects/01.jpg"
                      alt="Card image"
                    />
                  </div>
                  <div className="portfolio-card-body">
                    <h3 className="portfolio-card-title">Cubes Building</h3>
                    <div className="fs-sm text-muted">Business Centers</div>
                    <div className="btn btn-outline-primary text-uppercase">
                      View project
                    </div>
                  </div>
                </a>
              </article>
              <article className="mb-5 pt-2 pb-sm-3 pb-2">
                <a
                  className="portfolio-card-slide"
                  href="project-single-v1.html"
                >
                  <div className="portfolio-card-img">
                    <img
                      src="../assets/img/construction/work/projects/06.jpg"
                      alt="Card image"
                    />
                  </div>
                  <div className="portfolio-card-body">
                    <h3 className="portfolio-card-title">
                      The Pencil Building
                    </h3>
                    <div className="fs-sm text-muted">Stores &amp; Malls</div>
                    <div className="btn btn-outline-primary text-uppercase">
                      View project
                    </div>
                  </div>
                </a>
              </article>
              <article className="mb-5 pt-2 pb-sm-3 pb-2">
                <a
                  className="portfolio-card-slide"
                  href="project-single-v2.html"
                >
                  <div className="portfolio-card-img">
                    <img
                      src="../assets/img/construction/work/projects/02.jpg"
                      alt="Card image"
                    />
                  </div>
                  <div className="portfolio-card-body">
                    <h3 className="portfolio-card-title">Modern Cottage</h3>
                    <div className="fs-sm text-muted">Private Houses</div>
                    <div className="btn btn-outline-primary text-uppercase">
                      View project
                    </div>
                  </div>
                </a>
              </article>
            </div>
          </div>
          <h4 className="h3 d-flex flex-md-row flex-column align-items-center justify-content-center pt-sm-0 pt-4 text-center">
            Explore all our works
            <a
              href="projects.html"
              className="btn btn-lg btn-primary mt-md-0 mt-sm-4 mt-3 ms-md-5 text-uppercase"
            >
              View portfolio
            </a>
          </h4>
        </section>
        {/* Shaped bg */}
        <div className="bg-secondary">
          {/* Brands */}
          <section className="container mt-md-4 pt-lg-6 py-5 px-0">
            <h2 className="h1 mb-5 pb-md-3 text-center">
              Supported by 12+ partners
            </h2>
            {/* Carousel */}
            <div className="tns-carousel-wrapper">
              <div
                className="tns-carousel-inner"
                data-carousel-options='{
        "nav": false,
        "controls": false,
        "autoplay": true,
        "autoplayTimeout": 4000,
        "responsive": {
          "0": {
            "items": 2
          },
          "576": {
            "items": 3
          },
          "768": {
            "items": 4
          },
          "992": {
            "items": 5
          },
          "1200": {
            "items": 6
          }
        }
      }'
              >
                <div className="px-3 text-center">
                  <a href="#" className="swap-image">
                    <img
                      src="../assets/img/construction/logo/skema-floor.svg"
                      className="swap-to"
                      width={120}
                      alt="Brand logo hover"
                    />
                    <img
                      src="../assets/img/construction/logo/skema-floor-g.svg"
                      className="swap-from"
                      width={120}
                      alt="Brand logo"
                    />
                  </a>
                </div>
                <div className="px-3 text-center">
                  <a href="#" className="swap-image">
                    <img
                      src="../assets/img/construction/logo/factory-glass.svg"
                      className="swap-to"
                      width={120}
                      alt="Brand logo hover"
                    />
                    <img
                      src="../assets/img/construction/logo/factory-glass-g.svg"
                      className="swap-from"
                      width={120}
                      alt="Brand logo"
                    />
                  </a>
                </div>
                <div className="px-3 text-center">
                  <a href="#" className="swap-image">
                    <img
                      src="../assets/img/construction/logo/numark.svg"
                      className="swap-to"
                      width={120}
                      alt="Brand logo hover"
                    />
                    <img
                      src="../assets/img/construction/logo/numark-g.svg"
                      className="swap-from"
                      width={120}
                      alt="Brand logo"
                    />
                  </a>
                </div>
                <div className="px-3 text-center">
                  <a href="#" className="swap-image">
                    <img
                      src="../assets/img/construction/logo/edwin.svg"
                      className="swap-to"
                      width={120}
                      alt="Brand logo hover"
                    />
                    <img
                      src="../assets/img/construction/logo/edwin-g.svg"
                      className="swap-from"
                      width={120}
                      alt="Brand logo"
                    />
                  </a>
                </div>
                <div className="px-3 text-center">
                  <a href="#" className="swap-image">
                    <img
                      src="../assets/img/construction/logo/eiffage-construction.svg"
                      className="swap-to"
                      width={120}
                      alt="Brand logo hover"
                    />
                    <img
                      src="../assets/img/construction/logo/eiffage-construction-g.svg"
                      className="swap-from"
                      width={120}
                      alt="Brand logo"
                    />
                  </a>
                </div>
                <div className="px-3 text-center">
                  <a href="#" className="swap-image">
                    <img
                      src="../assets/img/construction/logo/royal-floor-mats.svg"
                      className="swap-to"
                      width={120}
                      alt="Brand logo hover"
                    />
                    <img
                      src="../assets/img/construction/logo/royal-floor-mats-g.svg"
                      className="swap-from"
                      width={120}
                      alt="Brand logo"
                    />
                  </a>
                </div>
                <div className="px-3 text-center">
                  <a href="#" className="swap-image">
                    <img
                      src="../assets/img/construction/logo/lotte.svg"
                      className="swap-to"
                      width={120}
                      alt="Brand logo hover"
                    />
                    <img
                      src="../assets/img/construction/logo/lotte-g.svg"
                      className="swap-from"
                      width={120}
                      alt="Brand logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Testimonials */}
          <section className="container mt-md-4 pt-lg-6 pt-5">
            <div className="row pt-3 pt-lg-0">
              <div className="col-md-6 pb-md-4 pb-5">
                <h2 className="h1 mb-5 pb-md-3 text-md-start text-center">
                  What our clients are saying
                </h2>
                {/* Carousel custom controls */}
                <div
                  className="tns-custom-controls tns-controls-inverse d-md-flex d-none mb-n5 mx-0"
                  id="tns-custom-controls"
                  tabIndex={0}
                >
                  <button
                    className="mb-n2"
                    type="button"
                    data-controls="prev"
                    tabIndex={-1}
                  >
                    <i className="ci-arrow-left" />
                  </button>
                  <button
                    className="mb-n2"
                    type="button"
                    data-controls="next"
                    tabIndex={-1}
                  >
                    <i className="ci-arrow-right" />
                  </button>
                </div>
                {/* Carousel */}
                <div className="tns-carousel-wrapper tns-nav-outside">
                  <div
                    className="tns-carousel-inner"
                    data-carousel-options='{
            "controlsContainer": "#tns-custom-controls",
            "autoHeight": true,
            "responsive": {
              "0": {
                "nav": true,
                "gutter": 0
              },
              "768": {
                "nav": false,
                "gutter": 15
              }
            }
          }'
                  >
                    {/* Carousel testimonial item */}
                    <blockquote className="px-1 text-md-start text-center">
                      <img
                        className="mb-4 rounded-circle"
                        src="../assets/img/construction/testimonials/01.jpg"
                        width={72}
                        alt="Author"
                      />
                      <p>
                        Ipsum aute sunt aliquip aute et occaecat. Anim minim do
                        cillum eiusmod enim. Consectetur magna cillum consequat
                        minim laboris cillum laboris voluptate minim proident
                        exercitation ullamco.{" "}
                      </p>
                      <footer>
                        <h3 className="h6 mb-0">Courtney Alexander</h3>
                        <span className="fs-sm text-muted">
                          Position, Company name
                        </span>
                      </footer>
                    </blockquote>
                    {/* Carousel testimonial item */}
                    <blockquote className="px-1 text-md-start text-center">
                      <img
                        className="mb-4 rounded-circle"
                        src="../assets/img/construction/testimonials/02.jpg"
                        width={72}
                        alt="Author"
                      />
                      <p>
                        Eveniet molestias. Expedita porro doloremque sit at
                        fugiat in animi obcaecati repellendus, quaerat quo
                        soluta quisquam adipisci odit error repudiandae dolorum
                        accusamus vel?
                      </p>
                      <footer>
                        <h3 className="h6 mb-0">Shawn Edwards</h3>
                        <span className="fs-sm text-muted">
                          Position, Company name
                        </span>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-5 col-md-6 d-md-block d-none mb-md-n5 ms-lg-auto"
                data-jarallax-element={15}
                data-disable-parallax-down="lg"
              >
                <img
                  className="rounded"
                  src="../assets/img/construction/testimonials/03.jpg"
                  alt="Testimonials"
                />
              </div>
            </div>
          </section>
        </div>{" "}
        {/* / Shaped bg */}
        {/* Shaped bg */}
        <div
          className="pt-md-5 bg-repeat-0"
          style={{
            backgroundImage: "url(../assets/img/construction/shapes/01.png)",
          }}
        >
          {/* Progress + Carousel */}
          <section className="container mt-md-4 pt-lg-6 pt-5 pb-4">
            <h2 className="h1 mb-5 pb-md-3 text-center">
              Some facts and figures
            </h2>
            <div className="row pt-md-4">
              <div className="col-sm-8 mx-auto">
                <div className="tns-carousel-wrapper">
                  <div
                    className="tns-carousel-inner"
                    data-carousel-options='{
            "gutter": 48,
            "nav": false,
            "controls": false,
            "autoplay": true,
            "autoplayTimeout": 4000,
            "responsive": {
              "0": {
                "items": 1
              },
              "576": {
                "items": 2
              },
              "768": {
                "items": 3
              },
              "992": {
                "items": 4
              }
            }
          }'
                  >
                    <div>
                      <div
                        className="progress-radial mx-auto"
                        style={{ maxWidth: 150 }}
                        data-progress-radial='{
                "text": {"value": "98%"},
                "color": "#f89828",
                "trailColor": "rgba(248,152,40, .3)",
                "strokeWidth": 4,
                "trailWidth": 4,
                "progress": 0.98
              }'
                      />
                      <span className="d-block mt-3 pt-1 text-center fs-sm">
                        Totally satisfied clients
                      </span>
                    </div>
                    <div>
                      <div
                        className="progress-radial mx-auto"
                        style={{ maxWidth: 150 }}
                        data-progress-radial='{
                "text": {"value": "20"},
                "color": "#f52f6e",
                "trailColor": "rgba(245,47,110, .3)",
                "strokeWidth": 4,
                "trailWidth": 4,
                "progress": 0.75
              }'
                      />
                      <span className="d-block mt-3 pt-1 text-center fs-sm">
                        Years of experience
                      </span>
                    </div>
                    <div>
                      <div
                        className="progress-radial mx-auto"
                        style={{ maxWidth: 150 }}
                        data-progress-radial='{
                "text": {"value": "9452"},
                "color": "#5a87fc",
                "trailColor": "rgba(90,135,252, .3)",
                "strokeWidth": 4,
                "trailWidth": 4,
                "progress": 0.8
              }'
                      />
                      <span className="d-block mt-3 pt-1 text-center fs-sm">
                        Working hours spent
                      </span>
                    </div>
                    <div>
                      <div
                        className="progress-radial mx-auto"
                        style={{ maxWidth: 150 }}
                        data-progress-radial='{
                "text": {"value": "100%"},
                "color": "#03cea4",
                "trailColor": "rgba(3,206,164, .3)",
                "strokeWidth": 4,
                "trailWidth": 4,
                "progress": 1
              }'
                      />
                      <span className="d-block mt-3 pt-1 text-center fs-sm">
                        Succeeded projects
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Recent news */}
          <section className="container mt-md-4 py-lg-6 py-5">
            <h2 className="h1 mb-5 pb-md-3 text-center">Recent news</h2>
            <div className="row">
              <div className="col-lg-7 col-md-6 mb-md-0 mb-grid-gutter">
                <article className="image-scale h-100 card shadow card-hover border-0">
                  <a
                    className="image-inner card-img-top"
                    href="news-single.html"
                  >
                    <img
                      src="../assets/img/construction/news/01.jpg"
                      alt="Blog card image"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="h5 mb-2 pb-1">
                      <a className="nav-link" href="news-single.html">
                        How to Build Climate Change-Resilient Infrastructure
                      </a>
                    </h3>
                    <ul className="nav nav-muted mb-2 pb-1">
                      <li className="nav-item me-2">
                        <a
                          className="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                          href="#"
                        >
                          Industry News
                        </a>
                        <span className="text-border px-1">|</span>
                      </li>
                      <li className="nav-item me-2">
                        <a
                          className="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                          href="#"
                        >
                          June 24, 2020
                        </a>
                        <span className="text-border px-1">|</span>
                      </li>
                      <li className="nav-item me-2">
                        <a
                          className="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                          href="#"
                        >
                          <i className="ci-chat mt-n1 me-2 fs-base align-middle" />
                          4 comments
                        </a>
                      </li>
                    </ul>
                    <p className="card-text">
                      Ipsum aliquet nisi, hendrerit rhoncus quam tortor,
                      maecenas faucibus. Tincidunt aliquet sit vel, venenatis
                      nulla. Integer bibendum turpis convallis...
                    </p>
                  </div>
                </article>
              </div>
              <div className="col-lg-5 col-md-6 d-flex flex-column mb-md-0 mb-grid-gutter">
                <article className="image-scale h-100 mb-grid-gutter card shadow card-hover border-0">
                  <a
                    className="image-inner card-img-top"
                    href="news-single.html"
                  >
                    <img
                      src="../assets/img/construction/news/recent/01.jpg"
                      alt="Blog card image"
                    />
                  </a>
                  <div className="card-body py-3">
                    <h3 className="h5 mb-2">
                      <a className="nav-link" href="news-single.html">
                        How Construction Can Help Itself
                      </a>
                    </h3>
                    <ul className="nav nav-muted">
                      <li className="nav-item me-2">
                        <a
                          className="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                          href="#"
                        >
                          Innovation
                        </a>
                        <span className="text-border px-1">|</span>
                      </li>
                      <li className="nav-item me-2">
                        <a
                          className="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                          href="#"
                        >
                          June 12, 2020
                        </a>
                        <span className="text-border px-1">|</span>
                      </li>
                      <li className="nav-item me-2">
                        <a
                          className="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                          href="#"
                        >
                          <i className="ci-chat mt-n1 me-2 fs-base align-middle" />
                          No comments
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                <article className="image-scale h-100 card shadow card-hover border-0">
                  <a
                    className="image-inner card-img-top"
                    href="news-single.html"
                  >
                    <img
                      src="../assets/img/construction/news/recent/02.jpg"
                      alt="Blog card image"
                    />
                  </a>
                  <div className="card-body py-3">
                    <h3 className="h5 mb-2">
                      <a className="nav-link" href="news-single.html">
                        Types of Flooring Materials
                      </a>
                    </h3>
                    <ul className="nav nav-muted">
                      <li className="nav-item me-2">
                        <a
                          className="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                          href="#"
                        >
                          Company News
                        </a>
                        <span className="text-border px-1">|</span>
                      </li>
                      <li className="nav-item me-2">
                        <a
                          className="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                          href="#"
                        >
                          June 2, 2020
                        </a>
                        <span className="text-border px-1">|</span>
                      </li>
                      <li className="nav-item me-2">
                        <a
                          className="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                          href="#"
                        >
                          <i className="ci-chat mt-n1 me-2 fs-base align-middle" />
                          No comments
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
            <h4 className="h3 d-flex flex-md-row flex-column align-items-center justify-content-center mt-md-4 pt-md-5 pt-3 text-center">
              Explore all our news posts
              <a
                href="news.html"
                className="btn btn-lg btn-primary mt-md-0 mt-sm-4 mt-3 ms-md-5 text-uppercase"
              >
                View all news
              </a>
            </h4>
          </section>
        </div>{" "}
        {/* / Shaped bg */}
        {/* Details */}
        <section className="py-5 jarallax" data-jarallax data-speed="0.8">
          {/* Parallax bg */}
          <div
            className="jarallax-img"
            style={{
              backgroundImage:
                "url(../assets/img/construction/detail-form-bg.jpg)",
            }}
          />
          {/* Content */}
          <div className="container py-4">
            <div
              className="ms-md-auto me-md-0 mx-auto"
              style={{ maxWidth: 495 }}
            >
              {/* Details form */}
              <form className="py-5 px-sm-5 px-4 bg-light rounded shadow-lg">
                <h2 className="h3 text-center">
                  A quick way to discuss details
                </h2>
                <div className="mb-4">
                  <label htmlFor="detail-name" className="form-label">
                    Name*
                  </label>
                  <input
                    id="detail-name"
                    className="form-control"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="detail-tel" className="form-label">
                    Phone*
                  </label>
                  <input
                    id="detail-tel"
                    className="form-control"
                    type="tel"
                    placeholder="Your phone number"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="detail-email" className="form-label">
                    Email
                  </label>
                  <input
                    id="detail-email"
                    className="form-control"
                    type="email"
                    placeholder="Your working email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="detail-message" className="form-label">
                    Message*
                  </label>
                  <textarea
                    id="detail-message"
                    className="form-control"
                    rows={2}
                    placeholder="Your message"
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="mb-4 form-check">
                  <input
                    id="detail-subscribe"
                    className="form-check-input"
                    type="checkbox"
                    defaultChecked
                  />
                  <label
                    htmlFor="detail-subscribe"
                    className="form-check-label fs-sm"
                  >
                    I agree to receive communications from Createx Construction
                    Bureau.
                  </label>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary text-uppercase"
                  >
                    Send request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="footer pt-3 bg-dark">
        <div className="container mt-lg-3 py-md-5 py-4">
          <div className="row mb-5">
            <div className="col-lg-5 col-md-6">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <a className="d-inline-block" href="index.html">
                  <img
                    src="../assets/img/construction/logo-light.svg"
                    width={130}
                    alt="Createx logo"
                  />
                </a>
                <div className="mt-sm-1 mt-4 pe-sm-4">
                  <a href="#" className="btn-social">
                    <i className="ci-whatsapp" />
                  </a>
                  <a href="#" className="btn-social">
                    <i className="ci-messenger" />
                  </a>
                  <a href="#" className="btn-social">
                    <i className="ci-facebook" />
                  </a>
                  <a href="#" className="btn-social">
                    <i className="ci-twitter" />
                  </a>
                  <a href="#" className="btn-social">
                    <i className="ci-youtube" />
                  </a>
                </div>
              </div>
              <p className="mb-md-0 mb-4 fs-sm text-light opacity-60">
                Createx Construction Bureau has been successfully operating
                in&nbsp;the USA construction market since 2000. We are proud to
                offer you quality construction and exemplary service. Our
                mission is to set the highest standards for construction sphere.
              </p>
            </div>
            <div className="col-lg-5 offset-lg-2 col-md-6">
              <h4 className="text-light">Let’s stay in touch</h4>
              <form className="input-group">
                <input
                  className="form-control input-light"
                  type="email"
                  placeholder="Your email address"
                  required
                />
                <button
                  className="btn btn-primary text-uppercase"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
              <p className="mb-0 pt-3 fs-xs text-light opacity-60">
                *Subscribe to our newsletter to receive communications and early
                updates from Createx Construction Bureau.
              </p>
            </div>
          </div>
          <div className="row mb-sm-5 mb-4">
            <div className="col-md-4 mb-md-0 mb-4">
              <h6 className="text-light text-uppercase">Head office</h6>
              <ul className="nav nav-light flex-column">
                <li className="nav-item mb-2">
                  <span className="me-1 text-light">Address:</span>
                  <a href="#" className="nav-link d-inline-block p-0 fw-normal">
                    8502 Preston Rd. Inglewood, New York
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <span className="me-1 text-light">Call:</span>
                  <a
                    href="tel:(405)555-0128"
                    className="nav-link d-inline-block p-0 fw-normal"
                  >
                    (405) 555-0128
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <span className="me-1 text-light">Email:</span>
                  <a
                    href="mailto:hello@example.com"
                    className="nav-link d-inline-block p-0 fw-normal"
                  >
                    hello@example.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 mb-md-0 mb-4">
              <h6 className="text-light text-uppercase">Who we are</h6>
              <ul className="nav nav-light flex-column">
                <li className="nav-item mb-2">
                  <a href="about.html" className="nav-link p-0 fw-normal">
                    About Us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="careers.html" className="nav-link p-0 fw-normal">
                    Available Positions
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="contacts.html" className="nav-link p-0 fw-normal">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-5 col-sm-6 mb-md-0 mb-4">
              <h6 className="text-light text-uppercase">Our experience</h6>
              <ul className="nav nav-light flex-column">
                <li className="nav-item mb-2">
                  <a href="services.html" className="nav-link p-0 fw-normal">
                    Services
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="projects.html" className="nav-link p-0 fw-normal">
                    Work
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="news.html" className="nav-link p-0 fw-normal">
                    News
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex align-items-sm-center justify-content-between py-1">
            <div className="fs-xs text-light">
              <span className="d-sm-inline d-block mb-1">
                <span className="fs-sm">© </span>
                All rights reserved.
              </span>
              Made with
              <i className="ci-heart mt-n1 mx-1 fs-base text-primary align-middle" />
              <a
                href="https://createx.studio/"
                className="text-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                by Createx Studio
              </a>
            </div>
            <div className="d-flex align-items-sm-center">
              <span className="d-sm-inline-block d-none text-light fs-sm me-3 mb-1 align-vertical text-uppercase">
                Go to top
              </span>
              <a
                className="btn-scroll-top position-static rounded"
                href="#top"
                data-scroll
              >
                <i className="btn-scroll-top-icon ci-angle-up" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
