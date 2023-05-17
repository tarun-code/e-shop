import "./App.css";

function App() {
  return (
    <div className="App">
      <header class="header-section">
        <div class="header-top">
          <div class="container">
            <div class="ht-left">
              <div class="mail-service">
                <i class=" fa fa-envelope"></i>
                tarunshori@gmail.com
              </div>
              <div class="phone-service">
                <i class=" fa fa-phone"></i>
                +00 00.000.000
              </div>
            </div>
            <div class="ht-right">
              <a href="#" class="login-panel">
                <i class="fa fa-user"></i>Login
              </a>
              <div class="lan-selector">
                <select
                  class="language_drop"
                  name="countries"
                  id="countries"
                  style={{ width: "300px" }}
                >
                  <option
                    value="yt"
                    data-image="assets/img/flag-1.jpg"
                    data-imagecss="flag yt"
                    data-title="English"
                  >
                    English
                  </option>
                  {/* <option value='yu' data-image="assets/img/flag-2.jpg" data-imagecss="flag yu"
                                    data-title="Bangladesh">Hindi </option> */}
                </select>
              </div>
              <div class="top-social">
                <a href="#">
                  <i class="ti-facebook"></i>
                </a>
                <a href="#">
                  <i class="ti-twitter-alt"></i>
                </a>
                <a href="#">
                  <i class="ti-linkedin"></i>
                </a>
                <a href="#">
                  <i class="ti-pinterest"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="inner-header">
            <div class="row">
              <div class="col-lg-2 col-md-2">
                <div class="logo">
                  <a href="#">Tarun`s Shop</a>
                </div>
              </div>
              <div class="col-lg-7 col-md-7">
                <div class="advanced-search">
                  <button type="button" class="category-btn">
                    All Categories
                  </button>
                  <div class="input-group">
                    <input type="text" placeholder="What do you need?" />
                    <button type="button">
                      <i class="ti-search"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 text-right col-md-3">
                <ul class="nav-right">
                  <li class="heart-icon">
                    <a href="#">
                      <i class="icon_heart_alt"></i>
                      <span>1</span>
                    </a>
                  </li>
                  <li class="cart-icon">
                    <a href="#">
                      <i class="icon_bag_alt"></i>
                      <span>3</span>
                    </a>
                    <div class="cart-hover">
                      <div class="select-items">
                        <table>
                          <tbody>
                            <tr>
                              <td class="si-pic">
                                <img
                                  src="assets/img/select-product-1.jpg"
                                  alt=""
                                />
                              </td>
                              <td class="si-text">
                                <div class="product-selected">
                                  <p>$60.00 x 1</p>
                                  <h6>Kabino Bedside Table</h6>
                                </div>
                              </td>
                              <td class="si-close">
                                <i class="ti-close"></i>
                              </td>
                            </tr>
                            <tr>
                              <td class="si-pic">
                                <img
                                  src="assets/img/select-product-2.jpg"
                                  alt=""
                                />
                              </td>
                              <td class="si-text">
                                <div class="product-selected">
                                  <p>$60.00 x 1</p>
                                  <h6>Kabino Bedside Table</h6>
                                </div>
                              </td>
                              <td class="si-close">
                                <i class="ti-close"></i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="select-total">
                        <span>total:</span>
                        <h5>$120.00</h5>
                      </div>
                      <div class="select-button">
                        <a href="#" class="primary-btn view-card">
                          VIEW CARD
                        </a>
                        <a href="#" class="primary-btn checkout-btn">
                          CHECK OUT
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="cart-price">$150.00</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="nav-item">
          <div class="container">
            <div class="nav-depart">
              <div class="depart-btn">
                <i class="ti-menu"></i>
                <span>All departments</span>
                <ul class="depart-hover">
                  <li class="active">
                    <a href="#">Women’s Clothing</a>
                  </li>
                  <li>
                    <a href="#">Men’s Clothing</a>
                  </li>
                  <li>
                    <a href="#">Underwear</a>
                  </li>
                  <li>
                    <a href="#">Kid's Clothing</a>
                  </li>
                  <li>
                    <a href="#">Brand Fashion</a>
                  </li>
                  <li>
                    <a href="#">Accessories/Shoes</a>
                  </li>
                  <li>
                    <a href="#">Luxury Brands</a>
                  </li>
                  <li>
                    <a href="#">Brand Outdoor Apparel</a>
                  </li>
                </ul>
              </div>
            </div>
            <nav class="nav-menu mobile-menu">
              <ul>
                <li class="active">
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">Collection</a>
                  <ul class="dropdown">
                    <li>
                      <a href="#">Men's</a>
                    </li>
                    <li>
                      <a href="#">Women's</a>
                    </li>
                    <li>
                      <a href="#">Kid's</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Pages</a>
                  <ul class="dropdown">
                    <li>
                      <a href="#">Blog Details</a>
                    </li>
                    <li>
                      <a href="#">Shopping Cart</a>
                    </li>
                    <li>
                      <a href="#">Checkout</a>
                    </li>
                    <li>
                      <a href="#">Faq</a>
                    </li>
                    <li>
                      <a href="#">Register</a>
                    </li>
                    <li>
                      <a href="#">Login</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div id="mobile-menu-wrap"></div>
          </div>
        </div>
      </header>

      <section class="hero-section">
        <div class="hero-items owl-carousel">
          <div
            class="single-hero-items set-bg"
            data-setbg="assets/img/hero-1.jpg"
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-5">
                  <span>Bag,kids</span>
                  <h1>Black friday</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                  </p>
                  <a href="#" class="primary-btn">
                    Shop Now
                  </a>
                </div>
              </div>
              <div class="off-card">
                <h2>
                  Sale <span>50%</span>
                </h2>
              </div>
            </div>
          </div>
          <div
            class="single-hero-items set-bg"
            data-setbg="assets/img/hero-2.jpg"
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-5">
                  <span>Bag,kids</span>
                  <h1>Black friday</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                  </p>
                  <a href="#" class="primary-btn">
                    Shop Now
                  </a>
                </div>
              </div>
              <div class="off-card">
                <h2>
                  Sale <span>50%</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="banner-section spad">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-4">
              <div class="single-banner">
                <img src="assets/img/banner-1.jpg" alt="" />
                <div class="inner-text">
                  <h4>Men’s</h4>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="single-banner">
                <img src="assets/img/banner-2.jpg" alt="" />
                <div class="inner-text">
                  <h4>Women’s</h4>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="single-banner">
                <img src="assets/img/banner-3.jpg" alt="" />
                <div class="inner-text">
                  <h4>Kid’s</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="women-banner spad">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-3">
              <div
                class="product-large set-bg"
                data-setbg="assets/img/women-large.jpg"
              >
                <h2>Women’s</h2>
                <a href="#">Discover More</a>
              </div>
            </div>
            <div class="col-lg-8 offset-lg-1">
              <div class="filter-control">
                <ul>
                  <li class="active">Clothings</li>
                  <li>HandBag</li>
                  <li>Shoes</li>
                  <li>Accessories</li>
                </ul>
              </div>
              <div class="product-slider owl-carousel">
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="assets/img/women-1.jpg" alt="" />
                    <div class="sale">Sale</div>
                    <div class="icon">
                      <i class="icon_heart_alt"></i>
                    </div>
                    <ul>
                      <li class="w-icon active">
                        <a href="#">
                          <i class="icon_bag_alt"></i>
                        </a>
                      </li>
                      <li class="quick-view">
                        <a href="#">+ Quick View</a>
                      </li>
                      <li class="w-icon">
                        <a href="#">
                          <i class="fa fa-random"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="pi-text">
                    <div class="catagory-name">Coat</div>
                    <a href="#">
                      <h5>Pure Pineapple</h5>
                    </a>
                    <div class="product-price">
                      $14.00
                      <span>$35.00</span>
                    </div>
                  </div>
                </div>
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="assets/img/women-2.jpg" alt="" />
                    <div class="icon">
                      <i class="icon_heart_alt"></i>
                    </div>
                    <ul>
                      <li class="w-icon active">
                        <a href="#">
                          <i class="icon_bag_alt"></i>
                        </a>
                      </li>
                      <li class="quick-view">
                        <a href="#">+ Quick View</a>
                      </li>
                      <li class="w-icon">
                        <a href="#">
                          <i class="fa fa-random"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="pi-text">
                    <div class="catagory-name">Shoes</div>
                    <a href="#">
                      <h5>Guangzhou sweater</h5>
                    </a>
                    <div class="product-price">$13.00</div>
                  </div>
                </div>
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="assets/img/women-3.jpg" alt="" />
                    <div class="icon">
                      <i class="icon_heart_alt"></i>
                    </div>
                    <ul>
                      <li class="w-icon active">
                        <a href="#">
                          <i class="icon_bag_alt"></i>
                        </a>
                      </li>
                      <li class="quick-view">
                        <a href="#">+ Quick View</a>
                      </li>
                      <li class="w-icon">
                        <a href="#">
                          <i class="fa fa-random"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="pi-text">
                    <div class="catagory-name">Towel</div>
                    <a href="#">
                      <h5>Pure Pineapple</h5>
                    </a>
                    <div class="product-price">$34.00</div>
                  </div>
                </div>
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="assets/img/women-4.jpg" alt="" />
                    <div class="icon">
                      <i class="icon_heart_alt"></i>
                    </div>
                    <ul>
                      <li class="w-icon active">
                        <a href="#">
                          <i class="icon_bag_alt"></i>
                        </a>
                      </li>
                      <li class="quick-view">
                        <a href="#">+ Quick View</a>
                      </li>
                      <li class="w-icon">
                        <a href="#">
                          <i class="fa fa-random"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="pi-text">
                    <div class="catagory-name">Towel</div>
                    <a href="#">
                      <h5>Converse Shoes</h5>
                    </a>
                    <div class="product-price">$34.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="deal-of-week set-bg spad"
        data-setbg="assets/img/time-bg.jpg"
      >
        <div class="container">
          <div class="col-lg-6 text-center">
            <div class="section-title">
              <h2>Deal Of The Week</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                <br /> do ipsum dolor sit amet, consectetur adipisicing elit{" "}
              </p>
              <div class="product-price">
                $35.00
                <span>/ HanBag</span>
              </div>
            </div>
            <div class="countdown-timer" id="countdown">
              <div class="cd-item">
                <span>56</span>
                <p>Days</p>
              </div>
              <div class="cd-item">
                <span>12</span>
                <p>Hrs</p>
              </div>
              <div class="cd-item">
                <span>40</span>
                <p>Mins</p>
              </div>
              <div class="cd-item">
                <span>52</span>
                <p>Secs</p>
              </div>
            </div>
            <a href="#" class="primary-btn">
              Shop Now
            </a>
          </div>
        </div>
      </section>

      <section class="man-banner spad">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-8">
              <div class="filter-control">
                <ul>
                  <li class="active">Clothings</li>
                  <li>HandBag</li>
                  <li>Shoes</li>
                  <li>Accessories</li>
                </ul>
              </div>
              <div class="product-slider owl-carousel">
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="assets/img/man-1.jpg" alt="" />
                    <div class="sale">Sale</div>
                    <div class="icon">
                      <i class="icon_heart_alt"></i>
                    </div>
                    <ul>
                      <li class="w-icon active">
                        <a href="#">
                          <i class="icon_bag_alt"></i>
                        </a>
                      </li>
                      <li class="quick-view">
                        <a href="#">+ Quick View</a>
                      </li>
                      <li class="w-icon">
                        <a href="#">
                          <i class="fa fa-random"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="pi-text">
                    <div class="catagory-name">Coat</div>
                    <a href="#">
                      <h5>Pure Pineapple</h5>
                    </a>
                    <div class="product-price">
                      $14.00
                      <span>$35.00</span>
                    </div>
                  </div>
                </div>
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="assets/img/man-2.jpg" alt="" />
                    <div class="icon">
                      <i class="icon_heart_alt"></i>
                    </div>
                    <ul>
                      <li class="w-icon active">
                        <a href="#">
                          <i class="icon_bag_alt"></i>
                        </a>
                      </li>
                      <li class="quick-view">
                        <a href="#">+ Quick View</a>
                      </li>
                      <li class="w-icon">
                        <a href="#">
                          <i class="fa fa-random"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="pi-text">
                    <div class="catagory-name">Shoes</div>
                    <a href="#">
                      <h5>Guangzhou sweater</h5>
                    </a>
                    <div class="product-price">$13.00</div>
                  </div>
                </div>
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="assets/img/man-3.jpg" alt="" />
                    <div class="icon">
                      <i class="icon_heart_alt"></i>
                    </div>
                    <ul>
                      <li class="w-icon active">
                        <a href="#">
                          <i class="icon_bag_alt"></i>
                        </a>
                      </li>
                      <li class="quick-view">
                        <a href="#">+ Quick View</a>
                      </li>
                      <li class="w-icon">
                        <a href="#">
                          <i class="fa fa-random"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="pi-text">
                    <div class="catagory-name">Towel</div>
                    <a href="#">
                      <h5>Pure Pineapple</h5>
                    </a>
                    <div class="product-price">$34.00</div>
                  </div>
                </div>
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="assets/img/man-4.jpg" alt="" />
                    <div class="icon">
                      <i class="icon_heart_alt"></i>
                    </div>
                    <ul>
                      <li class="w-icon active">
                        <a href="#">
                          <i class="icon_bag_alt"></i>
                        </a>
                      </li>
                      <li class="quick-view">
                        <a href="#">+ Quick View</a>
                      </li>
                      <li class="w-icon">
                        <a href="#">
                          <i class="fa fa-random"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="pi-text">
                    <div class="catagory-name">Towel</div>
                    <a href="#">
                      <h5>Converse Shoes</h5>
                    </a>
                    <div class="product-price">$34.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 offset-lg-1">
              <div
                class="product-large set-bg m-large"
                data-setbg="assets/img/man-large.jpg"
              >
                <h2>Men’s</h2>
                <a href="#">Discover More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="instagram-photo">
        <div class="insta-item set-bg" data-setbg="assets/img/insta-1.jpg">
          <div class="inside-text">
            <i class="ti-instagram"></i>
            <h5>
              <a href="#">Tarun_Collection</a>
            </h5>
          </div>
        </div>
        <div class="insta-item set-bg" data-setbg="assets/img/insta-2.jpg">
          <div class="inside-text">
            <i class="ti-instagram"></i>
            <h5>
              <a href="#">Tarun_Collection</a>
            </h5>
          </div>
        </div>
        <div class="insta-item set-bg" data-setbg="assets/img/insta-3.jpg">
          <div class="inside-text">
            <i class="ti-instagram"></i>
            <h5>
              <a href="#">Tarun_Collection</a>
            </h5>
          </div>
        </div>
        <div class="insta-item set-bg" data-setbg="assets/img/insta-1.jpg">
          <div class="inside-text">
            <i class="ti-instagram"></i>
            <h5>
              <a href="#">Tarun_Collection</a>
            </h5>
          </div>
        </div>
        <div class="insta-item set-bg" data-setbg="assets/img/insta-2.jpg">
          <div class="inside-text">
            <i class="ti-instagram"></i>
            <h5>
              <a href="#">Tarun_Collection</a>
            </h5>
          </div>
        </div>
        <div class="insta-item set-bg" data-setbg="assets/img/insta-3.jpg">
          <div class="inside-text">
            <i class="ti-instagram"></i>
            <h5>
              <a href="#">Tarun_Collection</a>
            </h5>
          </div>
        </div>
      </div>

      <section class="latest-blog spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <h2>From The Blog</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="single-latest-blog">
                <img src="assets/img/latest-1.jpg" alt="" />
                <div class="latest-text">
                  <div class="tag-list">
                    <div class="tag-item">
                      <i class="fa fa-calendar-o"></i>
                      May 4,2021
                    </div>
                    <div class="tag-item">
                      <i class="fa fa-comment-o"></i>5
                    </div>
                  </div>
                  <a href="#">
                    <h4>The Best Street Style From London Fashion Week</h4>
                  </a>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-latest-blog">
                <img src="assets/img/latest-2.jpg" alt="" />
                <div class="latest-text">
                  <div class="tag-list">
                    <div class="tag-item">
                      <i class="fa fa-calendar-o"></i>
                      May 4,2021
                    </div>
                    <div class="tag-item">
                      <i class="fa fa-comment-o"></i>5
                    </div>
                  </div>
                  <a href="#">
                    <h4>Vogue's Ultimate Guide To Autumn/Winter 2021 Shoes</h4>
                  </a>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-latest-blog">
                <img src="assets/img/latest-3.jpg" alt="" />
                <div class="latest-text">
                  <div class="tag-list">
                    <div class="tag-item">
                      <i class="fa fa-calendar-o"></i>
                      May 4,2021
                    </div>
                    <div class="tag-item">
                      <i class="fa fa-comment-o"></i>5
                    </div>
                  </div>
                  <a href="#">
                    <h4>How To Brighten Your Wardrobe With A Dash Of Lime</h4>
                  </a>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="benefit-items">
            <div class="row">
              <div class="col-lg-4">
                <div class="single-benefit">
                  <div class="sb-icon">
                    <img src="assets/img/icon-1.png" alt="" />
                  </div>
                  <div class="sb-text">
                    <h6>Free Shipping</h6>
                    <p>
                      For all order over 99<pre wp-pre-tag-2=""></pre>lt;
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-benefit">
                  <div class="sb-icon">
                    <img src="assets/img/icon-2.png" alt="" />
                  </div>
                  <div class="sb-text">
                    <h6>Delivery On Time</h6>
                    <p>If good have prolems</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-benefit">
                  <div class="sb-icon">
                    <img src="assets/img/icon-1.png" alt="" />
                  </div>
                  <div class="sb-text">
                    <h6>Secure Payment</h6>
                    <p>100% secure payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="partner-logo">
        <div class="container">
          <div class="logo-carousel owl-carousel">
            <div class="logo-item">
              <div class="tablecell-inner">
                <img src="assets/img/logo-1.png" alt="" />
              </div>
            </div>
            <div class="logo-item">
              <div class="tablecell-inner">
                <img src="assets/img/logo-2.png" alt="" />
              </div>
            </div>
            <div class="logo-item">
              <div class="tablecell-inner">
                <img src="assets/img/logo-3.png" alt="" />
              </div>
            </div>
            <div class="logo-item">
              <div class="tablecell-inner">
                <img src="assets/img/logo-4.png" alt="" />
              </div>
            </div>
            <div class="logo-item">
              <div class="tablecell-inner">
                <img src="assets/img/logo-5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="footer-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="footer-left">
                <div class="footer-logo">
                  <a href="#">Tarun</a>
                </div>
                <ul>
                  <li>Address: 11-11 Road 11 22 22</li>
                  <li>Phone: +00 00.000.000</li>
                  <li>Email: tarunshori@gmail.com</li>
                </ul>
                <div class="footer-social">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-2 offset-lg-1">
              <div class="footer-widget">
                <h5>Information</h5>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Checkout</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Serivius</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2">
              <div class="footer-widget">
                <h5>My Account</h5>
                <ul>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Shopping Cart</a>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="newslatter-item">
                <h5>Join Our Newsletter Now</h5>
                <p>
                  Get E-mail updates about our latest shop and special offers.
                </p>
                <form action="#" class="subscribe-form">
                  <input type="text" placeholder="Enter Your Mail" />
                  <button type="button">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-reserved">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="copyright-text">
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with{" "}
                  <i class="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                  <a href="https://webbuddy.vercel.app" target="_blank">
                    Tarun shori
                  </a>
                </div>
                <div class="payment-pic">
                  <img src="assets/img/payment-method.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
