import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Email, Location } from "@/components/svg";
import social_data from "@/data/social-data";

export default function FooterThirteen() {
  return (
    <footer>
      <div className="tp-footer-6-area black-bg pt-100">
        <div className="container container-1300">
          <div className="tp-footer-6-widget-wrap">
            <div className="row">
              {/* 1st Column - Logo & About */}
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-60">
                <div className="tp-footer-6-widget footer-col-6-1">
                  <div className="tp-footer-6-logo">
                    <Link href="/">
                      <Image 
                        src="/assets/fakhruddin-img/fakhruddin-logo-svg.svg" 
                        alt="Fakhruddin Logo" 
                        width={150} 
                        height={47} 
                        style={{filter: 'brightness(0) invert(1)'}}
                      />
                    </Link>
                  </div>
                  <div className="tp-footer-6-about">
                    <p style={{
                      fontSize: '16px',
                      lineHeight: '1.6',
                      color: 'rgba(255, 255, 255, 0.8)',
                      marginTop: '20px'
                    }}>
                      It began as a vision in 2003 - a quiet pursuit to reimagine what real estate could mean for the people who live within it.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2nd Column - Our Projects */}
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-60">
                <div className="tp-footer-6-widget footer-col-6-2">
                  <h4 className="tp-footer-6-widget-title">OUR PROJECTS</h4>
                  <div className="tp-footer-6-list">
                    <ul>
                      <li><Link href="#">Treppan Living Prive</Link></li>
                      <li><Link href="#">Treppan Serenique</Link></li>
                      <li><Link href="#">Treppan Tower</Link></li>
                      <li><Link href="#">Hatimi Residences</Link></li>
                      <li><Link href="#">Maimoon Gardens</Link></li>
                      <li><Link href="#">Fakhruddin International</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3rd Column - Quick Links */}
              <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 mb-60">
                <div className="tp-footer-6-widget footer-col-6-3">
                  <h4 className="tp-footer-6-widget-title">QUICK LINKS</h4>
                  <div className="tp-footer-6-list">
                    <ul>
                      <li><Link href="#">About Us</Link></li>
                      <li><Link href="#">Treppan Living</Link></li>
                      <li><Link href="#">Communities</Link></li>
                      <li><Link href="#">Partner</Link></li>
                      <li><Link href="#">Blogs and Insights</Link></li>
                      <li><Link href="#">Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4th Column - Contact Info */}
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-60">
                <div className="tp-footer-6-widget footer-col-6-4">
                  <h4 className="tp-footer-6-widget-title">CONTACT</h4>
                  <div className="tp-footer-6-contact">
                    <div className="tp-footer-6-contact-item d-flex align-items-start" style={{marginBottom: '15px'}}>
                      <div className="tp-footer-6-contact-content">
                        <p style={{margin: '0', color: 'rgba(255, 255, 255, 0.8)'}}>Dubai Islands</p>
                      </div>
                    </div>
                    <div className="tp-footer-6-contact-item d-flex align-items-start" style={{marginBottom: '15px'}}>
                      <div className="tp-footer-6-contact-content">
                        <p style={{margin: '0', color: 'rgba(255, 255, 255, 0.8)'}}>Treppan Living</p>
                      </div>
                    </div>
                    <div className="tp-footer-6-contact-item d-flex align-items-start" style={{marginBottom: '15px'}}>
                      <div className="tp-footer-6-contact-content">
                        <p style={{margin: '0', color: 'rgba(255, 255, 255, 0.8)'}}>Communities</p>
                      </div>
                    </div>
                    <div className="tp-footer-6-contact-item d-flex align-items-start">
                      <div className="tp-footer-6-contact-content">
                        <h4 style={{margin: '0', fontSize: '16px', fontWeight: '600'}}>
                          <Link href="tel:+9718005253" style={{color: '#fff'}}>Toll Free 800 5253</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-copyright-2-area tp-copyright-2-bdr-top black-bg">
          <div className="container container-1300">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-5 col-md-6">
                <div className="tp-copyright-2-left text-center text-md-start">
                  <p className="mb-0">
                    All rights reserved — {new Date().getFullYear()} © Fakhruddin Properties
                  </p>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7 col-md-6">
                <div className="tp-copyright-2-payment text-center text-md-end">
                  <div className="tp-footer-social-icons" style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '20px',
                    alignItems: 'center'
                  }}>
                    <Link href="https://www.youtube.com" target="_blank" aria-label="YouTube" style={{
                      color: '#fff',
                      fontSize: '24px',
                      transition: 'color 0.3s'
                    }}>
                      <i className="fab fa-youtube"></i>
                    </Link>
                    <Link href="https://www.facebook.com" target="_blank" aria-label="Facebook" style={{
                      color: '#fff',
                      fontSize: '24px',
                      transition: 'color 0.3s'
                    }}>
                      <i className="fab fa-facebook"></i>
                    </Link>
                    <Link href="https://www.instagram.com" target="_blank" aria-label="Instagram" style={{
                      color: '#fff',
                      fontSize: '24px',
                      transition: 'color 0.3s'
                    }}>
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link href="https://www.x.com" target="_blank" aria-label="X (Twitter)" style={{
                      color: '#fff',
                      fontSize: '24px',
                      transition: 'color 0.3s'
                    }}>
                      <i className="fab fa-x-twitter"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
