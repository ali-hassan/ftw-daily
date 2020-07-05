import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '..';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './FeaturePage.css';
import './FeaturePage.css';
import image from './about-us-1056.jpg';

const FeaturePage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'FeaturePage',
        description: 'Feature Saunatime',
        name: 'Feature page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <div
            classNam="elementor-element elementor-element-a014d63 elementor-widget elementor-widget-heading"
            data-id="a014d63"
            data-element_type="widget"
            data-widget_type="heading.default"
          >
            <div classNam="elementor-widget-container">
              <h1 className="elementor-heading-title elementor-size-default">Features</h1>{' '}
            </div>
          </div>

          <div
            classNam="css.elementor-element elementor-element-00adb05 elementor-widget elementor-widget-text-editor"
            data-id="00adb05"
            data-element_type="widget"
            data-widget_type="text-editor.default"
          >
            <div classNam="elementor-widget-container">
              <div classNam="elementor-text-editor elementor-clearfix">
                <p>Learn How to Easily Find Open Days Using Our Tool</p>
              </div>
            </div>
          </div>


          <div classNam="elementor-text-editor elementor-clearfix">
                           <p><strong>Great way to find all your open days in the UK</strong></p>
                           <p>
                               Whether you are a student looking for university open days or a university all set to organise your next open day event, 
                               Find Open Days is a convenient tool for you.</p><p>As a student, 
                               you can search for available open days at all universities across UK. 
                               We are constantly working on making our listing of available university open 
                               days more and more extensive by adding new events every week.
                          </p>
                               
                          <p>
                              As a university, you can get your open day event listed on the Find Open 
                              Days platform and grab the interest of prospective students from all over UK.
                          </p>
          </div>



          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <div classNam="elementor-image">
                <img
                  src="https://findopendaysz.kinsta.cloud/wp-content/uploads/2020/04/find-open-days-features-for-students-and-university.png"
                  classNam="attachment-large size-large"
                  alt=""
                  srcset="https://findopendaysz.kinsta.cloud/wp-content/uploads/2020/04/find-open-days-features-for-students-and-university.png 320w, https://findopendaysz.kinsta.cloud/wp-content/uploads/2020/04/find-open-days-features-for-students-and-university-165x300.png 165w"
                  sizes="(max-width: 320px) 100vw, 320px"
                />
              </div>
            </div>

            <div className={css.contentMain}>
              <div classNam="elementor-widget-container">
                <div classNam="elementor-text-editor elementor-clearfix">
                  <h1>For Students and Universities</h1>
                </div>
              </div>

              <div
                classNam="elementor-element elementor-element-024b4d3 elementor-widget elementor-widget-text-editor"
                data-id="024b4d3"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div classNam="elementor-widget-container">
                  <div classNam="elementor-text-editor elementor-clearfix">
                    
                    <p>
                      <strong>Great way to find all your open days in the UK</strong>
                    </p>

                    <p>
                      Whether you are a student looking for university open days or a university all
                      set to organise your next open day event, Find Open Days is a convenient tool
                      for you.
                    </p>
                    <p>
                      As a student, you can search for available open days at all universities
                      across UK. We are constantly working on making our listing of available
                      university open days more and more extensive by adding new events every week.
                    </p>
                    <p>
                      As a university, you can get your open day event listed on the Find Open Days
                      platform and grab the interest of prospective students from all over UK.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
            <div classNam="elementor-widget-container">
                 <div classNam="elementor-text-editor elementor-clearfix">
                    <h1>Great Filters</h1>
                  </div>
                </div>

              <div
                classNam="elementor-element elementor-element-68db843 elementor-widget elementor-widget-text-editor"
                data-id="68db843"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div classNam="elementor-widget-container">
                  <div classNam="elementor-text-editor elementor-clearfix">
                    <p>
                      <strong>
                        Our listings make it easy to navigate to the organiser’s booking page
                      </strong>
                    </p>

                    <p>
                      You can use Find Open Days to do more than just view the open day event
                      listings. The tool also offers you an easy way to secure a spot in the
                      university open day that you’re interested in attending. Once you’ve found the
                      open day event that you want to be a part of, you can book your place by
                      navigating to the event booking page of the university/college itself. We also
                      have an alerts too so you can never miss open day. Get the open days straight
                      to your inbox.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={css.contentMain}>
              <div classNam="elementor-image">
                <img
                  src="https://findopendaysz.kinsta.cloud/wp-content/uploads/2020/04/find-open-days-features-great-filters.png"
                  className="attachment-large size-large"
                  alt=""
                  srcset="https://findopendaysz.kinsta.cloud/wp-content/uploads/2020/04/find-open-days-features-great-filters.png 320w, https://findopendaysz.kinsta.cloud/wp-content/uploads/2020/04/find-open-days-features-great-filters-165x300.png 165w"
                  sizes="(max-width: 320px) 100vw, 320px"
                />
              </div>
            </div>
          </div>

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <img
                src="https://findopendaysz.kinsta.cloud/wp-content/uploads/2020/04/find-open-days-features-book-your-place.png"
                className="attachment-large size-large"
                alt=""
                srcset="https://findopendaysz.kinsta.cloud/wp-content/uploads/2020/04/find-open-days-features-book-your-place.png 320w, https://findopendaysz.kinsta.cloud/wp-content/uploads/2020/04/find-open-days-features-book-your-place-165x300.png 165w"
                sizes="(max-width: 320px) 100vw, 320px"
              />
            </div>

            <div className={css.contentMain}>
                  <div classNam="elementor-text-editor elementor-clearfix">
                    <h1>Book Your Place in the Event{' '}</h1>
                  </div>

              <div classNam="elementor-text-editor elementor-clearfix">
                <p>
                  {' '}
                  <strong>
                    Our listings make it easy to navigate to the organiser’s booking page
                  </strong>{' '}
                </p>

                <p>
                  You can use Find Open Days to do more than just view the open day event listings.
                  The tool also offers you an easy way to secure a spot in the university open day
                  that you’re interested in attending. Once you’ve found the open day event that you
                  want to be a part of, you can book your place by navigating to the event booking
                  page of the university/college itself. We also have an alerts too so you can never
                  miss open day. Get the open days straight to your inbox.
                </p>
              </div>
            </div>
          </div>

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <div classNam="elementor-widget-wrap">
                <div
                  classNam="elementor-element elementor-element-38d024e elementor-widget elementor-widget-text-editor"
                  data-id="38d024e"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div classNam="elementor-widget-container">
                    <div classNam="elementor-text-editor elementor-clearfix">
                      <h1> Rate and Review your experience </h1>
                    </div>
                  </div>
                </div>
                <div
                  classNam="elementor-element elementor-element-3217fa6 elementor-widget elementor-widget-text-editor"
                  data-id="3217fa6"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div classNam="elementor-widget-container">
                    <div classNam="elementor-text-editor elementor-clearfix">
                      <p>
                        <strong>Don’t Forget to Give Back!</strong>
                      </p>
                      <p>
                        After you have attended the open day event, don’t forget to come back and
                        share with us all that you discovered, learned, and experienced at the
                        event! Our community has students just like you who are looking for the
                        right university. They would love to hear about your experience at the
                        university open day event. You only need a few minutes to provide a rating
                        and review for the event. Your feedback may help someone make the right
                        decision in their university selection, so do spare the time!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={css.contentMain}>
              <div classNam="elementor-image">
                <img
                  src="https://findopendaysz.kinsta.cloud/wp-content/uploads/2020/04/find-open-days-features-rate-and-review.png"
                  className="attachment-large size-large"
                  alt=""
                  srcset="https://findopendaysz.kinsta.cloud/wp-content/uploads/2020/04/find-open-days-features-rate-and-review.png 320w, https://findopendaysz.kinsta.cloud/wp-content/uploads/2020/04/find-open-days-features-rate-and-review-165x300.png 165w"
                  sizes="(max-width: 320px) 100vw, 320px"
                />
              </div>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default FeaturePage;
