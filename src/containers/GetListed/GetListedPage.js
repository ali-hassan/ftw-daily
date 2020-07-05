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

import css from './GetListedPage.css';
import image from './about-us-1056.jpg';

const GetListedPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'GetListed',
        description: 'Get Listed Saunatime',
        name: 'Get Listed page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>

        <div class="elementor-widget-container">
             <div class="elementor-text-editor elementor-clearfix"><p>open day</p></div>
        </div>

        <div class="elementor-widget-container">
            <h1 class="elementor-heading-title elementor-size-default">Get Listed</h1>		
        </div>

        <div class="elementor-widget-container">
           <div class="elementor-text-editor elementor-clearfix"><p>Your Open Day</p></div>
        </div>


        <div class="elementor-widget-container">
            <h1 class="elementor-heading-title elementor-size-default">Get Listed</h1>		
        </div>



          <div class="elementor-widget-container">
            <img
              width="1024"
              height="494"
              src="https://findopendaysz.kinsta.cloud/wp-content/uploads/2020/04/find-open-days-get-listed-great-looking-pages.jpg"
              class="attachment-large size-large"
              alt=""
              srcset="https://findopendaysz.kinsta.cloud/wp-content/uploads/2020/04/find-open-days-get-listed-great-looking-pages.jpg 1024w, https://findopendaysz.kinsta.cloud/wp-content/uploads/2020/04/find-open-days-get-listed-great-looking-pages-300x145.jpg 300w, https://findopendaysz.kinsta.cloud/wp-content/uploads/2020/04/find-open-days-get-listed-great-looking-pages-768x371.jpg 768w, https://findopendaysz.kinsta.cloud/wp-content/uploads/2020/04/find-open-days-get-listed-great-looking-pages-600x289.jpg 600w"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>

          <div class="elementor-widget-container">
            <h1 class="elementor-heading-title elementor-size-default"> Great looking pages </h1>
          </div>

          <div
            class="elementor-element elementor-element-9b99da2 elementor-widget elementor-widget-text-editor"
            data-id="9b99da2"
            data-element_type="widget"
            data-widget_type="text-editor.default">
            <div class="elementor-widget-container">
              <div class="elementor-text-editor elementor-clearfix">
                Our platform delivers stunning pages…that look great and responsive on any device
              </div>
            </div>
          </div>

          <div class="elementor-widget-container">
             <h2 class="elementor-heading-title elementor-size-default">Get Listed</h2>		
          </div>


          <div class="elementor-widget-container">
              <div class="elementor-text-editor elementor-clearfix">
                  From your social media, stunning gallery images to booking links, we make it easy for our community to sign up for your next open day experience. 
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

export default GetListedPage;
